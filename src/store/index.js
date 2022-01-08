import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    roomMenbers: 0,
    sessions: [],
  },
  getters: {
    get_sessions: (state) => state.sessions,
  },
  mutations: {
    /* 监听服务器事件，直接使用SOCKET_'服务器发布的时间名即可。' */
    //处理成员数量事件
    SOCKET_number(state, number){
      console.log('数量变化了',number)
      state.roomMenbers = number 
    },

    SOCKET_welcome(state, data) {
      console.log(data.number='+++++++++++++++++');
      state.sessions.push({
        name: data.name,
        message: data.message,
        date: new Date(),
        welcome: true,
      });
    },


    // 登录拿取聊天记录
    SOCKET_history(state, data) {
      data.forEach((element) => {
        element.name === localStorage.getItem("username")
          ? (element.self = true)
          : (element.self = false);
      });
      state.sessions = data;
    },

    // 处理成员聊天 ？？？？
    SOCKET_chat(state, data) {
      state.sessions.push(data);
    },

    // 本地更新自己的记录
    sendMessage(state, data) {
      state.sessions.push(data);
    },
  },
  actions: {},
  modules: {},
});
