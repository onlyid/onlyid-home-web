<template>
  <div>
    <div>
      <p style="font-size: 24px; text-align: center; margin-top: 0"><i class="iconfont docs-icon">&#xe996;</i>立刻部署手机帐号</p>
      <div style="margin-top: 30px">
        <router-link to="/docs/overview">
          <div class="step">
            <p class="step-title"><i class="iconfont step-icon">&#xe77c;</i> 了解手机账号、新建client</p>
            <ul class="step-detail">
              <li>了解唯ID的手机帐号</li>
              <li>了解OAuth 2.0</li>
              <li>新建client获得id和secret</li>
            </ul>
          </div>
        </router-link>
        <div class="step-arrow">
          <i class="el-icon-arrow-right"></i>
        </div>
        <router-link to="/docs/web">
          <div class="step">
            <p class="step-title"><i class="iconfont step-icon">&#xe78f;</i> 根据不同平台部署</p>
            <ul class="step-detail">
              <li>集成SDK（仅app）</li>
              <li>配置client id和secret</li>
              <li>发起验证请求，获得用户手机号</li>
            </ul>
          </div>
        </router-link>
        <div class="step-arrow">
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="step-complete">
          <i class="el-icon-success"></i>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
    <div class="section" style="margin-top: 60px">
      <div class="gradient-hr-title">
        <span><i class="iconfont docs-icon">&#xe987;</i>新手入门</span>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/overview">概述</router-link>
            <p>了解唯ID的手机帐号，包括验证流程和名词解释等</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/oauth2">OAuth 2.0入门</router-link>
            <p>唯ID的手机账号基于OAuth 2.0构建</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="gradient-hr-title">
        <span><i class="iconfont docs-icon">&#xe99f;</i>快速接入</span>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/web">Web</router-link>
            <p>使用RESTful API为你的网站接入唯ID</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/android">Android</router-link>
            <p>使用Android SDK为你的app接入唯ID</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/ios">iOS</router-link>
            <p>使用iOS SDK为你的app接入唯ID</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="gradient-hr-title">
        <span><i class="iconfont docs-icon">&#xe9a1;</i>最佳实践</span>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/custom">自定义选项（基础）</router-link>
            <p>了解我们为公有云的开发者提供的自定义选项</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/security">安全性</router-link>
            <p>了解唯ID采用的安全措施，以及你可进一步采取的安全措施</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="gradient-hr-title">
        <span><i class="iconfont docs-icon">&#xe9c0;</i>其他</span>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/faq">常见问题</router-link>
            <p>包括支持的平台、短信收费、广告和密码等问题</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/review">审核</router-link>
            <p>我们深知你希望尽快上线，因此我们采用后审核方式</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../assets/docs.css"></style>
<style scoped>
  .gradient-hr-title {
    font-size: 24px;
  }
  .docs-detail {
    margin-top: 25px;
  }
  .docs-detail a {
    font-size: 18px;
    text-decoration: none;
  }
  .docs-detail p {
    color: #7f7f7f;
  }
  .docs-detail .el-row {
    margin-top: 15px;
  }
  .docs-icon {
    font-size: 38px;
    vertical-align: sub;
    margin-right: 10px;
  }
  .step {
    width: 270px;
    padding: 30px;
    background-color: #f7f8f9;
    float: left;
  }
  .step:hover {
    background-color: #EBEEF5;
  }
  .step-title {
    font-size: 18px;
    margin: 0;
  }
  .step-icon {
    font-size: 20px;
    vertical-align: middle;
  }
  .step-detail {
    margin: 20px 0 0 0;
    padding-left: 22px;
  }
  .step-detail li {
    margin-top: 10px;
    color: #7f7f7f;
    list-style-type: square;
  }
  .step-arrow {
    margin: 80px 20px 0 20px;
    font-size: 30px;
    color: #999;
    float: left;
  }
  .step-complete {
    color: #999;
    font-size: 50px;
    float: left;
    margin-top: 70px;
  }
  .section {
    margin-bottom: 0;
  }
</style>
