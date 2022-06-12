<template>
  <div ref="gridItem" class="grid-item">
    <a :href="item?.url">
      <div class="pic-box">
        <img :src="item?.cover" :alt="item?.name" />
        <div ref="gameName" class="game_name">{{ item?.name }}</div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue'

defineOptions({
  name: 'GameItem'
})

defineProps({
  item: {
    type: Object as PropType<{ url: string; cover: string; name: string }>,
    default: () => ({})
  }
})

const gridItem = ref<HTMLDivElement | null>(null)
const gameName = ref<HTMLDivElement | null>(null)

const mouseoverHandler = () => {
  gameName.value!.style.height = '45px'
  gameName.value!.style.overflow = 'unset'
}

const mouseleaveHandler = () => {
  gameName.value!.style.height = '0px'
  gameName.value!.style.overflow = 'hidden'
}

onMounted(() => {
  gridItem.value?.addEventListener('mouseover', mouseoverHandler, false)
  gridItem.value?.addEventListener('mouseleave', mouseleaveHandler, false)
})
</script>

<style lang="scss" scoped>
.grid-item {
  float: left;
  width: 150px;
  height: 150px;
  position: relative;
  background: #e9eff2;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 10px 5px rgb(0 0 0 / 20%);
  margin-bottom: 10px;
  .game_name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #29638b;
    color: #fff;
    text-align: center;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: height 0.2s ease;
  }
}
</style>
