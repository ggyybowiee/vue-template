<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted: function () {
      let urlParams = this.common.getUrlParams(window.location.href);

      // 缓存入参
      for (let i in urlParams) {
        sessionStorage.setItem(i, urlParams[i]);
      }

      let langArr = ["zh", "en", "es", "pt"];

      if (langArr.indexOf(sessionStorage.getItem("lang")) > -1) {
        this.$i18n.locale = sessionStorage.getItem("lang");
      } else {
        this.$i18n.locale = "en";
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>