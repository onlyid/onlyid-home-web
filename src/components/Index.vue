<template>
  <div>
    <div id="banner-bg">
      <el-row id="banner" type="flex" justify="space-between">
        <el-col :span="14" style="padding-top: 100px;">
          <p style="font-size: 40px">简单、可信赖的手机号验证服务</p>
          <p style="font-size: 20px">用唯ID实现短信验证码登录，从此告别短信服务商</p>
          <div style="padding-top: 20px">
            <router-link to="/experience"><el-button round>在线体验</el-button></router-link>
            <router-link to="/console" style="margin-left: 50px"><el-button type="primary" round>开始使用</el-button></router-link>
          </div>
        </el-col>
        <el-col :span="7">
          <div style="height: 452px;">
            <transition name="fade">
              <img :src="demoImg" :key="demoImgIndex" width="300px" style="position: absolute; border: 1px solid #DCDFE6;"/>
            </transition>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="content">
      <div class="section">
        <p style="text-align: center; " class="note">唯ID已于2018年1月正式商业化，详情请查阅
          <router-link to="/pricing"><el-button type="text">价格</el-button></router-link>
        </p>
        <p class="intro">我们为app和网站提供简单、可信赖的手机号验证服务。开发者无需关心发送短信、比对验证码等细节，轻松获取用户手机号。可广泛应用于短信验证码登录、三方登录绑定手机号等场景。</p>
      </div>
      <div class="gradient-hr"></div>
      <div class="section">
        <p class="section-title">三大业务场景</p>
        <p class="section-summary">精准匹配您的验证诉求</p>
        <div style="text-align: center; margin-top: 30px;">
          <el-tabs id="tabs" v-model="tabsActiveName" style="display: inline-block;"
                   @mouseover.native="stopLoopTabs" @mouseout.native="startLoopTabs">
            <el-tab-pane name="1">
              <span slot="label"><i class="material-icons tab-icon">textsms</i> 短信验证码登录</span>
            </el-tab-pane>
            <el-tab-pane name="2">
              <span slot="label"><i class="iconfont tab-icon">&#xe7e5;</i> 三方登录绑定手机号</span>
            </el-tab-pane>
            <el-tab-pane name="3">
              <span slot="label"><i class="material-icons tab-icon">phone_iphone</i> 更换手机号</span>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div style="margin-top: 20px">
          <el-row v-if="tabsActiveName === '1'">
            <el-col :span="10">
              <p><el-tag class="scene-tag" type="success">场景 1</el-tag><span class="scene-title">短信验证码登录</span></p>
              <div class="scene-detail">
                <p>满足用户使用手机号登录需求。</p>
                <p>开发者无需开通短信服务，不用发送短信验证码，直接通过SDK调起唯ID，几行代码完成手机号验证，有效降低成本，提升开发效率。</p>
                <p>唯ID提供丰富的自定义选项，两种主题界面，两种显示大小，两种不同安全级别验证方式，方便您按需选择。</p>
              </div>
              <router-link to="/experience"><el-button class="scene-button" type="primary">在线体验</el-button></router-link>
              <router-link to="/docs"><el-button class="scene-button">查看文档</el-button></router-link>
            </el-col>
            <el-col :span="8">
              <img src="../assets/scene1-1.png" class="scene-img1"/>
            </el-col>
            <el-col :span="6">
              <img src="../assets/scene1-2.png" class="scene-img2"/>
            </el-col>
          </el-row>
          <el-row v-if="tabsActiveName === '2'" justify="space-between" type="flex">
            <el-col :span="10">
              <p><el-tag class="scene-tag" type="success">场景 2</el-tag><span class="scene-title">三方登录绑定手机号</span></p>
              <div class="scene-detail">
                <p>依《网络安全法》相关要求，6月1日起会员账户需绑定手机。</p>
                <p>开发者无需开通短信服务，在用户通过微信、微博登录后，通过SDK调起唯ID，几行代码完成手机号验证，轻松完成绑定。</p>
                <p>唯ID提供丰富的自定义选项，两种主题界面，两种显示大小，两种不同安全级别验证方式，方便您按需选择。</p>
              </div>
              <router-link to="/experience"><el-button class="scene-button" type="primary">在线体验</el-button></router-link>
              <router-link to="/docs"><el-button class="scene-button">查看文档</el-button></router-link>
            </el-col>
            <el-col :span="8">
              <img src="../assets/scene2-1.png" class="scene-img1"/>
            </el-col>
            <el-col :span="6">
              <img src="../assets/scene1-2.png" class="scene-img2"/>
            </el-col>
          </el-row>
          <el-row v-if="tabsActiveName === '3'" justify="space-between" type="flex">
            <el-col :span="10">
              <p><el-tag class="scene-tag" type="success">场景 3</el-tag><span class="scene-title">更换手机号</span></p>
              <div class="scene-detail">
                <p>app/网站为账号提供更换手机号功能，可方便用户新换号码后不用重新注册。</p>
                <p>开发者无需开通短信服务，通过SDK调起唯ID，几行代码完成新手机号验证，轻松完成更换。</p>
                <p>唯ID提供丰富的自定义选项，两种主题界面，两种显示大小，两种不同安全级别验证方式，方便您按需选择。</p>
              </div>
              <router-link to="/experience"><el-button class="scene-button" type="primary">在线体验</el-button></router-link>
              <router-link to="/docs"><el-button class="scene-button">查看文档</el-button></router-link>
            </el-col>
            <el-col :span="8">
              <img src="../assets/scene3-1.png" class="scene-img1"/>
            </el-col>
            <el-col :span="6">
              <img src="../assets/scene1-2.png" class="scene-img2"/>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="gradient-hr"></div>
      <div class="section">
        <p class="section-title">两大部署方式</p>
        <p class="section-summary">随你所需，量身定做</p>
        <el-row style="margin-top: 40px">
          <el-col :span="11">
            <el-card>
              <div slot="header">
                <span class="edition-title">公有云</span>
                <router-link to="/pricing#pricing-features"><el-button class="edition-button" type="text">价格与功能</el-button></router-link>
              </div>
              <div class="edition-image-decoration">
                <div class="waves"></div>
                <div class="waves wave1"></div>
                <div class="waves wave2"></div>
                <img src="../assets/edition-standard.png" class="edition-image"/>
              </div>
              <div class="edition-detail">
                <ul>
                  <li>共享唯ID的公共基础设施和计算资源</li>
                  <li>用户可设置一个密码，在所有接入唯ID的app/网站使用</li>
                  <li>使用成本低，除账号年费外，不收取其他任何费用</li>
                  <li>注册后自助开通，快速完成接入，省心省力</li>
                </ul>
              </div>
              <div class="gradient-hr"></div>
              <p class="edition-summary">公有云部署方式是大多数开发者快速实现<span style="font-weight: bold">短信验证码登录</span>的第一选择</p>
            </el-card>
          </el-col>
          <el-col :span="11" :offset="2">
            <el-card>
              <div slot="header">
                <span class="edition-title">专有云（大客户方案）</span>
                <router-link to="/pricing#pricing-features"><el-button class="edition-button" type="text">价格与功能</el-button></router-link>
              </div>
              <div class="edition-image-decoration">
                <div class="waves"></div>
                <div class="waves wave1"></div>
                <div class="waves wave2"></div>
                <img src="../assets/edition-enterprise.png" class="edition-image"/>
              </div>
              <div class="edition-detail">
                <ul>
                  <li>服务资源隔离，我们会为您启用专有的计算节点和数据库</li>
                  <li>用户设置的密码仅用于您的app/网站</li>
                  <li>高度可定制，包括短信签名、短信模板、授权域名等</li>
                  <li>联系客户经理开通，我们会第一时间为您服务</li>
                </ul>
              </div>
              <div class="gradient-hr"></div>
              <p class="edition-summary">专有云部署方式是专为中大型企业打造的 <span style="font-weight: bold">IDaaS (Identity as a Service) 解决方案</span></p>
            </el-card>
          </el-col>
        </el-row>
        <div style="text-align: center; margin-top: 50px;">
          <p>
            <el-tag style="font-size: 14px" type="success">服务承诺</el-tag>
            <span style="font-size: 20px; margin-left: 10px; vertical-align: middle">您是我们宝贵的客户</span>
          </p>
          <p style="font-size: 16px; color: #606266;">无论您选择公有云还是专有云部署方式，在客户支持和服务方面我们将一视同仁，为您提供无差别的高标准服务</p>
        </div>
      </div>
      <div class="gradient-hr"></div>
      <div class="section">
        <p class="section-title">特点与优势</p>
        <p class="section-summary">简单、可信赖</p>
        <el-row class="advantage">
          <el-col :span="4" :offset="2">
            <i class="material-icons advantage-image" id="developer_mode">developer_mode</i>
          </el-col>
          <el-col :span="14">
            <p class="advantage-title">极简API，半小时闪电接入</p>
            <p class="advantage-detail">不影响业务流程，不改变用户习惯</p>
            <p class="advantage-detail">SDK覆盖Web、Android、iOS全平台</p>
          </el-col>
          <el-col :span="4">
            <router-link to="/docs/overview"><el-button type="primary" plain round>新手入门</el-button></router-link>
          </el-col>
        </el-row>
        <el-row class="advantage">
          <el-col :span="4" :offset="2">
            <i class="material-icons advantage-image" id="security">security</i>
          </el-col>
          <el-col :span="14">
            <p class="advantage-title">银行级团队为安全保驾护航</p>
            <p class="advantage-detail">标准OAuth实现，全程HTTPS加密，密码安全存储</p>
            <p class="advantage-detail">团队成员来自国内某知名银行，为唯ID带来银行级的安全和稳定</p>
          </el-col>
          <el-col :span="4">
            <router-link to="/docs/security"><el-button type="danger" plain round>安全实践</el-button></router-link>
          </el-col>
        </el-row>
        <el-row class="advantage">
          <el-col :span="4" :offset="2">
            <i class="material-icons advantage-image" id="textsms">textsms</i>
          </el-col>
          <el-col :span="14">
            <p class="advantage-title">不限量验证短信任性发 *</p>
            <p class="advantage-detail">极简价格方案，除账号年费外，不收取其他任何费用</p>
            <p class="advantage-detail">您可以享受无限量的短信验证码服务</p>
          </el-col>
          <el-col :span="4">
            <router-link to="/pricing"><el-button type="success" plain round>价格</el-button></router-link>
          </el-col>
        </el-row>
        <p class="note">* 仅适用公有云部署方式，专有云部署方式价格请联系客户经理</p>
      </div>
      <div class="section-bg-dark">
        <div class="section" id="mission">
          <p>“我们的使命是建立中国统一的账号和认证体系，为互联网带来秩序。” <span style="margin-left: 100px"> —— 唯ID团队</span></p>
          <router-link to="/console"><el-button type="primary" style="margin-top: 10px">开始使用</el-button></router-link>
        </div>
        <div class="gradient-hr" style="background: #7f7f7f;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  function loopDemoImg () {
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
    data () {
      return {
        demoImgIndex: 1,
        demoImg: require('../assets/demo1.png'),
        tabsActiveName: '1'
      }
    },
    methods: {
      stopLoopTabs () {
        if (this.timer1) {
          clearInterval(this.timer1)
          this.timer1 = null
        }
      },
      startLoopTabs () {
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
    mounted () {
      loopDemoImg.call(this)
      this.startLoopTabs()
    },
    beforeDestroy () {
      clearInterval(this.timer)
      clearInterval(this.timer1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes wave-animate {
    0% {
      transform: scale(0);
      opacity: 1;
      transform-origin: center
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
      transform-origin: center
    }
  }

  #banner-bg {
    background-image: url("../assets/mask.png"), linear-gradient( to right, #2f518b 0%, #0be1f4 100% );
    background-size: cover;
    color: #fff;
  }
  #banner {
    width: 980px;
    margin: 0 auto;
  }
  #content {
    font-size: 16px;
  }
  .intro {
    font-size: 20px;
    text-indent: 2em;
    margin-top: 30px;
  }
  .tab-icon {
    vertical-align: middle;
    font-size: 24px;
    margin-right: 5px;
    color: #7f7f7f;
  }
  .el-tabs__item:hover .tab-icon {
    color: #409EFF;
  }
  .el-tabs__item.is-active .tab-icon {
    color: #409EFF;
  }
  .scene-tag {
    font-size: 14px;
  }
  .scene-title {
    font-size: 20px;
    vertical-align: middle;
    margin-left: 20px;
  }
  .scene-detail {
    height: 240px;
  }
  .scene-button {
    margin-right: 20px;
  }
  .scene-img1 {
    border-radius: 5px;
    height: 420px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-left: 25px;
  }
  .scene-img2 {
    border-radius: 5px;
    height: 370px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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
  .edition-detail {
    min-height: 150px;
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
    font-size: 18px;
    margin-bottom: 0;
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
  }
  #textsms {
    color: #67C23A;
  }
  #security {
    color: #F56C6C;
  }
  #developer_mode {
    color: #409EFF;
  }
  #mission {
    text-align: center;
    font-size: 18px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.0s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  #tabs >>> .el-tabs__item {
    font-size: 18px;
    line-height: 50px;
    height: 50px;
    font-weight: normal;
  }
</style>
