<template>
  <div id="app">
    <back-top />
    <div id="header-bg">
      <el-row id="header">
        <el-col :span="2">
          <router-link to="/">
            <img src="./assets/logo.png"
                 width="66px"
                 style="cursor: pointer; vertical-align: middle; padding-top: 14px">
          </router-link>
        </el-col>
        <el-col :span="9">
          <el-menu id="menu"
                   :default-active="activeIndex"
                   mode="horizontal"
                   @select="select">
            <el-menu-item index="/docs/overview">文档</el-menu-item>
            <el-menu-item index="/experience">在线体验</el-menu-item>
            <el-menu-item index="/console">控制台</el-menu-item>
            <el-menu-item index="/downloads">下载</el-menu-item>
            <el-menu-item index="/prices">价格</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="8"
                style="margin-top: 12px;">
          <a href="https://github.com/onlyid"
             style="text-decoration: none"
             target="_blank"><i class="iconfont github-icon">&#xe6f6;</i></a>
        </el-col>
        <el-col :span="5">
          <div style="padding-top: 12px; float: right">
            <el-button size="medium"
                       type="primary"
                       @click="goConsole">登录控制台</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view />
    <div id="footer-bg"
         v-show="showFooter">
      <div id="footer">
        <el-row style="margin: 40px 0;">
          <el-col :span="10"
                  :offset="1">
            <p class="footer-title">联系我们</p>
            <ul>
              <li>企业客户专线：15521312099</li>
              <li>技术支持电话（微信）：15521312099
                <el-popover placement="right"
                            trigger="hover">
                  <img src="./assets/wechat-155.jpeg"
                       width="215" />
                  <i class="iconfont"
                     slot="reference"
                     style="vertical-align: middle">&#xe7e5;</i>
                </el-popover>
              </li>
              <li>技术支持QQ：452391310</li>
              <li>技术支持邮箱：<a href="mailto:help@onlyid.net">help@onlyid.net</a></li>
              <li>官方开发者QQ群：23831587</li>
            </ul>
          </el-col>
          <el-col :span="8">
            <p class="footer-title">开发者服务</p>
            <ul>
              <li>
                <router-link to="/docs">接入文档（网站、Android、iOS）</router-link>
              </li>
              <li>
                <router-link to="/docs/ios">价格和功能（标准版、企业版）</router-link>
              </li>
              <li>
                <router-link to="/docs/faq">常见问题 FAQ</router-link>
              </li>
              <li>
                <router-link to="/blogs">开发者博客</router-link>
              </li>
              <li>
                <router-link to="/release-notes">版本更新历史</router-link>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <p class="footer-title">关于唯ID</p>
            <ul>
              <li>
                <router-link to="/about">团队介绍</router-link>
              </li>
              <li>
                <router-link to="/about#join">加入我们</router-link>
              </li>
              <li>
                <router-link to="/about#brand">品牌故事</router-link>
              </li>
              <li>
                <router-link to="/user-agreement">用户协议</router-link>
              </li>
              <li>
                <router-link to="/privacy-policy">隐私权政策</router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
        <div style="text-align: center; color: #ccc; font-size: 13px;">
          <span style="margin-right: 50px">
            &copy; 2017-{{ currentYear }}
            <a href="http://uchar.cn/"
               target="_blank">深圳市友全科技有限公司</a>
            All rights reserved.
          </span>
          <a href="http://beian.miit.gov.cn/"
             target="_blank">粤ICP备16120960号-3</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackTop from './components/BackTop'
import config from './config'

export default {
  components: { BackTop },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    select(key) {
      if (key === '/console') {
        window.location.assign(config.consoleUrl)

        return
      }
      this.$router.push(key)
    },
    goConsole() {
      window.location.assign(config.consoleUrl)
    }
  },
  computed: {
    activeIndex() {
      return '/' + this.$route.path.split('/')[1]
    },
    showFooter() {
      const list = ['/docs']
      return !list.includes(this.activeIndex)
    }
  }
}
</script>

<style scoped>
#header-bg {
  background-color: #fff;
}
#header {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
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
  width: 1200px;
  color: #fff;
}
.footer-title {
  color: #ebeef5;
  font-size: 18px;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: #ebeef5 solid 1px;
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
  margin-left: 10px;
}
#footer a {
  color: #ccc;
  text-decoration: none;
}
#footer a:hover {
  color: #fff;
}
.github-icon {
  color: #c0c4cc;
}
.github-icon:hover {
  color: #909399;
  cursor: pointer;
}
</style>
