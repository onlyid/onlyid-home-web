<template>
  <div>
    <div class="banner-bg">
    </div>
    <div id="banner1">
      <p style="text-align: center; font-size: 24px">“我们的使命是建立中国统一的账号和认证体系，为互联网带来秩序。”</p>
      <p style="float: right; font-size: 18px;">—— 唯ID团队</p>
    </div>
    <div class="section" style="margin-top: 70px">
      <p class="section-title">关于唯ID</p>
      <p class="section-summary">创新 · 账号 · 认证</p>
      <div style="margin-top: 40px;">
        <p style="text-indent: 2em;">唯ID隶属深圳市友全科技有限公司，是国内领先的IDaaS提供商，主要产品为企业IDaaS解决方案、手机账号服务。我们打造了可扩展、易集成的平台以解决复杂的账号和认证问题，也率先利用OAuth协议解决手机号登录成本高问题。引领着账号和认证领域的革命与创新，深受广大开发者和企业客户的信赖。</p>
        <el-row style="margin-top: 40px">
          <el-col :span="5" style="margin-top: 60px; text-align: center">
            <img src="../../assets/jiangli.png" width="80"/>
            <p style="font-size: 16px">专业的团队</p>
          </el-col>
          <el-col :span="17">
            <el-card style="padding: 10px">
              <p style="font-size: 20px; margin: 0px">由高学历、高素质人才组成的专家团队</p>
              <p>团队成员：</p>
              <ul class="ul1">
                <li>多毕业于国内知名985高校</li>
                <li>多来自国内优秀的科技企业</li>
                <li>平均年龄不到30岁，年轻有活力</li>
              </ul>
              <p style="margin: 0">作为较早从事IDaaS行业的团队，我们积累了丰富的行业经验，为客户带来极高
                <router-link :to="$route.fullPath" @click.native="common.goAnchor('#economic-impact')">经济收益</router-link>。</p>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 40px">
          <el-col :span="5" style="margin-top: 60px; text-align: center">
            <img src="../../assets/linggan.png" width="80"/>
            <p style="font-size: 16px">品牌和文化</p>
          </el-col>
          <el-col :span="17">
            <el-card style="padding: 10px">
              <p style="font-size: 20px; margin: 0px">The OnlyID for you</p>
              <p>浪漫的词 only，寓意我们：</p>
              <ul class="ul1">
                <li>专注IDaaS行业并提供相关服务</li>
                <li>期盼未来使用一个账号畅游互联网</li>
                <li>相信科技有温度，唯ID可以相伴一生</li>
              </ul>
              <p style="margin: 0">公司文化 —— 从原始的地方出发，天马行空，脚踏实地。</p>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 40px; margin-left: 100px" id="economic-impact">
          <el-col :span="11">
            <p style="color: #7f7f7f; font-size: 18px">使用唯ID前</p>
            <ul class="pros ul2">
              <li>用户的账号和认证体验不一致。</li>
              <li>无法简单实现两步验证、社交账号集成。</li>
              <li>网站和app不够安全。</li>
              <li>用户转化率低。</li>
              <li>开发、管理、安全、审计成本高。</li>
              <li>产品推向市场时间慢。</li>
            </ul>
          </el-col>
          <el-col :span="11" :offset="2">
            <p style="color: #7f7f7f; font-size: 18px">使用唯ID后</p>
            <ul class="cons ul2">
              <li>集中的账号和认证管理平台带来一致的体验。</li>
              <li>丰富的自定义选项，以及针对具体客户的源码级定制。</li>
              <li>提升账号和认证管理的质量和安全性。</li>
              <li>提高用户留存率、转化率。</li>
              <li>降低开发、管理、安全、审计成本。</li>
              <li>更快将你的产品推向市场。</li>
              <li>开发者和用户更满意。</li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="gradient-hr"/>
    <div class="section" id="contact">
      <p class="section-title">联系我们</p>
      <p class="section-summary">合作 · 信赖 · 共赢</p>
      <div style="margin-top: 40px;">
        <p>无论你已经是我们的客户，或对产品感兴趣，或有其他方面的合作，我们都真诚期待你的来电。</p>
        <el-row style="margin-top: 40px">
          <el-col :span="2" style="margin-top: 70px;" :offset="2">
            <img src="../../assets/gongzuo.png" width="64"/>
          </el-col>
          <el-col :span="18">
            <business-card name="小梁" title="客户经理（业务咨询）" tel="18588237889" email="liangtb@qq.com" qq="244121358">
              <img src="../../assets/wechat-185.jpeg" slot="qr-code"/>
            </business-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 40px">
          <el-col :span="2" style="margin-top: 70px;" :offset="2">
            <img src="../../assets/shezhi.png" width="64"/>
          </el-col>
          <el-col :span="18">
            <business-card name="小谢" title="技术支持" tel="15521312099" email="help@onlyid.net" qq="452391310">
              <img src="../../assets/wechat-155.jpeg" slot="qr-code"/>
            </business-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import common from 'onlyid-frontend-common'
  import BusinessCard from './BusinessCard'

  export default {
    components: {BusinessCard},
    data () {
      return {
        common
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner-bg {
    position: absolute;
    z-index: -1;
    width: 100%;
    transform: skewY(2deg);
    top: 0px;
    transform-origin: 100% 0;
    background-color: #303133;
    background-image: url("../../assets/mask-about.png");
    background-position: 0 -200px;
    height: 280px;
    background-size: cover;
  }
  #banner1 {
    padding: 40px 0;
    width: 980px;
    margin: 0 auto;
    color: white;
  }
  .ul1 li {
    margin-top: 10px;
  }
  .ul2 {
    margin-top: 30px;
    padding-left: 0;
  }
  .ul2 li {
    margin-top: 20px;
  }
  .pros {
    list-style-image: url("../../assets/close.png");
  }
  .cons {
    list-style-image: url("../../assets/complete.png");
  }
</style>
