<template>
  <div id="docs">
    <back-top/>
    <p id="banner1" v-show="isDocsIndex">唯ID文档中心</p>
    <div id="content">
      <el-row>
        <el-col :span="5" v-if="!isDocsIndex">
          <el-menu :default-active="activeIndex" :router="true" :default-openeds="['1','2','3','4']">
            <el-menu-item index="/docs">首页</el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <span>新手入门</span>
              </template>
              <el-menu-item index="overview">产品概述</el-menu-item>
              <el-menu-item index="oauth2">OAuth 2.0入门</el-menu-item>
              <el-menu-item index="prepare">准备工作</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>快速接入</span>
              </template>
              <el-menu-item index="web">Web</el-menu-item>
              <el-menu-item index="android">Android</el-menu-item>
              <el-menu-item index="ios">iOS</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>最佳实践</span>
              </template>
              <el-menu-item index="custom">自定义选项（基础）</el-menu-item>
              <el-menu-item index="security">安全性</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span>其他</span>
              </template>
              <el-menu-item index="faq">常见问题</el-menu-item>
              <el-menu-item index="review">审核制度</el-menu-item>
              <el-menu-item index="changelog">SDK更新记录</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="isDocsIndex ? 24 : 18" :offset="isDocsIndex ? 0 : 1">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import BackTop from './BackTop'

  export default {
    components: {
      BackTop
    },
    data () {
      return {
        activeIndex: this.$route.path.split('/')[2],
        isDocsIndex: this.$route.path === '/docs'
      }
    },
    methods: {
    },
    created () {
      this.$router.beforeEach((to, from, next) => {
        console.log('beforeEach')
        this.activeIndex = to.path.split('/')[2]
        this.isDocsIndex = to.path === '/docs'
        next()
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    padding: 50px 0px;
    width: 980px;
    margin: 0 auto;
  }
  #docs >>> h1 {
    font-weight: normal;
    font-size: 20px;
  }
  #docs >>> h2 {
    font-size: 18px;
    font-weight: normal;
    margin-top: 50px;
  }
  #docs >>> h3 {
    font-size: 16px;
    font-weight: normal;
    margin-top: 25px;
  }
  #docs >>> pre {
    padding: 10px;
    background-color: #f7f8f9;
  }
  #docs >>> .glossary-dl dt {
    margin: 20px 0 5px;
    font-weight: bold;
  }
  #docs >>> .glossary-dl dd {
    margin-left: 0px;
  }
  #docs >>> .docs-ol {
    background-color: #f7f8f9;
    padding: 10px 10px 10px 30px;
  }
  #docs >>> .docs-ol li {
    margin: 10px 0;
  }
</style>
