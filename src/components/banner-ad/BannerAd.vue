<template>
  <div class="banner-ad-wrapper container-box">
    <ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px">显示广告</ins>
  </div>
</template>

<script lang="ts" setup>

  defineOptions({
    name: 'BannerAd'
  })

</script>

<style lang="scss" scoped>
.banner-ad-wrapper {
  text-align: center;
}
.adsbygoogle {
  background: #0D4C6C;
  margin: 15px auto;
  text-align: center;
}
@media (min-width: 1200px) {
  .adsbygoogle {
    margin: 30px auto;
  }
}

</style>
