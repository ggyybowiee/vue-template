<template>
  <div>
    <div class="msg" ref="msg" :class="{active: msgStatus}">
      <div class="msg-warpper">
        {{text}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vue-msg',
    props: {
      msg: String
    },
    data() {
      return {
        text: '',
        msgStatus: false
      }
    },
    methods: {
      msgPlugin(msg, time = 2000) {
        this.text = msg;
        this.msgStatus = true;

        setTimeout(() => {
          this.msgStatus = false;
        }, time);
      },
    }
  };
</script>
<style lang="less" scoped>
  .msg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    min-height: 0;
    line-height: 25px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: all 0.5s;
    border-radius: 5px;
    z-index: -1;
  }

  .msg.active {
    width: 150px;
    z-index: 11;
    min-height: 25px;
    opacity: 1;
  }
</style>