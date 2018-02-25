<template>
  <div>
    <div>
      <p style="font-size: 24px; text-align: center;">
        <i class="iconfont docs-icon">&#xe996;</i>立刻部署唯ID手机号验证服务到您的app/网站
      </p>
      <div style="margin-top: 50px">
        <router-link to="/docs/overview">
          <div class="step">
            <p class="step-title"><i class="iconfont step-icon">&#xe77c;</i> 了解并注册账号、新建client</p>
            <ul class="step-detail">
              <li>了解唯ID手机号验证服务</li>
              <li>了解OAuth 2.0</li>
              <li>注册账号、新建client获得id和secret</li>
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
              <li>集成SDK（Android和iOS）</li>
              <li>配置验证id和secret</li>
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
    <div class="section" style="margin-top: 100px">
      <div class="gradient-hr-title">
        <p class="docs-title"><i class="iconfont docs-icon">&#xe987;</i> 新手入门</p>
        <div></div>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/overview">产品概述</router-link>
            <p>了解唯ID手机号验证服务，包括其功能、使用场景、工作原理等。</p>
            <p>一些基本名词的解释。</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/oauth2">OAuth 2.0入门</router-link>
            <p>OAuth 2.0是第三方访问用户私密资源的通用标准。</p>
            <p>如果您已了解OAuth 2.0，或使用过基于OAuth 2.0的系统（微信登录等），可跳过本节。</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/prepare">准备工作</router-link>
            <p>无论您准备接入的是app还是网站，都请先查阅本节。</p>
            <p>指导您注册唯ID开发者账号，新建client获得id和secret。</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="gradient-hr-title">
        <p class="docs-title"><i class="iconfont docs-icon">&#xe99f;</i> 快速接入</p>
        <div></div>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/web">Web</router-link>
            <p>使用RESTful API快速为您的网站接入唯ID</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/android">Android</router-link>
            <p>使用我们提供的SDK，快速为您的Android app接入唯ID</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/ios">iOS</router-link>
            <p>使用我们提供的SDK，快速为您的iOS app接入唯ID</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="gradient-hr-title">
        <p class="docs-title"><i class="iconfont docs-icon">&#xe9a1;</i> 最佳实践</p>
        <div></div>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/custom">自定义选项（基础）</router-link>
            <p>了解我们为使用公有云的开发者提供的自定义选项</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/security">安全性</router-link>
            <p>了解我们在安全性和易用性间的取舍</p>
            <p>以及如何通过服务端中转获取用户验证后的手机号</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <div class="gradient-hr-title">
        <p class="docs-title"><i class="iconfont docs-icon">&#xe9c0;</i> 其他</p>
        <div></div>
      </div>
      <div class="docs-detail">
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/faq">常见问题</router-link>
            <p>在您联系我们获取帮助前，请先查阅本节</p>
            <p>包括支持的平台、收费、广告、密码等您关心的问题</p>
          </el-col>
          <el-col :span="12">
            <router-link to="/docs/review">审核制度</router-link>
            <p>我们深知您希望尽快上线，因此我们实行“后审核”制度</p>
            <p>先上线，再审核，无感接入唯ID</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <router-link to="/docs/changelog">SDK更新记录</router-link>
            <p>所有重大的更新都会记录在此处</p>
            <p>唯ID 2.0正式上线，详情点击查看</p>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--<h2>准备工作</h2>-->
    <!--<p>登录<router-link to="/console">控制台</router-link>，新建client获取client id和client secret。</p>-->
    <!--<p>然后选择左侧菜单继续接入流程。</p>-->
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
<style scoped>
  .docs-title {
    font-size: 24px;
  }
  .docs-detail {
    margin-top: 30px;
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
    background-color: #eee;
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
</style>
