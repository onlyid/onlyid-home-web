<template>
  <div id="docs">
    <back-top/>
    <p id="banner" v-if="isDocsIndex">文档中心</p>
    <div id="content">
      <el-row>
        <el-col :span="4" v-if="!isDocsIndex" style="border-right: solid 1px #e6e6e6;">
          <p class="title1">首页</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs">文档首页</el-menu-item>
          </el-menu>
          <p class="title1">新手入门</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/overview">概述</el-menu-item>
            <el-menu-item index="/docs/oauth2">OAuth 2.0入门</el-menu-item>
          </el-menu>
          <p class="title1">快速接入</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/web">Web</el-menu-item>
            <el-menu-item index="/docs/android">Android</el-menu-item>
            <el-menu-item index="/docs/ios">iOS</el-menu-item>
          </el-menu>
          <p class="title1">最佳实践</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/custom">自定义选项（基础）</el-menu-item>
            <el-menu-item index="/docs/security">安全性</el-menu-item>
          </el-menu>
          <p class="title1">其他</p>
          <el-menu :router="true" class="menu" :default-active="activeIndex">
            <el-menu-item index="/docs/faq">常见问题</el-menu-item>
            <el-menu-item index="/docs/review">审核</el-menu-item>
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
    components: {BackTop},
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
<style scoped src="../../assets/docs.css"></style>
<style scoped>
  .title1 {
    color: #7f7f7f;
    font-size: 16px;
  }
  .menu {
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
    padding: 40px 0px;
    width: 980px;
    margin: 0 auto;
  }
</style>
