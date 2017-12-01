<template>
  <div id="content-bg">
    <div id="content">
      <el-row>
        <el-col :span="4">
          <el-menu :default-active="activeIndex" id="docs-menu" :router="true" background-color="#fafafa">
            <el-menu-item index="/docs">
              <i class="material-icons menu-item">home</i>
              <span slot="title">简介</span>
            </el-menu-item>
            <el-menu-item index="/docs/web">
              <i class="material-icons menu-item">web</i>
              <span slot="title">Web</span>
            </el-menu-item>
            <el-menu-item index="/docs/android">
              <i class="material-icons menu-item">android</i>
              <span slot="title">Android</span>
            </el-menu-item>
            <el-menu-item index="/docs/ios">
              <i class="iconfont menu-item">&#xe608;</i>
              <span slot="title">iOS</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20" class="main">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import DocsWeb from './DocsWeb.vue'
  import DocsAndroid from './DocsAndroid.vue'
  import DocsIOS from './Docs-iOS.vue'
  import ElMenu from '../../node_modules/element-ui/packages/menu/src/menu.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElCol,
      ElRow,
      ElMenu,
      DocsIOS,
      DocsAndroid,
      DocsWeb},
    name: 'User',
    data () {
      return {
        activeIndex: this.$route.path
      }
    },
    methods: {
      handleClick (tab) {
        console.log('handle click ' + tab.toString())
      }
    },
    created () {
      this.$router.beforeEach((to, from, next) => {
        this.activeIndex = to.path
        next()
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content-bg {
  }
  #content {
    padding: 50px 0px;
    width: 980px;
    margin: 0 auto;
    /*min-height: 600px;*/
  }
  #docs-tabs {

  }
  .main {
    padding-left: 20px;
  }
  .menu-item {
    font-size: 36px;
  }
  #docs-menu {
    border-right: hidden;
  }
  #docs-menu .el-menu-item {
    font-size: 17px;
    margin: 20px 10px;
  }
</style>
