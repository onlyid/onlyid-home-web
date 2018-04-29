<template>
  <div>
    <p id="banner1">唯ID下载中心</p>
    <div class="section">
      <p class="section-title">下载SDK</p>
      <p class="section-summary">使用SDK快速为你的app接入唯ID</p>
      <div style="margin-top: 40px;">
        <p class="subsection-title" id="android-sdk">Android</p>
        <p>已改用gradle形式，发布到 <a href="https://bintray.com/ltb/maven/onlyid-sdk" target="_blank">JCenter</a> ，请开发者使用gradle来编译、更新SDK。</p>
        <p>在app模块的build.gradle添加：</p>
        <pre>dependencies {
    其他依赖 ...
    compile 'net.onlyid:onlyid-sdk:+'
}</pre>
        <p>集成SDK。</p>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-sdk-android" target="_blank">
              <repo-item title="Android SDK" detail="Android SDK代码库（使用Java）" update-date="2018-03-01">
                <i class="material-icons" style="background-color: #67C23A;">android</i>
                <span slot="version">v1.4.3</span>
              </repo-item>
            </a>
          </el-col>
        </el-row>
        <p class="subsection-title" id="ios-sdk">iOS</p>
        <p>推荐通过CocoaPods集成。</p>
        <p>在项目的Podfile添加：</p>
        <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git'</pre>
        <p>集成SDK。</p>
        <p>或 <a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a>
          源码文件（不推荐）：AuthViewController.swift和OnlyID_SDK.swift，添加到你的项目。</p>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-sdk-ios" target="_blank">
              <repo-item title="iOS SDK" detail="iOS SDK代码库（使用Swift）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #409EFF;">&#xe72c;</i>
                <span slot="version">v1.4.0</span>
              </repo-item>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="gradient-hr"/>
    <div class="section" id="demo">
      <p class="section-title">示例Demo</p>
      <p class="section-summary">通过示例学习接入和使用唯ID</p>
      <div style="margin-top: 40px">
        <p class="subsection-title">客户端</p>
        <el-row class="downloads-row" type="flex" justify="space-between">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-frontend-vuejs" target="_blank">
              <repo-item title="Web" detail="Web前端示例（使用Vue.js）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #F56C6C;">&#xe743;</i>
                <span slot="version">v1.0.0</span>
              </repo-item>
            </a>
          </el-col>
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-android" target="_blank">
              <repo-item title="Android" detail="Android客户端示例（使用Java）" update-date="2018-03-01">
                <i class="material-icons" style="background-color: #67C23A;">android</i>
                <span slot="version">v1.0.0</span>
              </repo-item>
            </a>
          </el-col>
        </el-row>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-ios" target="_blank">
              <repo-item title="iOS" detail="iOS客户端示例（使用Swift）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #409EFF;">&#xe72c;</i>
                <span slot="version">v1.0.0</span>
              </repo-item>
            </a>
          </el-col>
        </el-row>
        <p class="subsection-title">服务端</p>
        <p>因服务端示例较简单，其他语言开发者请统一参看Node.js示例。</p>
        <el-row class="downloads-row">
          <el-col :span="11">
            <a href="https://gitee.com/lltb/onlyid-demo-backend-nodejs" target="_blank">
              <repo-item title="Node.js" detail="Node.js服务端示例（使用Express）" update-date="2018-03-01">
                <i class="iconfont" style="background-color: #E6A23C;">&#xe60c;</i>
                <span slot="version">v1.0.0</span>
              </repo-item>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import RepoItem from './RepoItem'

  export default {
    components: {
      RepoItem
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
  .section {
    font-size: 16px;
  }
  .downloads-row {
    margin-top: 40px;
  }
</style>
