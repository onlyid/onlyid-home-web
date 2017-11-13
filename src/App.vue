<template>
  <div id="app">
    <div id="wrapper">
      <div id="header-bg">
        <el-row id="header">
          <el-col :span="3"><img src="./assets/logo1.png" width="100px" @click="home" style="cursor: pointer; vertical-align: middle"></el-col>
          <el-col :span="9">
            <el-menu :default-active="activeIndex" mode="horizontal" background-color="#7f7f7f" text-color="#fff"
                     active-text-color="#ffda00" :router="true">
              <el-menu-item index="/user" style="border-right: dashed 1px #ccc">账号设置</el-menu-item>
              <el-menu-item index="/docs">文档</el-menu-item>
              <el-menu-item index="/console">控制台</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <router-view id="main"/>
      <div id="footer-placeholder"/>
    </div>
    <p id="footer">唯一ID &copy; 2017</p>
  </div>
</template>

<script>
  import ElMenuItem from '../node_modules/element-ui/packages/menu/src/menu-item.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElCol,
      ElRow,
      ElMenuItem},
    name: 'app',
    data () {
      return {
        activeIndex: '/' + this.$route.path.toString().split('/')[1]
      }
    },
    methods: {
      home () {
        this.$router.push('/')
      }
    },
    created () {
      this.$router.beforeEach((to, from, next) => {
        // 只匹配第一层路径 比如 /docs/android -> /docs
        this.activeIndex = '/' + to.path.toString().split('/')[1]
        next()
      })
    }
  }
</script>

<style>
  /*
  small font size 17px
  medium font size 22px
  large font size 30px
   */
  .small-font-size {
    font-size: 17px;
  }
  .medium-font-size {
    font-size: 22px;
  }
  .large-font-size {
    font-size: 30px;
  }
  body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    margin: 0px;
    background-color: #fafafa;
  }
  #app {
    min-width: 980px;
    /*color: #fff;*/
  }
  #header-bg {
    background-color: #7f7f7f;
  }
  #header {
    width: 980px;
    margin: 0 auto;
  }
  .el-menu--horizontal > .el-menu-item {
    font-size: 22px;
    height: 50px;
    line-height: 50px;
  }
  .el-menu--horizontal {
    /*margin-top: 6px;*/
    border-bottom: hidden;
  }
  .gradient_hr {
    background:linear-gradient( to right, rgba(220,220,220,0) 0%, rgba(220,220,220,1) 10%, rgba(220,220,220,1) 90%, rgba(220,220,220,0) 100% );
    height:1px;
  }

  /* 高度不够时，footer置底效果 */
  html, body, #app {
    height: 100%;
  }
  #wrapper {
    min-height: 100%;
    margin-bottom: -50px;
  }
  #footer {
    background-color: #7f7f7f;
    color: #fff;
    margin: 0px;
    padding: 15px 0px;
    font-size: 17px;
    text-align: center;
    height: 20px;
  }
  #footer-placeholder {
    height: 50px;
  }

  /** font start **/
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(./assets/MaterialIcons-Regular.woff2) format('woff2'),
    url(./assets/MaterialIcons-Regular.woff) format('woff'),
    url(./assets/MaterialIcons-Regular.ttf) format('truetype');
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 48px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  @font-face {
    font-family: 'iconfont';
    src: url(./assets/iconfont.woff) format('woff'),
    url(./assets/iconfont.ttf) format('truetype');
  }
  .iconfont{
    font-family:"iconfont";
    font-size:24px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  /** font end **/

  /* docs ios */
  .docs-ios-tabs .el-tabs__item {
    font-size: 17px;
  }
</style>
