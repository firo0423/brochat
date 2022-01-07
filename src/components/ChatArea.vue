<template>
  <div id="chatArea">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      @keydown.enter="sendMessage"
      v-model="message"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "chatArea",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage(e) {
      if (e.keyCode === 13) {
        this.$store.commit("sendMessage", this.message);
        // 达成enter输入的效果
        e.preventDefault(); // 阻止浏览器默认换行操作
        this.message = "";
        return false;
      }
    },
  },
};
</script>

<style scoped>
#chatArea {
  position: absolute;
  bottom: 0px;
  padding: 0;
  width: 100%;
  height: 20%;
  border-top: solid 1px #ddd;
}
textarea {
  padding: 10px;
  font-size: 15px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
}
</style>