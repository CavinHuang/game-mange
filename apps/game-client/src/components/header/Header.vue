<template>
  <div class="page-header">
    <div class="page-header-container container-box">
      <div class="header-logo">
        <img
          src="https://www.game4y.com/static/game4y/img/head_logo_4y.png"
          alt="logo"
        />
      </div>
      <nav class="header-nav">
        <a
          v-for="(item, index) in navs"
          :key="'nav' + index"
          :href="item.url"
          class="nav-item"
          >{{ item.text }}</a
        >
      </nav>

      <div class="header-search">
        <input type="text" class="search-input" />
        <button class="search-button">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAe
                    CAYAAAA7MK6iAAADbklEQVRIib3WW4hVVRzH8c+Ml5lJx0QlY7oaRRRExorKoowuVERvktBTgawieooeeuxCEOVDQQ+1A+0lgpKU
                    XgQnKYQMyv2gBRGiRFFZ3s0przM9/NdxtmeOM+kc+sGCDXuv/V3/2/r/e4aGhkyhy3A3bsVVuAhjOIY9+B5fY0fOeWyqn7XUMwn4
                    OqzCPVhQYGPoKav5/A++w9qc8+bpgFfhaczDcczGKezHQZzGHCzC3PKut+xdjzdyzofPBzwLr2AF/kZfgW3CMHYV8CgGRBhux6O4C
                    SfRL9z/fM75p3OBZwwODp45RIE+jqPFyvV4EZ/hF4wUa0dxAvtyztvrut6AX7G0HHYx7qzrejilNDIV+Ck8U6Az8RrexpFznRpSS
                    lJKoymlH+q63oLbMF+EYUld1xtTShOSrhWXa/GscG8/XsdHkwE7Kee8C8/hT5Eb94mwTVALvEok0mxswIfnC23AfxYh6xHheLKqq
                    sH273pFgiwvJzyEdy4U2oB/gc2YgSWiJCeAl4s6nYUvRZJ0Q5+IMoP7O4FvMX45DHcJCtvxm6iAG9vd3YuhAj0s6rQryjkfxe7CWC
                    Cy/CzwnPI8UuDd1H6RZLPEhXMWuJXZo2V1U63/9TQ4Z8AnyvOAceu7pYUijKcbnDPgPeVEF+PybhGrqurH1cLqQ9jbDt5RwLN1qLd
                    p6AZhSA925pwPtoO3iMQ6iYcw4Za5QK0QDWMGvmp/2Ysf8a1oDFfiiekSq6paikeUDobPO4HH8IGIxTExANwxDehCvGy8hNblnH/v
                    BCZmpk9FVs/EanGjnS90kWil1wuDarzX6dtmbb1ZPuwTGf4uVooY/RfoXViDhL+KATtzzh0HgfbRZ7HoTjcbH322YR2+EX32dOP7+c
                    Izj+EB40PgTDEADmBNznn1VGDF2lfxsEiO1q1zQIw/+0U+zBMt9VLhlZMFtA07RVYfF+Gr2uHN0ael49hYIFfgkgLvK5BryhoSE2Z
                    vAe/DWryUc95U13U/lolRalld130ppa2TWdxUP+7FgyJhFpUDtKaLI6IDbcFwzvmP5uaqql5ALvC5TcunAjc1UKyfY3yIP5BzPjTZ
                    pgZ8RMPtnVx9Lp0SbXNvWQdxLKU06aaU0ta6rvvE3TAixt7R3kl3dUnFve+L63gMK/8XcAP+luiGH/8LoygCwQXaM2kAAAAASUVORK5CYII="
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CommonHeader'
})

const navs = [
  {
    url: '/',
    text: 'HOT'
  },
  {
    url: '/',
    text: 'HOT'
  },
  {
    url: '/',
    text: 'New'
  },
  {
    url: '/',
    text: 'Girl'
  },
  {
    url: '/',
    text: 'Boy'
  },
  {
    url: '/',
    text: 'Kid'
  },
  {
    url: '/',
    text: 'Shooting'
  },
  {
    url: '/',
    text: 'Running'
  },
  {
    url: '/',
    text: 'Sports'
  },
  {
    url: '/',
    text: '3D Games'
  },
  {
    url: '/',
    text: 'More'
  },
  {
    url: '/',
    text: 'tags'
  }
]
</script>

<style lang="scss" scoped src="./header.scss"></style>
