# brochat
使用前端使用Vue+Vue.socket.io+element.ui<br>
后端使用Node.js+socket.io做的简易多人聊天室<br>

## 项目结构
```
brochat
├── public                    
│   ├── favicon.ico
│   └── index.html
├── server                       // 后端文件夹
│   ├── app.js                   // 项目入口文件
│   ├── package-lock.json
│   └── package.json
├── src                          // 前端文件夹
│   ├── assets
│   │   └── logo.png
│   ├── components            
│   │   ├── ChatArea.vue         // 输入消息组件
│   │   └── msgBorad.vue         // 显示消息组件
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js             // vuex
│   ├── views
│   │   ├── Home.vue             // 聊天主页面
│   │   └── Login.vue            // 登录页
│   ├── App.vue
│   └── main.js
├── babel.config.js
├── package-lock.json
├── package.json
├── README.md
└── vue.config.js
```
