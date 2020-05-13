<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$t('测试国际化')}}</p>
    <br>

    <h1>自定义组件、生成插件</h1>
    <br>

    <el-button @click="incrementStep">点击打开msg弹窗</el-button>
    <vue-msg ref="msg"></vue-msg>
    <vue-button type="warn">警告按钮</vue-button>
    <vue-button type="error">错误按钮</vue-button>
    <vue-button>默认按钮</vue-button>
  </div>
</template>

<script>
  import {
    mapActions,
    mapState
  } from 'vuex'

  import api from '../api/api'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Hello world'
      }
    },
    computed: {
      ...mapState([
        "count"
      ])
    },
    mounted() {
      this.getIPInfoAndEmail();
    },
    methods: {
      ...mapActions([
        'incrementStep'
      ]),
      // 获取地址信息
      getIPInfoAndEmail() {
        let data = {
          appId: '',
          userId: '',
          appVersion: 0,
          appLanguage: ''
        };

        this.$http
          .post(api.getIPInfoAndEmail(), data)
          .then(res => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      showMsg() {
        this.$nextTick(() => {
          this.$refs.msg.msgPlugin('我是弹窗信息', 5000);
        });
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #42b983;
  }
</style>