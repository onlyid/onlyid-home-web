<template>
  <div>
    <p id="banner">体验下一代手机帐号</p>
    <div class="menu">
        <span @click="common.goAnchor('#experience-public')">公有云</span>
        <span style="margin-left: 50px;" @click="common.goAnchor('#experience-enterprise')">专有云</span>
    </div>
    <div class="section-bg-gradient">
      <div class="section" id="experience-public">
        <p class="section-title">注册体验</p>
        <p class="section-summary">体验公有云桌面版</p>
        <el-card class="card">
          <p><img src="../assets/logo.png" width="66" style="vertical-align: -35%"/>官网（本站）采用公有云桌面版手机帐号，实现了手机号登录和更换手机号功能。</p>
          <p>立即注册，完整体验下一代手机帐号。</p>
          <p style="text-align: center; margin-top: 40px;">
            <el-button type="primary" round class="experience-button" @click="$bus.$emit('login')">开始使用</el-button>
          </p>
        </el-card>
      </div>
    </div>
    <div class="section-bg-gradient">
      <div class="section">
        <p class="section-title">在线体验</p>
        <p class="section-summary">体验公有云移动版</p>
        <el-card class="card1" :body-style="{ padding: '0' }">
          <iframe src="https://demo.onlyid.net" width="320" height="480" class="demo-iframe" scrolling="no"></iframe>
          <div class="tooltip">
            <div class="tooltip__arrow"></div>
            <div>
              <p style="font-size: 16px"><img src="../assets/click.svg" style="vertical-align: sub; margin-right: 10px;"/>尝试点一下</p>
              <p style="margin-bottom: 5px; color: #7f7f7f; border-top: 1px solid #EFEFEF; padding-top: 1em">专有云可深度定制界面</p>
              <el-button type="text" style="font-size: 15px" @click="common.goAnchor('#experience-enterprise')">体验专有云</el-button>
            </div>
          </div>
          <p style="position: absolute; left: 20px; bottom: 10px" class="note">体验程序（Web前端）源码可在 <router-link to="/downloads#demo">下载中心</router-link> 在线查阅、下载运行</p>
        </el-card>
      </div>
    </div>
    <div class="section-bg-gradient">
      <div class="section" id="experience-enterprise">
        <p class="section-title">体验专有云</p>
        <p class="section-summary">体验企业IDaaS解决方案</p>
        <el-card class="card">
          <p>专有云提供了丰富的自定义选项，以及针对具体客户的源码级定制，请联系客户经理获取示例Demo。</p>
          <p style="text-align: center; margin-top: 40px;">
            <router-link to="/pricing#business-service"><el-button type="primary" round class="experience-button">联系客户经理</el-button></router-link>
          </p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import common from 'onlyid-frontend-common'
  import config from '../config'

  export default {
    data () {
      return {
        common,
        config
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
    height: 55px;
    line-height: 55px;
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
  #banner {
    background-image: url("../assets/mask.png"), linear-gradient(223.56deg,#6CECA2 0,#005EFF 100%);
  }
  .card {
    padding: 0 20px;
    background-image: url("../assets/mask.png"), linear-gradient( to right, #fff 0%, #fff 40%, #0be1f4 100% );
    background-size: 200%;
    margin-top: 40px;
    font-size: 18px;
  }
  .card p {
    margin: 0.8em 0;
  }
  .card1 {
    background-image: url("../assets/mask.png"), linear-gradient( to right, #0be1f4 0%, #fff 60% );
    background-size: 200%;
    background-position: right center;
    position: relative;
    margin-top: 40px;
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
