<template>
  <div>
    <div id="banner-bg">
      <div id="banner1">
        <div style="padding-top: 100px;">
          <p style="font-size: 37px">开源账号解决方案</p>
          <p style="font-size: 18px">我们为网站和app提供通用的账号和认证平台</p>
          <div style="padding-top: 20px">
            <el-button type="primary"
                       plain
                       round
                       @click="$bus.$emit('login')">开始使用</el-button>
          </div>
        </div>
        <div style="height: 442px; width: 295px; position: relative;">
          <transition name="fade">
            <img :src="demoImg"
                 :key="demoImgIndex"
                 height="440px"
                 style="position: absolute; border: 1px solid #DCDFE6;" />
          </transition>
          <div id="div1">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section content"
         style="padding-left: 2em; margin-top: 60px;">
      <p>欢迎来到唯ID，我是项目发起人 ltb。前招行Java工程师，现为平安高级Web开发工程师。</p>
      <p>一直以来，人们习惯在每个用到的应用都注册一个账号，设置单独的密码。这导致了一些问题：</p>
      <ol>
        <li>账号密码众多，难以记忆和管理，如果都使用同个账号密码，一旦密码泄露，全部应用都要改一遍，非常麻烦。</li>
        <li>小众应用更难吸引用户注册，头部应用（微信等）占据更多流量，长尾效应消失，互联网逐渐远离开放、自由精神。</li>
      </ol>
      <p>我一直坚信：<b>账号和言论自由、互联网安全一样，是人们的基本权利</b>，所以我在<b>2017年6月12日</b>发起了唯ID项目。唯ID是通用的账号和认证平台，用户只需要在一个接入唯ID的应用注册，即可在所有应用使用。</p>
      <h3>唯ID的特点</h3>
      <ol>
        <li><b>开源、自由</b>，自豪地采用GPLv3协议，托管在
          <a href="https://github.com/lltb"
             target="_blank">github</a> ，所有人可参与贡献，不受大公司控制。</li>
        <li>稳定、可靠，唯ID作为账号系统，对接入的应用非常重要。所以在开发唯ID时，我们始终把安全、稳定、可靠放在首位。</li>
        <li>路线图公开，和其他三方登录不同，唯ID的开发路线图公开，所有人可参与讨论并影响唯ID的未来。</li>
        <li>尽量使用开源技术，同时不拒绝成熟的商业技术。前者如 Spring、Vue等；后者如阿里云 ECS、腾讯云短信等。</li>
      </ol>
      <h3>唯ID和自有登录对比</h3>
      <ol>
        <li><b>唯ID的开发初衷就是替代应用的自有登录</b>。</li>
        <li>用户只需要在一个接入唯ID的应用注册，即可在所有应用使用。</li>
        <li>唯ID会包括一些基础的公开信息，如手机号、邮箱、昵称、头像等。</li>
        <li>用户端有app，一站式管理用户信息、登录设备、授权应用等。</li>
        <li>开发者控制台有完善的应用管理、用户管理、数据统计等功能。</li>
        <li>集成的方案，不需要开发者关注实现细节，<b>也不用承担高额验证短信费用</b>。</li>
      </ol>
      <p class="note">* 上面提到的一些功能可能仍在开发中。</p>
      <h3>和三方登录（微信、微博）的对比</h3>
      <ol>
        <li>和微信、微博只能作为辅助登录方式不同，<b>你可以放心的把唯ID作为你的应用唯一的登录方式（所以叫唯ID ^_^）</b>。</li>
        <li>我们会一直维护下去，不会出现依赖的三方登录（如人人网账号）没落的问题。</li>
        <li>唯ID返回用户真实登录账号，而不只是平台绑定的open id，更加开放，可自由接入或迁出。</li>
        <li>唯ID是中立的平台，和你的应用没有竞争关系，不会出现
          <a href="http://finance.eastmoney.com/a/201901281035452049.html"
             target="_blank">抖音不能用微信登录</a> 的破事。</li>
      </ol>
      <h3>捐赠</h3>
      <p>开发和维护唯ID几乎占用了我全部的业余时间，如果你觉得有帮助，就请我吃顿快餐吧~</p>
      <div class="donate">
        <img src="@/assets/alipay.jpg"
             width="250" />
        <img src="@/assets/wechat-pay.jpg"
             width="250"
             style="margin-left: 100px" />
      </div>
      <p style="text-align: right; font-size: 14px; margin-top: 2em;">2019年1月29日</p>
    </div>
    <div class="section-bg-dark">
      <div class="section"
           style="text-align: center; font-size: 18px;">
        <p>让我们一起努力 ❤️ 建立一个更加开放、自由、平等的互联网</p>
        <el-button type="primary"
                   style="margin-top: 10px"
                   @click="$bus.$emit('login')">开始使用</el-button>
      </div>
      <div class="gradient-hr"
           style="background: #7f7f7f;"></div>
    </div>
  </div>
