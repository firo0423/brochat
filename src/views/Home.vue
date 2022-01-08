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
  position: relative;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 2px 2px rgba(139, 139, 139, 0.205);
  z-index: 9999;
}
.el-header span {
  color: rgb(110, 110, 110);
}
</style>
