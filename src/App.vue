<template>
  <div class="page-container">
    <common-header />
    <RouterView />
    <BackTop />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import BackTop from '@/components/BackTop'
import Footer from './components/footer/Footer.vue'
import { CommonHeader } from '@/components'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
