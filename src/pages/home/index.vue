<template>
  <div class="page-home">
    <common-header />
    <div class="page-home-container">
      <banner-ad />
      <div class="container container-box ads-pin-container">
        <GameLayout />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { CommonHeader, BannerAd, GameLayout } from '@/components';

  defineOptions({
    name: 'HomeIndex'
  });
</script>

<style lang="scss" scoped>


.page-home-container {
  width: 100%;
  margin: auto;
  background: #00547c;
  border: 1px solid transparent;
  padding-top: 56px;
  padding-bottom: 20px;
}
@media screen and (min-width: 768px) {
  .page-home-container {
    padding-top: 5px;
  }
}

</style>
