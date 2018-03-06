<template>
  <div id="app">
    <el-popover
      ref="popover1"
      placement="right"
      trigger="hover">
      <div>
        <img src="./assets/wechat-185.jpeg" width="215"/>
      </div>
    </el-popover>
    <el-popover
      ref="popover2"
      placement="right"
      trigger="hover">
      <div>
        <img src="./assets/wechat-155.jpeg" width="215"/>
      </div>
    </el-popover>

    <div id="header-bg">
      <el-row id="header">
        <el-col :span="2">
          <router-link to="/">
            <img src="./assets/logo.png" width="66px" style="cursor: pointer; vertical-align: middle; padding-top: 14px">
          </router-link>
        </el-col>
        <el-col :span="18">
          <el-menu id="nav" :default-active="activeIndex" mode="horizontal" @select="select">
            <el-menu-item index="/docs">文档</el-menu-item>
            <el-menu-item index="/downloads">下载</el-menu-item>
            <el-menu-item index="/pricing">价格</el-menu-item>
            <el-menu-item index="/experience">在线体验</el-menu-item>
            <el-menu-item index="/console">控制台</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <div style="padding-top: 12px">
            <template v-if="isLogin">
              <span class="username">{{ username }}</span>
              <el-button size="medium" style="margin-left: 10px" @click="logout">退出</el-button>
            </template>
            <template v-else>
              <router-link to="/console"><el-button size="medium">登录</el-button></router-link>
              <router-link to="/console" style="margin-left: 10px"><el-button size="medium" type="primary">注册</el-button></router-link>
            </template>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view/>
    <div id="footer-bg">
      <div id="footer">
        <div v-show="showFooter" style="margin: 40px 0;">
        <el-row>
          <el-col :span="10">
            <p class="footer-title">联系我们</p>
            <ul>
              <li>客户经理（业务咨询）：18588237889 <i class="iconfont" v-popover:popover1>&#xe7e5;</i></li>
              <li>技术支持：15521312099 <i class="iconfont" v-popover:popover2>&#xe7e5;</i></li>
              <li>技术支持邮箱：<a href="mailto:help@onlyid.net">help@onlyid.net</a></li>
              <li>开发者QQ群：23831587</li>
            </ul>
          </el-col>
          <el-col :span="8">
            <p class="footer-title">开发者服务</p>
            <ul>
              <li><router-link to="/pricing">续费充值</router-link></li>
              <li><router-link to="/downloads#android-sdk">Android SDK</router-link></li>
              <li><router-link to="/downloads#ios-sdk">iOS SDK</router-link></li>
              <li><router-link to="/docs/changelog">SDK 更新记录</router-link></li>
              <li><router-link to="/docs/faq">常见问题</router-link></li>
            </ul>
          </el-col>
          <el-col :span="6">
            <p class="footer-title">关于唯ID</p>
            <ul>
              <li><router-link to="/about-us">关于我们</router-link></li>
              <li><router-link to="/about-us#contact">联系方式</router-link></li>
              <li><router-link to="/careers">加入我们</router-link></li>
              <li><router-link to="/privacy">隐私权政策</router-link></li>
              <li><router-link to="/agreement">服务条款</router-link></li>
            </ul>
          </el-col>
        </el-row>
        </div>
        <div style="text-align: center; color: #ccc; font-size: 13px;">
          <span>深圳市友全科技有限公司</span>
          <span style="margin-left: 100px">唯ID &nbsp; © &nbsp; {{ currentYear }}</span>
          <a href="http://www.miitbeian.gov.cn/" style="margin-left: 100px;" target="_blank">粤ICP备16120960号-3</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        username: '',
        activeIndex: '/' + this.$route.path.split('/')[1],
        currentYear: new Date().getFullYear(),
        isLogin: false
      }
    },
    methods: {
      logout () {
        this.$axios.post('/logout').then((res) => {
          sessionStorage.clear()
          // this.$router.replace('/')
        }).catch((err) => {
          console.error(err)
        })
      },
      select (key) {
        this.$router.push(key)
      }
    },
    mounted () {
      this.$router.beforeEach((to, from, next) => {
        console.log('beforeEach from app')
        // 只匹配第一层路径 比如 /docs/android -> /docs
        this.activeIndex = '/' + to.path.split('/')[1]
        next()
      })

      const user = sessionStorage.getObj('user')
      console.log('user= ' + user)
      if (user) {
        this.username = user.name
        this.isLogin = true
      }
    },
    computed: {
      // 文档页面不显示footer的主体内容
      showFooter () {
        return this.activeIndex !== '/docs'
      }
    }
  }
</script>

<style scoped>
  .username {
    font-size: 16px;
    color: #7f7f7f;
  }
  .username:hover {
    color: #303133;
  }
  #header-bg {
    background-color: #fff;
  }
  #header {
    width: 980px;
    margin: 0 auto;
  }
  #nav {
    border-bottom: none;
  }
  #nav > .el-menu-item {
    font-size: 16px;
  }
  #footer-bg {
    background-color: #4b5056;
    padding: 1px;
  }
  #footer {
    margin: 20px auto;
    width: 980px;
    color: #fff;
  }
  .footer-title {
    font-size: 18px;
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: #fff solid 1px;
  }
  #footer ul {
    padding: 0px;
  }
  #footer li {
    list-style: none;
    font-size: 14px;
    margin: 15px 0;
    height: 25px;
    color: #ccc;
  }
  #footer .iconfont {
    font-size: 18px;
    margin-left: 15px;
  }
  #footer a {
    color: #ccc;
    text-decoration: none;
  }
  #footer a:hover {
    color: #fff;
  }
</style>
