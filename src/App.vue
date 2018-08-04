<template>
  <div id="app">
    <back-top/>
    <div id="header-bg" v-show="showHeader">
      <el-row id="header">
        <el-col :span="2">
          <router-link to="/">
            <img src="./assets/logo.png" width="66px" style="cursor: pointer; vertical-align: middle; padding-top: 14px">
          </router-link>
        </el-col>
        <el-col :span="17">
          <el-menu id="menu" :default-active="hack ? '' : activeIndex" mode="horizontal" @select="select">
            <el-menu-item index="/docs">文档</el-menu-item>
            <el-menu-item index="/downloads">下载</el-menu-item>
            <el-menu-item index="/pricing">价格</el-menu-item>
            <el-menu-item index="/experience">在线体验</el-menu-item>
            <el-menu-item index="/console">控制台</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="5">
          <div style="padding-top: 12px; float: right">
            <el-button size="medium" type="primary" @click="login">登 录</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view/>
    <div id="footer-bg" v-show="showFooter">
      <div id="footer">
        <el-row style="margin: 40px 0;">
          <el-col :span="10" :offset="1">
            <p class="footer-title">联系我们</p>
            <ul>
              <li>客户经理（业务咨询）：18588237889
                <el-popover placement="right" trigger="hover">
                  <img src="./assets/wechat-185.jpeg" width="215"/>
                  <i class="iconfont" slot="reference" style="vertical-align: middle">&#xe7e5;</i>
                </el-popover>
              </li>
              <li>技术支持：15521312099
                <el-popover placement="right" trigger="hover">
                  <img src="./assets/wechat-155.jpeg" width="215"/>
                  <i class="iconfont" slot="reference" style="vertical-align: middle">&#xe7e5;</i>
                </el-popover>
              </li>
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
              <li><router-link to="/docs/faq">常见问题</router-link></li>
            </ul>
          </el-col>
          <el-col :span="5">
            <p class="footer-title">关于唯ID</p>
            <ul>
              <li><router-link to="/about">关于我们</router-link></li>
              <li><router-link to="/about/careers">加入我们</router-link></li>
              <li><router-link to="/about/privacy">隐私权政策</router-link></li>
              <li><router-link to="/about/agreement">服务条款</router-link></li>
            </ul>
          </el-col>
        </el-row>
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
import BackTop from './components/BackTop'
import config from './config'

export default {
  components: {BackTop},
  data () {
    return {
      currentYear: new Date().getFullYear(),
      config,
      hack: false
    }
  },
  methods: {
    select (key) {
      if (key === '/console') {
        this.hack = true
        this.$nextTick(() => { this.hack = false })
        return this.login()
      }
      this.$router.push(key)
    },
    login () {
      const left = screenX + (outerWidth - 450) / 2
      // 25约是顶部标题+网址栏的一半
      const top = screenY + (outerHeight - 650) / 2 - 25
      open(config.authorizeUrl, 'login', 'width=450,height=650,left=' + left + ',top=' + top)
    },
    async onCode (code) {
      try {
        const {data} = await this.$axios.post('/login', {code})
        // 如果存在user字段 说明已注册
        if (data.user) {
          location.replace(config.consoleUrl)
        } else { // 新用户注册
          sessionStorage.user = JSON.stringify(data)
          this.$router.replace('/signup')
        }
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    activeIndex () {
      return '/' + this.$route.path.split('/')[1]
    },
    showFooter () {
      const list = ['/docs', '/auth']
      return !list.includes(this.activeIndex)
    },
    showHeader () {
      const list = ['/auth']
      return !list.includes(this.activeIndex)
    }
  },
  created () {
    window.onCode = this.onCode.bind(this)
    this.$bus.$on('login', this.login.bind(this))
  }
}
</script>

<style scoped>
  #header-bg {
    background-color: #fff;
  }
  #header {
    width: 980px;
    margin: 0 auto;
  }
  #menu {
    border-bottom: none;
  }
  #menu > .el-menu-item {
    font-size: 16px;
    border-bottom: none;
  }
  #menu > .el-menu-item:focus {
    color: #909399;
  }
  #menu .el-menu-item:hover {
    color: #303133;
  }
  #menu > .el-menu-item.is-active {
    color: #303133;
    border-bottom: none;
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
    color: #EBEEF5;
    font-size: 18px;
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: #EBEEF5 solid 1px;
    margin-top: 0;
    margin-bottom: 0.8em;
  }
  #footer ul {
    margin: 0;
    padding: 0;
  }
  #footer li {
    list-style: none;
    font-size: 14px;
    margin-top: 12px;
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
