<template>
  <div id="app">
    <div id="header-bg">
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
            <a :href="config.consoleUrl" target="_blank"><el-button size="medium" type="primary">登 录</el-button></a>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view/>
    <div id="footer-bg" v-show="showFooter">
      <div id="footer">
        <el-row style="margin: 30px 0;">
          <el-col :span="10" :offset="1">
            <p class="footer-title">联系我们</p>
            <ul>
              <li>客户经理（业务咨询）：18588237889
                <el-popover placement="right" trigger="hover">
                  <img src="./assets/wechat-185.jpeg" width="215"/>
                  <i class="iconfont" slot="reference">&#xe7e5;</i>
                </el-popover>
              </li>
              <li>技术支持：15521312099
                <el-popover placement="right" trigger="hover">
                  <img src="./assets/wechat-155.jpeg" width="215"/>
                  <i class="iconfont" slot="reference">&#xe7e5;</i>
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
import config from './config'

export default {
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
        return open(config.consoleUrl)
      }
      this.$router.push(key)
    }
  },
  computed: {
    activeIndex () {
      return '/' + this.$route.path.split('/')[1]
    },
    showFooter () {
      return this.activeIndex !== '/docs'
    }
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
  .menu .el-menu-item:hover {
    color: #303133;
  }
  #menu > .el-menu-item:focus {
    color: #909399;
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
