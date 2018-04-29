<template>
  <div>
    <p id="banner1">体验下一代手机号验证服务</p>
    <div class="menu">
        <p style="margin: 0px;"><span @click="common.goAnchor('#experience-public')">公有云</span><span style="margin-left: 50px;" @click="common.goAnchor('#experience-private')">专有云（大客户方案）</span></p>
    </div>
    <div class="section-bg-gradient">
      <div class="section" id="experience-public">
        <p class="section-title">注册体验</p>
        <p class="section-summary">注册同时体验，何乐不为？</p>
        <div style="margin-top: 40px; font-size: 18px;">
          <el-card class="card">
            <p><img src="../assets/logo.png" width="66" style="vertical-align: text-bottom"/>开发者官网（本站）采用公有云版手机号验证服务，实现了手机号登录、账号更换手机号场景。</p>
            <p>立即注册开发者账号，完整体验下一代手机号验证服务。</p>
            <p style="text-align: center; margin-top: 50px;">
              <router-link to="/console"><el-button type="primary" round class="experience-button">开始使用</el-button></router-link>
            </p>
          </el-card>
        </div>
      </div>
    </div>
    <div class="section-bg-gradient">
      <div class="section">
        <p class="section-title">在线体验</p>
        <p class="section-summary">体验公有云版手机号验证服务</p>
        <div style="margin-top: 40px;">
          <el-card class="card1" :body-style="{ padding: '0px' }">
            <iframe src="https://demo.onlyid.net" width="320" height="480" class="demo-iframe" scrolling="no"></iframe>
            <div class="tooltip">
              <div class="tooltip__arrow"></div>
              <div>
                <p><img src="../assets/click.svg" style="vertical-align: sub; margin-right: 10px;"/>尝试点一下</p>
                <div style="border-top: 1px solid #EFEFEF;">
                  <p style="margin-bottom: 5px;font-size: 15px; color: #7f7f7f;">专有云（大客户方案）可深度定制界面。</p>
                  <el-button type="text" style="font-size: 16px" @click="common.goAnchor('#experience-private')">体验专有云</el-button>
                </div>
              </div>
            </div>
            <div style="padding: 20px 40px;">
              <!--<p>正文内容</p>-->
            </div>
            <p style="position: absolute; left: 20px; bottom: 10px" class="note">* 体验程序（Web客户端、Node.js服务端）源码可在 <router-link to="/downloads#demo">下载中心</router-link> 在线查阅、下载运行。</p>
          </el-card>
        </div>
      </div>
    </div>
    <div class="section-bg-gradient">
      <div class="section" id="experience-private">
        <p class="section-title">体验专有云</p>
        <p class="section-summary">体验企业级IDaaS解决方案</p>
        <div style="margin-top: 40px; font-size: 18px">
          <el-card class="card">
            <p>专有云（大客户方案）提供了丰富的自定义选项，以及针对具体客户的源码级定制，请联系商务获取示例Demo。</p>
            <p style="text-align: center; margin-top: 50px;">
              <router-link to="/pricing#business-service"><el-button type="primary" round class="experience-button">联系客户经理</el-button></router-link>
            </p>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import common from 'onlyid-frontend-common'

  export default {
    data () {
      return {
        common
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu {
    border-bottom: solid 1px #EBEEF5;
    text-align: center;
    font-size: 16px;
    color: #7f7f7f;
  }
  .menu span {
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
  }
  .menu span:hover {
    border-bottom: 2px solid #409EFF;
    color: #303133;
  }
  .experience-button:hover {
    animation: none;
  }
  .experience-button {
    font-size: 16px;
    animation: breath-animate 3s infinite ease;
  }
  @keyframes breath-animate {
    0% {
      transform: scale(0.96);
      transform-origin: center
    }
    50% {
      transform: scale(1.04);
      transform-origin: center
    }
    100% {
      transform: scale(0.96);
      transform-origin: center;
    }
  }
  #banner1 {
    background-image: url("../assets/mask.png"), linear-gradient(223.56deg,#6CECA2 0,#005EFF 100%);
  }
  .section {
    font-size: 16px;
  }
  .card {
    padding: 0 20px;
    background-image: url("../assets/mask.png"), linear-gradient( to right, #fff 0%, #fff 40%, #0be1f4 100% );
    background-size: 200%;
  }
  .card1 {
    background-image: url("../assets/mask.png"), linear-gradient( to right, #0be1f4 0%, #fff 60% );
    background-size: 200%;
    background-position: right center;
    position: relative;
  }
  .demo-iframe {
    border: 0;
    display: block;
    float: right;
    background: white;
    border-left: solid 1px #EBEEF5;
  }
  .tooltip {
    position: absolute;
    top: 180px;
    right: 340px;
    width: 200px;
    border-radius: 3px;
    padding: 10px 20px;
    background: #fff;
    box-shadow: 0 3px 5px 0 rgba(24,44,79,.05), 0 5px 15px 0 rgba(24,44,79,.1);
  }
  .tooltip__arrow {
    width: 28px;
    height: 38px;
    position: absolute;
    top: 55%;
    left: 100%;
    overflow: hidden;
  }
  .tooltip__arrow::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background: #fff;
    transform: translateX(-50%) rotate(-45deg);
    top: 25%;
    box-shadow: 0 3px 5px 0 rgba(24,44,79,.05), 0 5px 15px 0 rgba(24,44,79,.1);
    border-bottom-right-radius: 2px;
  }
</style>
