import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var myDate = new Date();
export default new Vuex.Store({
  state: {
    sessions: [
      {
        name: "虎",
        message:
          "这是一条别人的消息你好好好好好好好好好1233333333312333333331231232123121233333333111111111111111111111111111111111111111111111111111111111111111111111111113",
        date: myDate,
        self: false,
      },
      {
        name: "firo",
        message: "这是一条自己的消息阿八八八八八八八八八八八八八",
        date: myDate,
        self: true,
      },
      {
        name: "firo",
        message: "这是一条自己的消息阿八八八八八八八八八八八八八",
        date: myDate,
        self: true,
      },
      {
        name: "firo",
        message: "这是一条自己的消息阿八八八八八八八八八八八八八",
        date: myDate,
        self: true,
      },
      {
        name: "firo",
        message: "这是一条自己的消息阿八八八八八八八八八八八八八",
        date: myDate,
        self: true,
      },
      {
        name: "firo",
        message: "这是一条自己的消息阿八八八八八八八八八八八八八",
        date: myDate,
        self: true,
      },
      {
        name: "firo",
        message: "这是一条自己的消息阿八八八八八八八八八八八八八",
        date: myDate,
        self: true,
      },
    ],
  },
  mutations: {
    sendMessage(state,data){
      state.sessions.push({
        name:data.username,
        message:data.message,
        date:new Date(),
        self: true,
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
