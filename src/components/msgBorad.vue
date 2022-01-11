<template>
  <div
    id="msgBoard"
    ref="msgBoard"
    :style="{ backgroundColor: theme.chat_backgroundColor }"
  >
    <!-- v-for 的优先度比 v-if高所以不能一起使用 -->
    <ul>
      <li v-for="(entry, index) in get_sessions" :key="index">
        <div class="main" :class="{ self: entry.self }" re>
          <!-- 欢迎信息 -->
          <div v-if="entry.welcome" class="welcome_shell">
            <p class="welcome">{{ entry.message }}</p>
          </div>

          <!-- 聊天信息 -->
          <template v-if="!entry.welcome">
            <div
              class="avatar"
              :style="{
                backgroundColor: theme.avatar_BackColor,
                color: theme.avatar_FontColor,
              }"
            >
              {{ entry.name | stringAvatar }}
            </div>
            <div class="message">
              <p
                class="username"
                :style="{
                  color: theme.chat_username_timeColor,
                }"
              >
                {{ entry.name }}
              </p>
              <div class="text_line">
                <p
                  class="text"
                  :style="{
                    color: theme.textarea_TextColor,
                    '--self_back': theme.chat_self_MessageBackColor,
                    '--main_back': theme.chat_main_MessageBackColor,
                  }"
                >
                  {{ entry.message }}
                </p>
              </div>
              <p
                class="time"
                :style="{
                  color: theme.chat_username_timeColor,
                }"
              >
                {{ entry.date | timeFormat }}
              </p>
            </div>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["get_sessions", "get_theme"]),
    ...mapState(["theme"]),
  },
  name: "msgBoard",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  watch: {
    get_theme: {
      deep: true,
      handler() {
        console.log("储存了");
        this.$store.commit("storeTheme");
      },
    },
  },
  updated() {
    console.log("更新了");
    this.$refs.msgBoard.scrollTop = this.$refs.msgBoard.scrollHeight;
  },
  mounted() {
    // 开头初始化主题
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") !== null) {
      console.log("读取了");
      this.$store.commit("initTheme");
    }
    // 自动滚至底部
    this.$refs.msgBoard.scrollTop = this.$refs.msgBoard.scrollHeight;
  },
  filters: {
    timeFormat(date) {
      return moment(date).format("HH:mm");
    },

    stringAvatar(name) {
      // 将名字的第一个字符作为头像
      return name.substring(0, 1).toUpperCase();
    },
  },
};
</script>

<style >
#msgBoard {
  position: relative;
  z-index: 10;
  height: 690px;
  overflow-y: scroll;
  transition: all 0.2s;
}

/* // 滚动条宽度 */
#msgBoard::-webkit-scrollbar {
  width: 8px;
}
/* // 滚动条轨道 */
#msgBoard::-webkit-scrollbar-track {
  background: rgba(239, 239, 239, 0);
  border-radius: 2px;
}
/* // 小滑块 */
#msgBoard::-webkit-scrollbar-thumb {
  background: #69696949;
  border-radius: 10px;
}
#msgBoard::-webkit-scrollbar-thumb:hover {
  background: #8080808a;
}

#msgBoard ul {
  list-style: none;
  padding: 0;
}
#msgBoard p {
  margin: 0;
}
#msgBoard li {
  margin-top: 20px;
}
#msgBoard li:first-child {
  margin-top: 20px;
}
/* 欢迎信息 */
.welcome_shell {
  float: left;
  width: 100%;
}
.welcome {
  text-align: center;
  color: #686868;
}

/* 别人信息 */
.main .message {
  margin-bottom: 20px;
  width: 80%;
  float: left;
  display: flex;
  flex-direction: column;
}
.main .time {
  padding-left: 10px;
  font-size: 14px;
  text-align: left;
  color: rgb(110, 110, 110);
  float: left;
}
.main .text {
  background-color: var(--main_back);
  border-radius: 10px;
  float: left;
  max-width: 100%;
  word-break: break-word;
  display: block;
  text-align: left;
  padding: 10px;
}
.main .username {
  padding-left: 10px;
  margin-bottom: 3px;
  font-size: 14px;
  color: rgb(110, 110, 110);
}
.main .avatar {
  float: left;
  height: 57px;
  width: 57px;
  text-align: center;
  line-height: 57px;
  background-color: #fff;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  font-size: 24px;
}

/* 个人信息 */
.self .message {
  float: right;
}
.self .time {
  font-size: 14px;
  padding-right: 10px;
  text-align: right;
}
.self .avatar {
  float: right;
  height: 57px;
  width: 57px;
  text-align: center;
  line-height: 57px;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 10px;
}
.self .text {
  background-color: var(--self_back);
  display: block;
  float: right;
  max-width: 100%;

  text-align: right;
}
.self .username {
  padding-right: 10px;
  text-align: right;
}
</style>