<template>
  <div id="docs">
    <back-top/>
    <p id="banner1" v-if="isDocsIndex">唯ID文档中心</p>
    <div id="content">
      <el-row>
        <el-col :span="4" v-if="!isDocsIndex" style="border-right: solid 1px #e6e6e6;">
          <p class="category-title">首页</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs">文档首页</el-menu-item>
          </el-menu>
          <p class="category-title">新手入门</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/overview">产品概述</el-menu-item>
            <el-menu-item index="/docs/oauth2">OAuth 2.0入门</el-menu-item>
            <el-menu-item index="/docs/prepare">准备工作</el-menu-item>
          </el-menu>
          <p class="category-title">快速接入</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/web">Web</el-menu-item>
            <el-menu-item index="/docs/android">Android</el-menu-item>
            <el-menu-item index="/docs/ios">iOS</el-menu-item>
          </el-menu>
          <p class="category-title">最佳实践</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/custom">自定义选项（基础）</el-menu-item>
            <el-menu-item index="/docs/security">安全性</el-menu-item>
          </el-menu>
          <p class="category-title">其他</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/faq">常见问题</el-menu-item>
            <el-menu-item index="/docs/review">审核制度</el-menu-item>
            <el-menu-item index="/docs/changelog">SDK更新记录</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="isDocsIndex ? 24 : 19" :offset="isDocsIndex ? 0 : 1">
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
      }
    },
    methods: {
    },
    computed: {
      activeIndex () {
        return this.$route.path
      },
      isDocsIndex () {
        return this.$route.path === '/docs'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category-title {
    color: #7f7f7f;
    font-size: 16px;
  }
  .menu.el-menu {
    border-right: none;
  }
  .menu >>> .el-icon-arrow-down:before {
    content: none;
  }
  .menu .el-menu-item:focus {
    background: none;
  }
  .menu .el-menu-item.is-active {
    background-color: #ecf5ff;
    color: #303133;
  }
  #content {
    padding: 50px 0px;
    width: 980px;
    margin: 0 auto;
  }
  #docs >>> #content {
    font-size: 15px;
  }
  #content >>> p {
    margin: 0.8em 0;
  }
  #docs >>> h1 {
    font-weight: normal;
    font-size: 24px;
  }
  #docs >>> h2 {
    font-size: 21px;
    font-weight: normal;
    margin-top: 50px;
    margin-bottom: 15px;
  }
  #docs >>> h3 {
    font-size: 18px;
    font-weight: normal;
    margin-top: 30px;
    margin-bottom: 15px;
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
  #docs >>> .docs-img {
    border: 1px solid #DCDFE6;
    border-radius: 5px;
  }
  #docs >>> .docs-img-div {
    text-align: center;
    display: inline-block;
    margin-right: 40px;
  }
  #docs >>> .docs-img-div p {
    margin-bottom: 0;
    color: #7f7f7f;
    font-size: 13px;
  }
</style>
