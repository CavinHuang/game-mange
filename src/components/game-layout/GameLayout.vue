<template>
  <div class="grid">
    <game-item
      v-for="(game, index) in games"
      :key="'game' + index"
      :item="game"
    />
  </div>
</template>

<script lang="ts" setup>
import GameItem from './GameItem.vue'
import mockData from './test'

defineOptions({
  name: 'GameLayout'
})

const games = mockData
</script>

<style lang="scss" scoped></style>
