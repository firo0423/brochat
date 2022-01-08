<template>
  <div class="msgBoard">
    <!-- v-for 的优先度比 v-if高所以不能一起使用 -->
    <ul>
      <li v-for="(entry, index) in sessions" :key="index">
        <div class="main" :class="{ self: entry.self }">
          <div class="avatar">{{ entry.name | stringAvatar }}</div>
          <p class="username">{{ entry.name }}</p>
          <p class="text">{{ entry.message }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "msgBoard",
  data() {
    var myDate = new Date();
    return {
      username: "firo",
      sessions: [
        {
          name: "根根",
          message: "这是一条别人的消息12333333333,123333333312312321231212333333333",
          date: myDate.getHours() + 1 + (myDate.getMinutes() + 1),
          self: false,
        },
        {
          name: "firo",
          message: "这是一条自己的消息",
          date: myDate.getHours() + 1 + (myDate.getMinutes() + 1),
          self: true,
        },
      ],
    };
  },
  filters: {
    time(date) {
      if (date) {
        date = new Date(date);
      }
      return `${date.getHours()}:${date.getMinutes()}`;
    },

    stringAvatar(name) {
      // 将名字的第一个字符作为头像
      return name.substring(0, 1).toUpperCase();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
p {
  margin: 0;
}
li {
  margin-top: 40px;
}
li:first-child {
  margin-top: 20px;
}
.main{
  position: relative;
}

/* 别人信息 */
.main .text {
  background-color: #fafafa;
  float: left;
  display: block;
  max-width: 60%;
  text-align: left;
  padding: 10px;
}
.main .username {
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
}

/* 个人信息 */
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
  background-color: #fafafa;
  float: right;
  display: block;
  max-width: 80%;
  text-align: right;
}
.self .username {
  text-align: right;
}
</style>