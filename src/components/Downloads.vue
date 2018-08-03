<template>
  <div>
    <p id="banner">下载中心</p>
    <div class="section">
      <div class="gradient-hr-title">
        <span><i class="iconfont title-icon">&#xe997;</i>下载SDK</span>
      </div>
      <p class="subsection-title" id="android-sdk">Android</p>
      <div>
        <p style="margin-top: 30px">已改用gradle形式，发布到 <a href="https://bintray.com/ltb/maven/onlyid-sdk" target="_blank">JCenter</a> ，请开发者使用gradle来编译、更新SDK。</p>
        <p>在app模块的build.gradle添加：</p>
        <pre>dependencies {
    其他依赖 ...
    compile 'net.onlyid:onlyid-sdk:+'
}</pre>
        <p>集成SDK。</p>
        <a href="https://gitee.com/lltb/onlyid-sdk-android" target="_blank">
          <repo-item title="Android SDK" detail="Android SDK代码库（使用Java）" style="margin-top: 10px">
            <i class="material-icons" style="background-color: #67C23A;">android</i>
          </repo-item>
        </a>
        <div style="clear: both"></div>
      </div>
      <p class="subsection-title" id="ios-sdk">iOS</p>
      <div>
        <p style="margin-top: 30px">推荐通过CocoaPods集成。</p>
        <p>在项目的Podfile添加：</p>
        <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git'</pre>
        <p>集成SDK。</p>
        <p>或 <a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a>
          源码文件：AuthViewController.swift和OnlyID_SDK.swift，添加到项目。</p>
        <a href="https://gitee.com/lltb/onlyid-sdk-ios" target="_blank">
          <repo-item title="iOS SDK" detail="iOS SDK代码库（使用Swift）" style="margin-top: 10px">
            <i class="iconfont" style="background-color: #409EFF;">&#xe72c;</i>
          </repo-item>
        </a>
        <div style="clear: both"></div>
      </div>
    </div>
    <div class="section" id="demo">
      <div class="gradient-hr-title">
        <span><i class="iconfont title-icon">&#xe992;</i>示例Demo</span>
      </div>
      <p class="subsection-title">客户端</p>
      <div>
        <div class="downloads-row">
          <a href="https://gitee.com/lltb/onlyid-demo-frontend-vuejs" target="_blank">
            <repo-item title="Web" detail="Web前端示例（使用Vue.js）" style="margin-right: 32px">
              <i class="iconfont" style="background-color: #F56C6C;">&#xe743;</i>
            </repo-item>
          </a>
          <a href="https://gitee.com/lltb/onlyid-demo-android" target="_blank">
            <repo-item title="Android" detail="Android客户端示例（使用Java）" style="margin-right: 32px">
              <i class="material-icons" style="background-color: #67C23A;">android</i>
            </repo-item>
          </a>
          <a href="https://gitee.com/lltb/onlyid-demo-ios" target="_blank">
            <repo-item title="iOS" detail="iOS客户端示例（使用Swift）">
              <i class="iconfont" style="background-color: #409EFF;">&#xe72c;</i>
            </repo-item>
          </a>
          <div style="clear: both"></div>
        </div>
      </div>
      <p class="subsection-title">服务端</p>
      <p>因服务端示例较简单，其他语言开发者请统一参看Node.js示例。</p>
      <div>
        <div class="downloads-row">
          <a href="https://gitee.com/lltb/onlyid-demo-backend-nodejs" target="_blank">
            <repo-item title="Node.js" detail="Node.js后台示例（使用Express）">
              <i class="iconfont" style="background-color: #E6A23C;">&#xe989;</i>
            </repo-item>
          </a>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RepoItem from './RepoItem'

  export default {
    components: {RepoItem},
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner {
    background-color: #409EFF;
  }
  p {
    margin: 0.8em 0;
  }
  .downloads-row {
    margin-top: 30px;
  }
  .gradient-hr-title {
    font-size: 24px;
  }
  .subsection-title {
    margin-top: 40px;
    font-size: 21px;
  }
  .gradient-hr-title + .subsection-title {
    margin-top: 30px;
  }
  .title-icon {
    vertical-align: sub;
    font-size: 38px;
    margin-right: 10px;
  }
</style>
