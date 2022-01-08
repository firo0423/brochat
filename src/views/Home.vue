<template>
  <div id="home">
    <el-header height="">
      <span>在线聊天室(在线人数2)</span>
    </el-header>
    <!-- 聊天框 -->
    <msgBorad />
    <!-- 输入框 -->
    <chatArea />
  </div>
</template>

<script>
import msgBorad from "../components/msgBorad.vue";
import chatArea from "../components/ChatArea.vue";
export default {
  name: "Home",
  components: {
    chatArea,
    msgBorad,
  },
};
</script>

<style>
#home .el-header {
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  text-align: center;
}
.el-header span {
  color: rgb(110, 110, 110);
}
</style>
