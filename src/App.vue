<template>
  <div class="page-container">
    <RouterView />
    <BackTop />
  </div>
</template>

<script lang="ts" setup>
  import BackTop from '@/components/BackTop';
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
