<template>
  <div id="content">
    <el-row>
      <el-col :span="4" style="border-right: solid 1px #e6e6e6;">
        <p class="category-title">部署方式</p>
        <el-menu @select="handleSelect" :default-active="activeIndex" class="menu" :unique-opened="true" ref="menu">
          <el-submenu index="1">
            <template slot="title">
              <i class="material-icons menu-icon" style="color: #409EFF;">cloud</i>
              <span>公有云</span>
            </template>
            <el-menu-item index="/console/overview">概览</el-menu-item>
            <el-menu-item index="/console/analytics">数据统计</el-menu-item>
            <el-menu-item index="/console/settings">管理设置</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="material-icons menu-icon" style="color: #3b5898;">storage</i>
              <span>专有云</span>
            </template>
            <el-menu-item index="/console/private/overview">概览</el-menu-item>
            <el-menu-item index="/console/private/signatures">签名设置</el-menu-item>
            <el-menu-item index="/console/private/templates">模板设置</el-menu-item>
            <el-menu-item index="/console/private/analytics">数据统计</el-menu-item>
            <el-menu-item index="/console/private/settings">管理设置</el-menu-item>
            <el-menu-item index="/console/private/others">其他自定义选项</el-menu-item>
          </el-submenu>
          <el-menu-item index="/console/mobile-account">
            <i class="material-icons menu-icon" style="color: #67C23A;">contact_phone</i>
            <span slot="title">手机账号</span>
          </el-menu-item>
        </el-menu>
        <p class="category-title" style="margin-top: 35px">服务</p>
        <el-menu @select="handleSelect" :default-active="activeIndex" class="menu">
          <el-menu-item index="/console/account">
            <i class="material-icons menu-icon" style="color: #3b5898;">account_circle</i>
            <span slot="title">账号设置</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="material-icons menu-icon" style="color: #E6A23C;">link</i>
            <span slot="title">唯ID首页</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19" :offset="1">
        <router-view style="margin-top: 12px"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleSelect (key) {
        this.$router.push(key)
      }
    },
    mounted () {
      if (sessionStorage.getObj('developer').plan === 'standard') {
        this.$refs.menu.open('1')
      } else {
        this.$refs.menu.open('2')
      }
    },
    computed: {
      activeIndex () {
        const ss = this.$route.path.split('/')
        let index
        if (this.$route.path.startsWith('/console/private')) {
          index = '/console/private/' + ss[3]
        } else {
          index = '/console/' + ss[2]
        }
        console.log('computed activeIndex=', index)
        return index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    padding: 20px 0 50px;
    width: 980px;
    margin: 0 auto;
  }
  .menu.el-menu {
    border-right: none;
  }
  .menu >>> .el-submenu__title {
    font-size: 16px;
  }
  .menu.el-menu > .el-menu-item {
    font-size: 16px;
  }
  .category-title {
    color: #7f7f7f;
  }
  .menu-icon {
    font-size: 25px;
    margin-right: 15px;
  }
  .menu .el-submenu .el-menu-item {
    min-width: 100px;
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
</style>
