<template>
  <div class="page-home">
    <common-header />
    <div class="page-home-container">
      <banner-ad />
      <div class="container container-box ads-pin-container">
        <GameLayout />
      </div>
      <div class="no-white-box">
        <div class="ActionDescribe container-box">
          <h3>play the best free online games on game4y.com</h3>
          <div class="coll_content">
            <p
              >You can play the newest and best free online games on game4y.com. <a href="/fighting-games">Fighting games</a> , <a href="/racing-games">racing games</a> ,
              <a href="/shooting-games">shooting games</a> , <a href="/sports-games">sports games</a> , <a href="/boy-games">boys games</a> , <a href="/girl-games">girls games</a> ,
              <a href="/kids-games">kids games</a> , all these html5 games can be played on your mobile, pad and tablet directly without installation. Play now for free.</p
            >
            <p
              >Our html5 games are playable on most popular devices, including Android, iOS and Windows phones, PC and macOS, you can reach them whenever you want. Play free online games at
              game4y.com, the ultimate playground for kids of all ages! New games added daily. Pick your favorite game, and have fun!</p
            >
          </div>
          <div class="expand_content" style="display: none">
            <p
              >You can play the newest and best free online games on game4y.com. <a href="/fighting-games">Fighting games</a> , <a href="/racing-games">racing games</a> ,
              <a href="/shooting-games">shooting games</a> , <a href="/sports-games">sports games</a> , <a href="/boy-games">boys games</a> , <a href="/girl-games">girls games</a> ,
              <a href="/kids-games">kids games</a> , all these html5 games can be played on your mobile, pad and tablet directly without installation. Play now for free.</p
            >
            <p
              >Our html5 games are playable on most popular devices, including Android, iOS and Windows phones, PC and macOS, you can reach them whenever you want. Play free online games at
              game4y.com, the ultimate playground for kids of all ages! New games added daily. Pick your favorite game, and have fun!</p
            >
          </div>
          <p style="color: #fff; margin-top: 10px; font-weight: bold" class="toggle-content">click to know More ....</p>
        </div>
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
  .no-white-box {
    margin: 0 10px 0 10px;
    clear: both;
    padding-bottom: 10px;
    border-radius: 5px;
    .ActionDescribe {
      padding: 16px;
      color: #fff;
      h3 {
        font-size: 20px;
        padding-bottom: 10px;
      }
      p {
        padding-bottom: 10px;
        line-height: 21px;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        &:hover {
          text-decoration: underline;
          color: #089b00;
        }
      }
    }
    .coll_content {
      color: #fff;
      height: 20px;
      overflow: hidden;
    }
  }
</style>