</template>

<script>
import config from '../config'

function loopDemoImg() {
  this.timer = setInterval(() => {
    this.demoImgIndex++
    if (this.demoImgIndex > 4) {
      this.demoImgIndex = 1
    }
    console.log('demoImg= ' + this.demoImgIndex)
    this.demoImg = require('../assets/demo' + this.demoImgIndex + '.png')
  }, 4000)
}

export default {
  data() {
    return {
      demoImgIndex: 1,
      demoImg: require('../assets/demo1.png'),
      tabsActiveName: '1',
      config
    }
  },
  methods: {
    stopLoopTabs() {
      if (this.timer1) {
        clearInterval(this.timer1)
        this.timer1 = null
      }
    },
    startLoopTabs() {
      // 如果正在循环，就不用再设置
      if (this.timer1) {
        return
      }
      this.timer1 = setInterval(() => {
        console.log('tabsActiveName= ' + this.tabsActiveName)
        if (this.tabsActiveName === '3') {
          this.tabsActiveName = '1'
          return
        }
        this.tabsActiveName = String(Number(this.tabsActiveName) + 1)
      }, 8000)
    }
  },
  mounted() {
    loopDemoImg.call(this)
    this.startLoopTabs()

    const dots = document.getElementById('div1').children
    let index = 0
    dots[index].style.opacity = '1'
    this.timer2 = setInterval(() => {
      dots[index].style.opacity = '0.4'
      if (++index >= dots.length) index = 0
      dots[index].style.opacity = '1'
    }, 4000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#div1 {
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
}
.dot {
  background-color: rgba(127, 127, 127, 0.7);
  border-radius: 50%;
  width: 5px;
  height: 5px;
  float: left;
  opacity: 0.4;
}
.dot + .dot {
  margin-left: 5px;
}
@keyframes wave-animate {
  0% {
    transform: scale(0);
    opacity: 1;
    transform-origin: center;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
    transform-origin: center;
  }
}
#banner-bg {
  background-image: url('../assets/mask.png'), linear-gradient(to right, #2f518b 0%, #0be1f4 100%);
  background-size: cover;
  color: #fff;
  background-position: center center;
}
@media screen and (max-width: 1400px) {
  #banner-bg {
    background-size: 1400px;
  }
}
#banner1 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}
.tab-icon {
  vertical-align: middle;
  font-size: 22px;
  margin-right: 5px;
  color: #7f7f7f;
}
.el-tabs__item:hover .tab-icon {
  color: #409eff;
}
.el-tabs__item.is-active .tab-icon {
  color: #409eff;
}
#tabs >>> .el-tabs__item {
  font-size: 16px;
  line-height: 45px;
  height: 45px;
  font-weight: normal;
}
.scenario-tag {
  font-size: 14px;
  border: none;
  line-height: 32px;
}
.scenario-title {
  font-size: 20px;
  vertical-align: middle;
  margin-left: 20px;
}
.scenario-detail {
}
.scenario-img1 {
  border-radius: 5px;
  height: 420px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-left: 25px;
}
.scenario-img2 {
  border-radius: 5px;
  height: 370px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  margin-top: 20px;
}
.edition-title {
  font-size: 20px;
}
.edition-button {
  float: right;
  padding-top: 7px;
}
.edition-image-decoration {
  position: relative;
  width: 215px;
  margin: 0 auto;
}
.edition-image {
  display: block;
  width: 100%;
  position: relative;
}
.waves {
  position: absolute;
  background: #e5f4ff;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: wave-animate 4s infinite ease-out;
}
.wave1 {
  animation-delay: 1s;
}
.wave2 {
  animation-delay: 2s;
}
.edition-detail ul {
  padding: 0;
  margin: 0;
}
.edition-detail li {
  margin: 15px 0;
  list-style: none;
}
.edition-summary {
  font-size: 16px;
  margin-bottom: 0.1em;
}
.advantage {
  margin-top: 40px;
}
.advantage-title {
  margin: 0;
  font-size: 20px;
}
.advantage-image {
  font-size: 50px;
  margin-top: 10px;
}
.advantage-detail {
  margin-bottom: 0;
  margin-top: 0.8em;
}
#textsms {
  color: #67c23a;
}
#security {
  color: #f56c6c;
}
#developer_mode {
  color: #409eff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.content h3 {
  font-size: 18px;
  font-weight: normal;
  margin-top: 2em;
}
.content li + li {
  margin-top: 4px;
}
.donate {
  display: flex;
  justify-content: center;
  opacity: 0.9;
}
</style>
