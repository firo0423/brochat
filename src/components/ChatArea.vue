<template>
  <div id="chatArea">
    <textarea
      placeholder="按 Enter 发送"
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
      username: localStorage.getItem("username"),
      message: "",
    };
  },
  sockets: {
    //查看socket是否渲染成功
    connect() {
      console.log("链接成功");
    },
    //检测socket断开链接
    disconnect() {
      console.log("断开链接");
    },
    // 重新链接
    reconnect() {
      console.log("重新链接");
    },
    //客户端接收后台传输的socket事件 后台写什么 这写什么
  },
  methods: {
    sendMessage(e) {
      if (e.keyCode === 13) {
        // 在这里还要拿本地的一个名字
        this.$store.commit("sendMessage", {
          message: this.message,
          name: this.username,
          date: new Date(),
          self: true,
        });

        // 要给socket端口送信息
        this.$socket.emit("message", {
          name: this.username,
          message: this.message,
          date: new Date(),
          // 这是给别人的
          self: false,
        });

        // 达成enter输入的效果
        e.preventDefault(); // 阻止浏览器默认换行操作
        this.message = "";
        return false;
      }
    },
  },
  mounted() {
    this.$socket.connect();
    this.$socket.emit("login", this.username);
  },
};
</script>

<style scoped>
#chatArea {
  box-shadow: 0 -1px 2px 2px rgba(167, 167, 167, 0.151);
  z-index: 999;
  position: absolute;
  bottom: 0px;
  padding: 0;
  width: 100%;
  height: 20%;
  border-top: solid 1px #ddd;
}
textarea {
  font-family: Arial, sans-serif;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  resize: none;
}
textarea::-webkit-input-placeholder {
  color: rgb(102, 102, 102);
  font-family: Arial, sans-serif;
}
</style>