<template>
  <div>
    <!-- 表单合适需要添加 :rules="rules" rules就是数据里面的规则 同时还要在item下加prop绑定对应规则-->
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="form"
      class="loginContainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          auto-complete="false"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          size="normal"
          type="password"
          auto-complete="false"
        ></el-input>
      </el-form-item> -->
      
      <!-- 验证码模块先等等 -->
      <!-- <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          placeholder="点击图片更换验证码"
          size="normal"
          auto-complete="false"
          type="text"
          style="width: 250px; magin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" />
      </el-form-item> -->

      <div class="footer">
        <el-checkbox v-model="checked" class="loginRemember" ref="re"
          >记住我</el-checkbox
        >
        <!-- <router-link to="/Register">注册</router-link> -->
      </div>

      <el-button
        type="primary"
        size="default"
        style="width: 100%"
        @click="login"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

// 单文件组件
<script>
// export 默认暴露
export default {
  // 给组件起名字
  name: "Login",
  data() {
    return {
      // 存放用户数据
      loginForm: {
        username: "",
        // password: "",
        // code: "",
      },
      // tokenStr: "",
      checked: "",
      // captchaUrl: this.HOST + "/api/captcha",
      //   下面写校验规则
      //   写完要添加到loginForm里面
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        // password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        // code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // updateCaptcha() {
    //   this.captchaUrl = this.HOST + "/api/captcha?time=" + new Date();
    //   console.log(1);
    // },
    login() {
      // 登录时执行记住用户名
      this.remember();
      this.$refs.form.validate((valid) => {
        if (valid) {
          localStorage.setItem("username", this.loginForm.username);
          this.$router.replace({name:'Home'});
          // this.postRequest(this.HOST + "/api/login", this.loginForm)
          //   .then((res) => {
          //     //存储用户token
          //     this.tokenStr = `Bearer ${res.accessToken} ${res.refreshToken}`;

          //     window.localStorage.setItem("tokenStr", this.tokenStr);
          //     this.$router.push({name:'home'});
          //   })
          //   .catch((reason) => {
          //     console.log("失败的登录");
          //   });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    remember() {
      if (this.checked) {
        localStorage.setItem("username", this.loginForm.username);
      } else {
        localStorage.removeItem("username");
      }
    },
    initUsername() {
      if (localStorage.getItem("username")) {
        this.checked = true;
      }
      this.loginForm.username = localStorage.getItem("username");
    },
  },
  mounted: function () {
    this.initUsername();
  },
};
</script>

<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px;
  background-color: #fff;
  border: 2px solid #e0e0e0;
  box-shadow: 0 0 20px #e0e0e0;
}
.loginTitle {
  margin: 10px auto 30px auto;
  text-align: left;
}

.loginRemember {
  text-align: left;
  margin: 0 0 15px 0;
}
.footer .el-checkbox {
  float: left;
}
.footer a {
  display: block;
  float: right;
  text-decoration: none;
  color: #e0e0e0;
  transition: all 0.2s;
}
.footer a:hover {
  color: black;
}
.el-form-item__content img {
  float: right;
}
</style>