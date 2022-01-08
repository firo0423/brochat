<template>
  <div id="msgBoard" ref="msgBoard">
    <!-- v-for 的优先度比 v-if高所以不能一起使用 -->
    <ul>
      <li v-for="(entry, index) in get_sessions" :key="index">
        <div class="main" :class="{ self: entry.self }">
          <!-- 欢迎信息 -->
          <div v-if="entry.welcome" class="welcome_shell">
            <p class="welcome">{{ entry.message }}</p>
          </div>

          <!-- 聊天信息 -->
          <template v-if="!entry.welcome">
            <div class="avatar">{{ entry.name | stringAvatar }}</div>
            <div class="message">
              <p class="username">{{ entry.name }}</p>
              <div class="text_line">
                <p class="text">{{ entry.message }}</p>
              </div>
              <p class="time">{{ entry.date | timeFormat }}</p>
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
export default {
  computed: mapGetters(["get_sessions"]),
  name: "msgBoard",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  updated() {
    console.log("更新了");
    this.$refs.msgBoard.scrollTop = this.$refs.msgBoard.scrollHeight;
  },
  mounted() {
    // 自动滚至底部
    console.log("动了");
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
  background: rgb(239, 239, 239);
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
.welcome_shell{
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
  border-radius: 10px;
  float: left;
  max-width: 100%;
  word-break: break-word;
  display: block;
  background-color: #fafafa;
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
  display: block;
  float: right;
  max-width: 100%;
  background-color: #9eea6a;
  text-align: right;
}
.self .username {
  padding-right: 10px;
  text-align: right;
}
</style>