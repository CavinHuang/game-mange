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

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: repeat(auto-fill, 150px);
  grid-auto-flow: row dense;
  justify-content: center;
  grid-gap: 9px;
  place-content: center;
  font-size: 12px;
  grid-template-areas:
    'ads1 ads1 . . . . .'
    'ads1 ads1 . . . . .'
    '. . . . . ads2 ads2'
    '. . . . . ads2 ads2'
    'ads3 ads3 . . . . .'
    'ads3 ads3 . . . . .';
  max-width: 1110px;
  margin: auto;
  .ads-1 {
    grid-area: ads1;
  }
}
</style>
