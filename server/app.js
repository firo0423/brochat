// 导入express
const express = require("express");
const app = express();
// 开启socket服务
let server = app.listen(4000);
// socket 初始化

// cors配置websocket跨域问题
//将socket.io注入express模块
var io = require('socket.io')(server,{
  allowEIO3: true,
  cors: {
		origin: "http://localhost:8080",
		methods: ["GET", "POST"],
		credentials: true
	}
});

// 把聊天记录存内存里面
let sessions = []
let roomMenbers = 0


// 监听
io.on("connection", (socket) => {
  
  // 直接获取后台用户数量
  // const count = io.engine.clientsCount
  // console.log(count);
  // const count2 = io.of("/").sockets.size;
  // console.log(count2);
  
  roomMenbers = roomMenbers + 1

  console.log("有人链接",roomMenbers);

  // 处理登录人数事件
  socket.emit('number',roomMenbers)
  socket.broadcast.emit('number',roomMenbers)

  // 登录广播事件
  socket.on('login',data=>{
    socket.emit('socket',socket.name)
    // 发送聊天记录
    socket.emit('history',sessions)
    let processData= {name:data, message:data+'加入了聊天'}
    socket.broadcast.emit('welcome',processData)
  })


  // 处理发送信息事件
  // 与前端的字符串对应
  socket.on('message',data=>{
    sessions.push(data)
    socket.broadcast.emit('chat',data)
  })

  //断开事件
  socket.on('disconnect', ()=>{
    roomMenbers = roomMenbers - 1
    console.log('有人断开',roomMenbers);
  })
});

app.listen(3322, () => {
  console.log("服务开启成功。。。。");
});
