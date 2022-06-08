<template>
  <div class="footer">
    <div class="container-box">
      <div class="footer-tab">
        <a href="/privacy-policy" title="Contact Us"> Privacy Policy </a> |
        <a href="/cookies-policy"> Cookies Policy </a>|
        <a href="/contact-us"> Contact Us </a>
      </div>

      <div class="footer-container">
        <div class="menu">
          <div class="title">Free Games</div>
          <ul>
            <li>
              <a href="/fighting-games" title="Fighting Games"
                >Fighting Games</a
              >
            </li>
            <li>
              <a href="/shooting-games" title="Shooting Games"
                >Shooting Games</a
              >
            </li>
            <li>
              <a href="/racing-games" title="Racing Games">Racing Games</a>
            </li>
            <li>
              <a href="/sports-games" title="Sports Games">Sports Games</a>
            </li>
          </ul>
        </div>
        <div class="menu">
          <div class="title">&nbsp;</div>
          <ul>
            <li>
              <a href="/war-games" title="War Games">War Games</a>
            </li>
            <li>
              <a href="/animal-games" title="Animal Games">Animal Games</a>
            </li>
            <li>
              <a href="/hot-games" title="Hot Games">Hot Games</a>
            </li>
            <li>
              <a href="/stickman-games" title="Stickman Games"
                >Stickman Games</a
              >
            </li>
          </ul>
        </div>

        <div class="menu">
          <div class="title">Company</div>
          <ul>
            <li>
              <a href="/privacy-policy" title="Privacy Policy"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="/cookies-policy" title="Cookies Policy"
                >Cookies Policy</a
              >
            </li>
            <li>
              <a href="/advertise" title="Advertise with Us"
                >Advertise with Us</a
              >
            </li>
          </ul>
        </div>
        <div class="menu">
          <div class="title">Contact</div>
          <ul>
            <li>
              <a href="/contact-us" title="Contact Us">Contact Us</a>
            </li>
            <li>
              <a href="/submit" title="Submit A Game">Submit A Game</a>
            </li>
          </ul>
        </div>
        <div class="menu">
          <div class="title">Follow us</div>

          <div class="rating">
            <div class="social-follows">
              <a
                class="follow-fb"
                data-type="fb"
                href="https://www.facebook.com/Actiongameshub-374199626780686/?modal=admin_todo_tour"
              >
                <span class="icon"></span>
              </a>
              <a
                class="follow-y"
                data-type="twitter"
                href="https://www.youtube.com/channel/UCc0EGML_AvyYCe_pXOtTzEw?sub_confirmation=1"
              >
                <span class="icon"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>

      <div class="footer-bottom">
        Copy right @2021 game4y All Rights Reserved
      </div>
      <div id="backToTop" style="display: block">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CommonFooter'
})
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  color: #999;
  line-height: 2;
  .footer-tab {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #464646;
  }
  a {
    text-decoration: none;
    color: #999;
  }
  .footer-container {
    display: none;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 16px;
    padding-top: 20px;
    padding-bottom: 10px;
    .menu {
      width: 20%;
      float: left;
      text-align: left;
      .title {
        font-size: 18px;
        padding-bottom: 24px;
        clear: both;
        color: #fff;
      }
      li {
        padding-bottom: 12px;
        width: 100%;
        float: left;
        font-size: 13px;
        padding-right: 16px;
        a {
          color: #dedede;
          text-decoration: none;
        }
      }
    }
  }
  .footer-bottom {
    text-align: center;
    max-width: 1500px;
    color: #6e6e6e;
    margin: 0 auto;
    padding: 16px;
    border-top: 1px solid #464646;
  }
}
.footer,
.footer > .container-box {
  background: #37393b;
}
.footer .footer-container {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-tab {
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #464646;
}
@media screen and (min-width: 768px) {
  .footer .footer-container {
    display: block;
  }
  .footer .footer-tab {
    display: none;
  }
}
.clear {
  clear: both;
}
</style>
