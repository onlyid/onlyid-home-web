<template>
  <div>
    <div class="header-hehe">
    </div>
    <div id="content">
      <div id="banner">
        <p style="text-align: center; font-size: 24px">“我们的使命是建立中国统一的账号和认证体系，为互联网带来秩序。”</p>
        <p style="float: right; font-size: 18px;">—— 唯ID团队</p>
      </div>
      <div class="section" style="margin-top: 90px">
        <p class="section-title">关于唯ID</p>
        <p class="section-summary">创新地解决账号和认证问题</p>
        <div class="about">
          <div>
            <p>唯ID隶属深圳市友全科技有限公司，唯ID是国内领先的IDaaS服务提供商，主要产品为企业IDaaS解决方案、手机号验证服务。</p>
            <p>我们打造了一个可扩展、易集成的平台以解决复杂的账号和认证问题，同时也率先利用OAuth协议解决手机号登录成本高问题。</p>
            <p>引领着账号和认证领域、手机号验证领域的革命与创新，深受广大开发者和企业客户的信赖。</p>
          </div>
          <div style="margin-top: 40px">
            <el-row>
              <el-col :span="5" style="margin-top: 50px">
                <img src="../../assets/jiangli.png" width="90"/><p style="font-size: 18px">专业的团队</p>
              </el-col>
              <el-col :span="19">
                <el-card style="padding: 10px">
                  <p style="font-size: 20px; margin: 0px">唯ID拥有一支由高学历、高素质人才组成的专家团队。</p>
                  <p>团队成员：</p>
                  <ul class="about-ul">
                    <li>多毕业于国内知名985高校</li>
                    <li>多来自国内优秀的科技企业</li>
                    <li>平均年龄不到30岁，年轻有活力</li>
                  </ul>
                  <p style="margin: 0">作为国内较早从事IDaaS行业的团队，我们见证了IDaaS在国内的快速发展，也积累了丰富的行业相关经验，为我们的客户带来极高
                    <router-link :to="$route.fullPath" @click.native="common.goAnchor('#economic-impact')">经济收益</router-link>。</p>
                </el-card>
              </el-col>
            </el-row>
            <el-row style="margin-top: 40px">
              <el-col :span="5" style="margin-top: 50px">
                <img src="../../assets/linggan.png" width="90"/><p style="font-size: 18px">品牌和文化</p>
              </el-col>
              <el-col :span="19">
                <el-card style="padding: 10px">
                  <p style="font-size: 20px; margin: 0px">The OnlyID for you.</p>
                  <p>我们选择了一个浪漫的词 only，寓意我们：</p>
                  <ul class="about-ul">
                    <li>专注IDaaS行业并提供相关服务</li>
                    <li>期盼未来使用一个唯ID账号即可畅游互联网</li>
                    <li>相信科技有温度，唯ID可以相伴用户一生</li>
                  </ul>
                  <p style="margin: 0">公司文化 —— 从原始的地方出发，天马行空，脚踏实地。</p>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="gradient-hr"/>
      <div class="section" id="economic-impact">
        <p class="section-title">经济收益</p>
        <p class="section-summary">用唯ID降低成本，提升用户满意度</p>
        <div class="about">
          <p>企业采用我们的账号和认证平台带来极高的投资回报率：</p>
          <ul class="about-ul">
            <li>明显降低开发成本，大大减少IAM（Identity and Access Management）支出、解决安全问题支出。</li>
            <li>更关注业务逻辑，由此带来更快的创新速度，让终端用户更加满意。</li>
          </ul>
          <el-card style="margin: 40px auto; width: 790px; padding: 10px">
            <img src="../../assets/economic-impact.svg" width="750"/>
          </el-card>
          <el-row>
            <el-col :span="11">
              <p style="color: #7f7f7f; font-size: 18px">使用唯ID前</p>
              <ul class="pros-list about-ul1">
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
              <ul class="cons-list about-ul1">
                <li>集中的账号和认证管理平台带来一致的体验。</li>
                <li>丰富的自定义选项，以及针对具体客户的源码级定制。</li>
                <li>提升账号和认证管理的质量和安全性。</li>
                <li>提高用户留存率、转化率。</li>
                <li>降低开发、管理、安全、审计成本。</li>
                <li>更快将您的产品推向市场。</li>
                <li>企业合作伙伴间协作更顺畅。</li>
                <li>开发者和用户更满意。</li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="gradient-hr"/>
      <div class="section" id="contact">
        <p class="section-title">联系我们</p>
        <p class="section-summary">我们真诚期待您的来电</p>
        <div class="about">
          <p>无论您已经是我们的客户，或对我们的产品感兴趣，或有其他方面的合作，我们都真诚期待您的来电。</p>
          <el-row style="margin-top: 40px">
            <el-col :span="2" style="margin-top: 80px;" :offset="2">
              <img src="../../assets/gongzuo.png" width="64"/>
            </el-col>
            <el-col :span="18">
              <el-card style="font-size: 16px; width: 600px; margin: 0 auto;">
                <div>
                  <img src="../../assets/wechat-185.jpeg" width="150" style="float: right"/>
                  <p style="font-size: 18px">客户经理小梁（业务咨询）</p>
                  <p style="margin-top: 40px">TEL：18588237889（工作日 09:30 - 18:30）</p>
                  <p>MAIL：liangtb#qq.com（用@代替#）</p>
                  <p>QQ：244121358</p>
                </div>
              </el-card>
              <p style="text-align: center; color: #7f7f7f; font-size: 14px">各类客户业务支持，包括产品咨询、建议反馈，以及购买帮助等<br/>市场合作、软件产品合作、以及IT解决方案合作等合作洽谈</p>
            </el-col>
          </el-row>
          <el-row style="margin-top: 40px">
            <el-col :span="2" style="margin-top: 80px;" :offset="2">
              <img src="../../assets/shezhi.png" width="64"/>
            </el-col>
            <el-col :span="18">
              <el-card style="font-size: 16px; width: 600px; margin: 0 auto;">
                <div>
                  <img src="../../assets/wechat-155.jpeg" width="150" style="float: right"/>
                  <p style="font-size: 18px">技术支持</p>
                  <p style="margin-top: 40px">TEL：15521312099（工作日 09:30 - 18:30）</p>
                  <p>MAIL：help#onlyid.net（用@代替#）</p>
                  <p>QQ：452391310</p>
                </div>
              </el-card>
              <p style="text-align: center; color: #7f7f7f; font-size: 14px">各类客户技术支持</p>
            </el-col>
          </el-row>
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
  #content {
    font-size: 16px;
  }
  .header-hehe {
    position: absolute;
    z-index: -1;
    width: 100%;
    transform: skewY(3deg);
    top: 0px;
    transform-origin: 100% 0;
    background-color: #303133;
    background-image: url("../../assets/mask-about-us.png");
    background-position: 0 -200px;
    height: 320px;
    background-size: cover;
  }
  #banner {
    padding: 50px 0;
    width: 980px;
    margin: 0 auto;
    color: white;
  }
  .about {
    margin-top: 40px;
  }
  .about-ul li {
    margin-top: 10px;
  }
  .about-ul1 {
    margin-top: 30px;
    padding-left: 0;
  }
  .about-ul1 li {
    margin-top: 20px;
  }
  .pros-list {
    list-style-image: url("../../assets/close.png");
  }
  .cons-list {
    list-style-image: url("../../assets/complete.png");
  }
</style>
