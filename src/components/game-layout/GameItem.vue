<template>
  <div class="grid-item">
    <a :href="item?.url">
      <div class="pic-box">
        <img :src="item?.cover" :alt="item?.name" />
        <div class="game_name">{{ item?.name }}</div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

defineOptions({
  name: 'GameItem'
})

defineProps({
  item: {
    type: Object as PropType<{ url: string; cover: string; name: string }>,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>

</style>
