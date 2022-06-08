<template>
  <div class="ads ads-placeholder" :class="[isLeft ? 'ads-left' : 'ad-right']">
    <ins
      class="adsbygoogle"
      style="display: inline-block; width: 160px; height: 640px"
    >
      广告
    </ins>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'PortraitAd'
})

defineProps({
  isLeft: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.ads-left {
  transform: translateX(-30px);
}
.ads-placeholder {
  background: #0d4c6c;
}
.ads-left,
.ads-right {
  display: none;
}
.ads {
  text-align: center;
}
@media (min-width: 1300px) {
  .ads-left,
  .ads-right {
    display: block;
  }
}
</style>
