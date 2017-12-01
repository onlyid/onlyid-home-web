<template>
  <div>
    <el-popover
      ref="popover1"
      placement="top"
      width="500"
      trigger="click">
      <div style="padding: 20px">
        <p>如果您认同我们的使命；</p>
        <p>如果您熟悉Java、Swift、JavaScript中的一门编程语言；</p>
        <p>如果您享受从原始的地方出发，天马行空，脚踏实地。</p>
        <div class="gradient-hr"></div>
        <p>请附上简历来信：join@onlyid.net</p>
      </div>
    </el-popover>

    <div id="banner-bg">
      <el-row id="banner" type="flex" justify="space-between">
        <el-col :span="12" id="intro">
          <p>专业、极简</p>
          <p>手机账号解决方案</p>
          <el-button type="primary" @click="use">接 入</el-button>
        </el-col>
        <el-col :span="7">
          <img src="../assets/temp.png" width="250px" style="vertical-align: middle;"/>
        </el-col>
      </el-row>
    </div>
    <div id="content-bg">
      <div id="content">
        <p id="intro1">唯一ID是全球首家账号服务商，为初创和小型app/网站提供专业的手机账号解决方案。</p>
        <div>
          <el-row class="intro2">
            <el-col :span="2" :offset="4">
              <i class="material-icons intro2-image" id="textsms">textsms</i>
            </el-col>
            <el-col :span="14" :offset="3">
              <p class="intro2-title">不限量注册短信免费发</p>
              <p class="intro2-detail">所有服务免费，包括不限量的短信验证码服务。</p>
            </el-col>
          </el-row>
          <el-row class="intro2">
            <el-col :span="14" :offset="4">
              <p class="intro2-title">银行级团队为安全保驾护航</p>
              <p class="intro2-detail">标准OAuth实现，全程HTTPS加密，密码安全存储。</p>
              <p class="intro2-detail">团队成员来自国内某知名银行，为唯一ID带来银行级的安全和稳定。</p>
            </el-col>
            <el-col :span="2">
              <i class="material-icons intro2-image" id="security">security</i>
            </el-col>
          </el-row>
          <el-row class="intro2">
            <el-col :span="2" :offset="4">
              <i class="material-icons intro2-image" id="contact_phone">contact_phone</i>
            </el-col>
            <el-col :span="14" :offset="3">
              <p class="intro2-title">返回真实登录手机号</p>
              <p class="intro2-detail">不同于现有三方登录，唯一ID返回真实登录账号。</p>
            </el-col>
          </el-row>
          <el-row class="intro2">
            <el-col :span="14" :offset="4">
              <p class="intro2-title">极简API，半小时闪电接入</p>
              <p class="intro2-detail">SDK覆盖Web、Android、iOS全平台。</p>
            </el-col>
            <el-col :span="2">
              <i class="material-icons intro2-image" id="developer_mode">developer_mode</i>
            </el-col>
          </el-row>
        </div>
        <div class="gradient-hr"/>
        <el-row type="flex" justify="space-around" id="contact">
          <el-col :span="7">
            <p class="contact-title">业务咨询：18588237889</p>
            <img src="../assets/wechat-185.jpeg" width="150px">
          </el-col>
          <el-col :span="7">
            <p class="contact-title">技术支持：15521312099</p>
            <img src="../assets/wechat-155.jpeg" width="150px">
          </el-col>
          <el-col :span="7">
            <p class="contact-title">开发者QQ群：23831587</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div id="mission-bg">
      <div id="mission">
        <p>“我们的使命是建立全球统一的账号和认证体系，为世界带来秩序。” &nbsp; &nbsp; &nbsp; —— 唯一ID创始人梁庭宾</p>
        <el-button type="info" v-popover:popover1>加入我们</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {
      ElButton,
      ElCol,
      ElRow},
    data () {
      return {
      }
    },
    methods: {
      use () {
        this.$router.push('/console')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner-bg {
    background-color: #7f7f7f;
    color: #fff;
  }
  #banner {
    width: 980px;
    margin: 0 auto;
  }
  #intro > p {
    margin: 20px auto;
    font-size: 60px;
  }
  #intro > .el-button {
    margin-top: 20px;
    font-size: 22px;
  }
  #intro {
    padding-top: 50px;
  }
  #content-bg {
  }
  #content {
    width: 980px;
    margin: 0 auto;
  }
  #intro1 {
    text-indent: 60px;
    padding: 20px 10px 0px 10px;
    font-size: 30px;
  }
  .intro2 {
    margin: 90px auto;
  }
  .intro2-title {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 30px;
  }
  .intro2-image {
    font-size: 80px;
    margin-top: 10px;
  }
  .intro2-detail {
    text-align: left;
    margin-bottom: 5px;
    font-size: 17px;
  }
  #textsms {
    color: #13ce66;
  }
  #security {
    color: #fa5555;
  }
  #contact_phone {
    color: deepskyblue;
  }
  #developer_mode {
    color: #947cb0;
  }
  #contact {
    margin: 60px 0;
    text-align: center;
  }
  .contact-title {
    margin-top: 0px;
    font-size: 22px;
  }
  #mission-bg {
    background-color: #7f7f7f;
    padding: 1px;
  }
  #mission {
    color: #fff;
    text-align: center;
    margin: 60px 0px;
    font-size: 22px;
  }

</style>
