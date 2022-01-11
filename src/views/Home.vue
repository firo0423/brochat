<template>
  <div id="home">
    <!-- 标题 -->
    <el-header
      height=""
      :style="{ backgroundColor: theme.head_textarea_BackColor }"
    >
      <span :style="{ color: theme.headTextColor }"
        >在线聊天室(在线人数{{ roomMenbers }})</span
      >
      <!-- 主题颜色改变模块 -->
      <el-popover placement="bottom" width="350" trigger="click" title="主题色">
        <!-- 重置按钮 -->
        <el-button type="info" size="small" @click="resetTheme" class="resetbtn"
          >重置</el-button
        >
        <el-divider direction="horizontal"></el-divider>

        <!-- 顶部和输入框颜色 -->
        <div class="items_list">
          <!-- 头部字体 -->
          <div class="header_color">
            <span class="header_color_text">头部标题</span>
            <span class="colorCode">{{ theme.headTextColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.headTextColor"
            ></el-color-picker>
          </div>

          <!-- 头部和输入框颜色 -->
          <div class="header_textaea_color">
            <span class="header_color_text">边框背景</span>
            <span class="colorCode">{{ theme.head_textarea_BackColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.head_textarea_BackColor"
            ></el-color-picker>
          </div>

          <!-- 字体颜色 -->
          <div class="textarea_TextColor">
            <span class="header_color_text">字体颜色</span>
            <span class="colorCode">{{ theme.textarea_TextColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.textarea_TextColor"
            ></el-color-picker>
          </div>

          <!-- 字体颜色 -->
          <div class="avatar_BackColor">
            <span class="header_color_text">头像背景</span>
            <span class="colorCode">{{ theme.avatar_BackColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.avatar_BackColor"
            ></el-color-picker>
          </div>

          <!-- 字体颜色 -->
          <div class="avatar_FontColor">
            <span class="header_color_text">头像字体</span>
            <span class="colorCode">{{ theme.avatar_FontColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.avatar_FontColor"
            ></el-color-picker>
          </div>

          <!-- 时间和用户名色 -->
          <div class="chat_username_timeColor">
            <span class="header_color_text">名字时间</span>
            <span class="colorCode">{{ theme.chat_username_timeColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.chat_username_timeColor"
            ></el-color-picker>
          </div>

          <!-- 别人消息框背景色 -->
          <div class="chat_main_MessageBackColor">
            <span class="header_color_text">别消背景</span>
            <span class="colorCode">{{
              theme.chat_main_MessageBackColor
            }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.chat_main_MessageBackColor"
            ></el-color-picker>
          </div>

          <!-- 自己消息框颜色 -->
          <div class="chat_self_MessageBackColor">
            <span class="header_color_text">自消背景</span>
            <span class="colorCode">{{
              theme.chat_self_MessageBackColor
            }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.chat_self_MessageBackColor"
            ></el-color-picker>
          </div>

          <!-- 聊天背景色 -->
          <div class="chat_backgroundColor">
            <span class="header_color_text">聊天背景</span>
            <span class="colorCode">{{ theme.chat_backgroundColor }}</span>
            <el-color-picker
              show-alpha
              v-model="theme.chat_backgroundColor"
            ></el-color-picker>
          </div>
        </div>

        <span
          class="tool"
          slot="reference"
          :style="{ color: theme.headTextColor }"
          ><i class="el-icon-s-tools"></i
        ></span>
      </el-popover>
    </el-header>
    <!-- 聊天框 -->
    <msgBorad />
    <!-- 输入框 -->
    <chatArea />
  </div>
</template>

<script>
import { mapState } from "vuex";
import msgBorad from "../components/msgBorad.vue";
import chatArea from "../components/ChatArea.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    resetTheme() {
      localStorage.removeItem("theme");
      this.$store.commit("resetTheme");
    },
  },
  computed: mapState(["roomMenbers", "theme"]),
  components: {
    chatArea,
    msgBorad,
  },
};
</script>

<style>
/* box-shadow需要绝对定位才能调整z-index */
#home .el-header {
  position: relative;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 2px 2px rgba(139, 139, 139, 0.205);
  z-index: 9999;
}

/* 重置按钮 */
.resetbtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
/* 标题icon和文字 */
#home .el-header span {
  color: rgb(110, 110, 110);
}
#home .tool i {
  transition: all 0.2s;
}
#home .el-header .tool {
  float: right;
  cursor: pointer;
}
#home .el-header .tool :hover {
  color: rgb(43, 43, 43);
  transform: scale(1.2);
}

/* pop内颜色表格布局 */
.header_color,
.header_textaea_color,
.textarea_TextColor,
.chat_username_timeColor,
.avatar_BackColor,
.avatar_FontColor,
.chat_main_MessageBackColor,
.chat_self_MessageBackColor,
.chat_backgroundColor {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

/* 单元格内容 */
.header_color_text,
.colorCode {
  font-size: 18px;
}
.header_color_text {
  width: 90px;
}
.el-color-picker {
  margin-right: 0px;
}
.colorCode {
  width: 160px;
  border: 2px solid #83838381;
  padding: 0 5px;
  border-radius: 5px;
}
</style>
