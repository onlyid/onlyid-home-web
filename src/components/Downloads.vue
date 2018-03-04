<template>
  <div>
    <p id="banner1">唯ID下载中心</p>
    <div class="section">
      <p class="section-title">下载SDK</p>
      <p class="section-summary">使用SDK快速为您的app接入唯ID</p>
      <div style="margin-top: 40px;">
        <p>所有SDK均开源并托管在 <a href="https://gitee.com/lltb" target="_blank">Gitee</a>。</p>
        <p class="downloads-title" id="android-sdk">Android</p>
        <p>已改用gradle形式，发布到 <a href="https://bintray.com/ltb/maven/onlyid-sdk" target="_blank">JCenter</a> ，请开发者使用gradle来编译、更新SDK。</p>
        <p>在app模块的build.gradle添加：</p>
        <pre>dependencies {
    其他依赖 ...
    compile 'net.onlyid:onlyid-sdk:[2,3)'
}</pre>
        <p>集成SDK。</p>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-sdk-android" target="_blank">
              <downloads-item title="Android SDK" detail="Android SDK代码库（使用java）" update-date="2018-03-01">
                <i class="material-icons" style="background-color: #67C23A;">android</i>
                <router-link to="/docs/changelog" slot="version">v2.0.1</router-link>
              </downloads-item>
            </a>
          </el-col>
        </el-row>
        <p class="downloads-title" id="ios-sdk">iOS</p>
        <p>推荐通过CocoaPods集成。</p>
        <p>在项目的Podfile添加：</p>
        <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git', :tag => '2.0.5'</pre>
        <p>集成SDK。</p>
        <p>或下载以下源码文件：</p>
        <p>直接 <a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a> AuthViewController.swift和OnlyID_SDK.swift，添加到您的项目。</p>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-sdk-ios" target="_blank">
              <downloads-item title="iOS SDK" detail="iOS SDK代码库（使用swift）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #409EFF;">&#xe72c;</i>
                <router-link to="/docs/changelog" slot="version">v2.0.1</router-link>
              </downloads-item>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="gradient-hr"/>
    <div class="section" id="demo">
      <p class="section-title">示例DEMO</p>
      <p class="section-summary">通过示例学习接入和使用唯ID</p>
      <div style="margin-top: 40px">
        <p>所有示例代码均开源并托管在 <a href="https://gitee.com/lltb" target="_blank">Gitee</a>。</p>
        <p class="downloads-title">客户端</p>
        <el-row class="downloads-row" type="flex" justify="space-between">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-frontend" target="_blank">
              <downloads-item title="Web" detail="Web前端示例（使用Vue.js）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #F56C6C;">&#xe743;</i>
                <router-link to="/docs/changelog" slot="version">v1.0.1</router-link>
              </downloads-item>
            </a>
          </el-col>
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-android" target="_blank">
              <downloads-item title="Android" detail="Android客户端示例（使用java）" update-date="2018-03-01">
                <i class="material-icons" style="background-color: #67C23A;">android</i>
                <router-link to="/docs/changelog" slot="version">v1.0.1</router-link>
              </downloads-item>
            </a>
          </el-col>
        </el-row>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-ios" target="_blank">
              <downloads-item title="iOS" detail="iOS客户端示例（使用swift）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #409EFF;">&#xe72c;</i>
                <router-link to="/docs/changelog" slot="version">v1.0.1</router-link>
              </downloads-item>
            </a>
          </el-col>
        </el-row>
        <p class="downloads-title">服务端</p>
        <p>适用于Web、启用了服务端中转流程的Android和iOS app。</p>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-backend" target="_blank">
              <downloads-item title="Node.js" detail="Node.js后台示例" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #E6A23C;">&#xe60c;</i>
                <router-link to="/docs/changelog" slot="version">v1.0.1</router-link>
              </downloads-item>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import DownloadsItem from './DownloadsItem'

  export default {
    components: {
      DownloadsItem
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner1 {
    background-color: #409EFF;
  }
  .downloads-title {
    margin: 50px 0 30px 0;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: #EBEEF5 solid 1px;
  }
  .section {
    font-size: 16px;
  }
  .downloads-row {
    margin-top: 40px;
  }
</style>
