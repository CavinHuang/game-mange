<template>
  <div class="FullScreenBox" :style="{ display: isShow ? 'block' : 'none' }">
    <div class="FullHead">
      <div class="FullLogo">
        <a href="//www.game4y.com">
          <img
            src="//www.game4y.com/static/game4y/img/head_logo_4y.png"
            width="150"
            alt="Game4y logo"
          />
        </a>
      </div>
      <div class="ExitFull">
        <a href="javascript:void(0);" class="maxSize"> Exit Full Screen </a>
      </div>
    </div>

    <iframe
      id="iframe-game"
      allow="autoplay"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="no"
      src="https://assets.actiongameshub.com/games/Bike-Rush-ag_v2/index.html?domain=game4y&amp;UA=UA-154890295-1"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: ''
})

defineProps({
  isShow: Boolean
})
</script>

<style lang="scss" scoped>
.FullScreenBox {
  position: initial;
  width: 100%;
  height: calc(100% - 50px);
  left: 0;
  top: 0;
  z-index: 9999999;
  .FullHead {
    height: 56px;
    background: linear-gradient(to bottom, #48a0c9 0, #29638b 100%);
    width: 100%;
  }
  .FullLogo {
    float: left;
    height: 56px;
    padding: 0 20px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 56px;
    }
    img {
      vertical-align: middle;
    }
  }
  .ExitFull {
    float: right;
    height: 56px;
    line-height: 56px;
    a {
      color: #fff;
      display: inline-block;
      height: 56px;
      text-decoration: none;
      position: relative;
      padding-left: 25px;
      margin-right: 20px;
    }
  }
  #iframe-game {
    background: #000;
  }
}
</style>
