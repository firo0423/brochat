import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    theme: {
      headTextColor: "rgb(110, 110, 110)",
      head_textarea_BackColor: "rgb(255, 255, 255)",
      textarea_TextColor: "rgb(0, 0, 0)",
      avatar_BackColor: "rgb(255, 255, 255)",
      avatar_FontColor: "rgb(0, 0, 0)",
      chat_main_MessageBackColor: "rgb(255, 255, 255)",
      chat_self_MessageBackColor: "rgb(158, 234, 106)",
      chat_username_timeColor: "rgb(110, 110, 110)",
      chat_backgroundColor: "rgb(238, 238, 238)",
    },
    roomMenbers: 0,
    sessions: [
    ],
  },
  getters: {
    get_sessions: (state) => state.sessions,
    get_theme:(state) => state.theme,
  },
  mutations: {
    SOCKET_socket(state, socket) {
      console.log(socket);
    },

    /* 监听服务器事件，直接使用SOCKET_'服务器发布的时间名即可。' */
    //处理成员数量事件
    SOCKET_number(state, number) {
      console.log("数量变化了", number);
      state.roomMenbers = number;
    },

    SOCKET_welcome(state, data) {
      console.log((data.number = "+++++++++++++++++"));
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

    initTheme(state) {
      state.theme = JSON.parse(localStorage.getItem("theme"));
    },
    resetTheme(state) {
      state.theme = {
        headTextColor: "rgb(110, 110, 110)",
        head_textarea_BackColor: "rgb(255, 255, 255)",
        textarea_TextColor: "rgb(0, 0, 0)",
        avatar_BackColor: "rgb(255, 255, 255)",
        avatar_FontColor: "rgb(0, 0, 0)",
        chat_main_MessageBackColor: "rgb(255, 255, 255)",
        chat_self_MessageBackColor: "rgb(158, 234, 106)",
        chat_username_timeColor: "rgb(110, 110, 110)",
        chat_backgroundColor: "rgb(238, 238, 238)",
      }
    },
    storeTheme(state) {
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
  actions: {},
  modules: {},
});
