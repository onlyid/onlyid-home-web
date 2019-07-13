<template>
  <div>
    <p id="banner">在线体验</p>
    <div class="section-bg-gradient">
      <div class="section" id="experience-public">
        <p class="section-title">注册体验</p>
        <p class="section-summary">体验桌面版</p>
        <el-card class="card">
          <p><img src="../assets/logo.png" width="66" style="vertical-align: -35%"/>官网（本站）采用开源账号桌面版，实现了注册、登录功能，马上注册成为开发者吧！</p>
          <p style="text-align: center; margin-top: 40px;">
            <el-button type="primary" round class="experience-button" @click="$bus.$emit('login')">开始使用</el-button>
          </p>
        </el-card>
      </div>
    </div>
    <div class="section-bg-gradient">
      <div class="section">
        <p class="section-title">在线体验</p>
        <p class="section-summary">体验移动版</p>
        <el-card class="card1" :body-style="{ padding: '0' }">
          <iframe src="https://demo.onlyid.net" width="320" height="480" class="demo-iframe" scrolling="no"></iframe>
          <div class="tooltip">
            <div class="tooltip__arrow"></div>
            <div>
              <p style="font-size: 16px"><img src="../assets/click.svg" style="vertical-align: sub; margin-right: 10px;"/>尝试点一下</p>
            </div>
          </div>
          <p style="position: absolute; left: 20px; bottom: 10px" class="note">体验程序 <a href="https://github.com/lltb/onlyid-demo-web" target="_blank">源码</a></p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import common from 'onlyid-web-common'
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
    top: 240px;
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
    top: 30%;
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
