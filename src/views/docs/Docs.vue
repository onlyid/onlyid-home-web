<template>
  <div class="content clear-fix docs">
    <div style="float: left; width: 200px; border-right: solid 1px #e6e6e6; top: 40px;" :style="{position: tocFixed ? 'fixed' : 'static'}">
      <p class="title1">新手入门</p>
      <el-menu :router="true" class="menu" :default-active="activeIndex">
        <el-menu-item index="/docs/overview">概述</el-menu-item>
        <el-menu-item index="/docs/oauth2">OAuth 2.0入门</el-menu-item>
      </el-menu>
      <p class="title1">快速接入</p>
      <el-menu :router="true" class="menu" :default-active="activeIndex">
        <el-menu-item index="/docs/web">网站</el-menu-item>
        <el-menu-item index="/docs/android">Android</el-menu-item>
        <el-menu-item index="/docs/ios">iOS</el-menu-item>
      </el-menu>
      <p class="title1">最佳实践</p>
      <el-menu :router="true" class="menu" :default-active="activeIndex">
        <el-menu-item index="/docs/custom">自定义选项</el-menu-item>
        <el-menu-item index="/docs/security">安全性</el-menu-item>
      </el-menu>
      <p class="title1">其他</p>
      <el-menu :router="true" class="menu" :default-active="activeIndex">
        <el-menu-item index="/docs/faq">常见问题</el-menu-item>
      </el-menu>
    </div>
    <router-view style="width: 910px; float: right;"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tocFixed: false
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path
    }
  },
  mounted () {
    this.scrollListener = addEventListener('scroll', () => {
      this.tocFixed = pageYOffset >= 60
    })
  },
  beforeDestroy () {
    removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .docs {
    p {
      margin: 0.8em 0;
    }

    h1 {
      font-weight: normal;
      font-size: 24px;
    }

    h2 {
      font-size: 21px;
      font-weight: normal;
      margin-top: 40px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 18px;
      font-weight: normal;
      margin-top: 25px;
      margin-bottom: 15px;
    }

    .docs-ol {
      background-color: #f7f8f9;
      padding: 10px 10px 10px 30px;
    }

    .docs-ol li {
      margin: 10px 0;
    }

    .docs-img {
      border: 1px solid #DCDFE6;
      border-radius: 5px;
    }

    .docs-img-div {
      text-align: center;
      display: inline-block;
      margin-right: 40px;
    }

    .docs-img-div p {
      margin-bottom: 0;
      color: #7f7f7f;
      font-size: 14px;
    }
  }
</style>
<style scoped>
  .title1 {
    color: #7f7f7f;
    font-size: 16px;
  }
  .menu {
    border-right: none;
  }
  .menu .el-menu-item:focus {
    background: none;
  }
  .menu .el-menu-item:hover {
    background-color: #ecf5ff;
  }
  .menu .el-menu-item.is-active {
    background-color: #ecf5ff;
    color: #303133;
  }
  .content {
    padding: 40px 20px;
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
