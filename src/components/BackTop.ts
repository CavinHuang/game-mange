import debounce from 'lodash.debounce';
import { Transition, computed, defineComponent, h, onMounted, ref, onUnmounted } from 'vue';

import type { VNode } from 'vue';

export default defineComponent({
  name: 'BackToTop',

  props: {
    threshold: { type: Number, default: 300 }
  },

  setup() {
    /** Scroll distance */
    const scrollTop = ref(0);

    const thresholdDistance = ref(200);

    /** Whether to display button */
    const show = computed<boolean>(() => {
      return scrollTop.value > thresholdDistance.value;
    });

    // Get scroll distance
    const getScrollTop = (): number => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const scrollHandler = debounce(() => {
      scrollTop.value = getScrollTop();
    }, 100);

    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener('scroll', scrollHandler);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', scrollHandler);
    });

    return (): VNode =>
      h(Transition, { name: 'fade' }, () =>
        show.value
          ? h(
              'div',
              {
                class: 'back-to-top',
                // hint text
                'aria-label': '返回',
                'data-balloon-pos': 'left',
                // Scroll to top
                onClick: () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  scrollTop.value = 0;
                },
                style: {
                  display: scrollTop.value > 100 ? 'block' : 'none'
                }
              },
              h('span')
            )
          : null
      );
  }
});
