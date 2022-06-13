<template>
  <div class="g-list home-best-list">
    <GameItem
      v-for="(game, index) in games"
      :key="'game' + index"
      class="list-item"
      :item="game"
    />
  </div>
</template>

<script lang="ts" setup>
import GameItem from './GameItem.vue'
defineOptions({
  name: 'GamePortraitList'
})

defineProps({
  games: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
.g-list {
  width: 110px;
  display: none;
  margin-top: 0 !important;
  .list-item {
    width: 100% !important;
    float: none !important;
    height: auto;
  }
}
@media (min-width: 1200px) {
  .g-list {
    display: block !important;
  }
}

.home-best-list {
  padding: 0 16px;
  background: #00547c;
  margin-top: 10px;
  a {
    color: #666;
    text-decoration: none;
  }
  .pic-box {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    background: #e9eff2;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 10px 5px rgb(0 0 0 / 20%);
    img {
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .title {
      overflow: hidden;
      height: 30px;
      line-height: 43px;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
    }
    .game_name {
      display: none !important;
    }
  }
}
</style>
