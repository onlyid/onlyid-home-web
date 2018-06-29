<template>
  <div>
    <p id="banner1">我们提供极具竞争力的价格</p>
    <div id="content">
      <div style="width: 810px;" class="section">
        <div style="text-align: center;">
          <el-tag style="font-size: 20px">商业化公告</el-tag>
        </div>
        <div id="announcement">
          <p style="font-size: 20px; text-align: center">我们将于2018年1月正式商业化</p>
          <div style="font-size: 15px" class="announcement-detail">
            <p>尊敬的客户：</p>
            <p style="margin-top: 1em;">唯ID自上线以来，获得了广大开发者和企业客户的一致好评。为了提供更好的服务，我们将于2018年1月正式商业化。</p>
            <p>对于公用云部署方式，继续保持<span>免费</span>运营，只收取每位开发者<span>36元人民币/年</span>的费用，用于区分活跃账号。</p>
            <p>除账号年费外，不收取其他任何费用，您仍然可以享受<span>无限量的短信验证码服务</span>。</p>
            <p>对于专有云（大客户方案），收取每家企业<span>1000元人民币/年</span>的费用，同时提供价格优惠的短信套餐包。</p>
            <p>衷心感谢您过去的信任和支持，未来我们一定会为您提供更好的服务。</p>
            <p>有任何疑问，请联系客户经理。</p>
            <p>特此公告。</p>
            <p style="text-align: right; margin-top: 1em;">—— 唯ID团队 2017年12月</p>
          </div>
        </div>
      </div>
      <div class="gradient-hr"/>
      <div class="section" id="pricing-features">
        <p class="section-title">价格与功能</p>
        <p class="section-summary">极简定价，透明收费</p>
        <el-row style="margin-top: 40px">
          <el-col :span="10">
            <el-card>
              <div slot="header">
                <span class="pricing-title">公有云</span>
              </div>
              <div class="pricing-detail">
                <el-tabs v-model="activeNameStandard" class="tabs">
                  <el-tab-pane label="价格与功能" name="1">
                    <ul>
                      <li>基础年费（人民币）<span>36元</span></li>
                      <li>短信费用<span>免费</span></li>
                      <div class="gradient-hr"/>
                      <li>可建client<span>5个 *</span></li>
                      <li>自定义选项<span><el-button @click="goTab('2','standard')" type="text" class="pricing-button">基础</el-button></span></li>
                      <li>验证请求量<span>无限制</span></li>
                      <li>统计数据<span>基础</span></li>
                      <li>开通方式<span>自助开通</span></li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="自定义选项（基础）" name="2">
                    <ul>
                      <li>主题界面<span>两种（日间、夜间）</span></li>
                      <li>放大显示<span>两种（标准、放大）</span></li>
                      <li>验证方式<span>两种（客户端Token、服务端中转）</span></li>
                    </ul>
                  </el-tab-pane>
                </el-tabs>
              </div>
              <p style="text-align: center; margin-top: 40px">
                <el-button type="primary" @click="renew" round>去续费</el-button>
              </p>
            </el-card>
          </el-col>
          <el-col :span="13" :offset="1">
            <el-card>
              <div slot="header">
                <span class="pricing-title">专有云（大客户方案）</span>
              </div>
              <div class="pricing-detail">
                <el-tabs v-model="activeNameEnterprise" class="tabs">
                  <el-tab-pane name="1">
                    <span slot="label">价格与功能</span>
                    <ul>
                      <li>基础年费（人民币）<span>1000元</span></li>
                      <li>短信费用<span>提供价格优惠的短信套餐包</span></li>
                      <li>计算节点和数据库<span>以合同为准</span></li>
                      <li>定制和其他费用<span>以合同为准</span></li>
                      <div class="gradient-hr"/>
                      <li>可建client<span>50个 *</span></li>
                      <li>自定义选项<span><el-button @click="goTab('2','enterprise')" type="text" class="pricing-button">丰富</el-button></span></li>
                      <li>验证请求量<span>无限制</span></li>
                      <li>统计数据<span><el-button @click="goTab('4','enterprise')" type="text" class="pricing-button">丰富</el-button></span></li>
                      <li>开通方式<span>联系客户经理开通</span></li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane name="2">
                    <span slot="label"><i class="iconfont tab-icon">&#xe9c7;</i> 定制更贴心</span>
                    <ul>
                      <li>自定义选项（基础）<span>支持</span></li>
                      <li>自定义短信签名<span>支持</span></li>
                      <li>自定义短信模板<span>支持</span></li>
                      <li>自定义授权域名<span>支持</span></li>
                      <li>自定义界面（客户定制）<span>支持</span></li>
                      <li>集成常见三方登录（客户定制）<span>支持</span></li>
                      <li>集成用户资料（客户定制）<span>支持</span></li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane name="3">
                    <span slot="label"><i class="iconfont tab-icon">&#xe996;</i> 性能更可靠</span>
                    <ul>
                      <li>专有的计算节点<span>支持</span></li>
                      <li>专有的数据库<span>支持</span></li>
                      <li>专人维护<span>支持</span></li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane name="4">
                    <span slot="label"><i class="iconfont tab-icon">&#xe9d0;</i> 数据更丰富</span>
                    <ul>
                      <li>统计数据（基础）<span>开放</span></li>
                      <li>统计数据（深度）<span>开放</span></li>
                    </ul>
                  </el-tab-pane>
                </el-tabs>
              </div>
              <p style="text-align: center; margin-top: 40px">
                <el-button type="primary" round @click="common.goAnchor('#business-service')">联系客户经理</el-button>
              </p>
            </el-card>
          </el-col>
        </el-row>
        <p style="margin-top: 40px" class="note">* client指app或网站，同个app不区分平台（一个app的iOS和Android版视为一个client）</p>
        <p class="note">** 其他未尽事宜，请联系客户经理；唯ID拥有在法律范围内的最终解释权。</p>
      </div>
      <div class="gradient-hr"></div>
      <div class="section" id="business-service">
        <p class="section-title">大客户商务服务</p>
        <p class="section-summary">百分服务助您安心购，无忧用</p>
        <div style="margin-top: 60px">
          <div style="text-align: center; font-size: 18px">
            <img src="../assets/customer-manager.svg" width="100">
            <p>如果您是企业以及政府、教育和非营利组织，或想试用我们的专有云，请直接联系客户经理为您服务。</p>
          </div>
          <business-card name="小梁" title="客户经理（业务咨询）" tel="18588237889" email="liangtb#qq.com" qq="244121358"
                         style="margin-top: 40px;">
            <img src="../assets/wechat-185.jpeg" slot="qr-code"/>
          </business-card>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import common from 'onlyid-frontend-common'
  import BusinessCard from './about/BusinessCard'

  export default {
    components: {
      BusinessCard
    },
    data () {
      return {
        activeNameStandard: '1',
        activeNameEnterprise: '1',
        common
      }
    },
    methods: {
      renew () {
        this.$router.push('/console/account#products')
      },
      goTab (index, tabs) {
        if (tabs === 'standard') {
          this.activeNameStandard = index
        } else { // === enterprise
          this.activeNameEnterprise = index
        }
      }
    },
    watch: {
      activeNameStandard (value) {
        if (value === '1') {
          this.activeNameEnterprise = '1'
        } else { // == 2
          this.activeNameEnterprise = '2'
        }
      },
      activeNameEnterprise (value) {
        if (value === '1') {
          this.activeNameStandard = '1'
        } else if (value === '2') {
          this.activeNameStandard = '2'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner1 {
    background-image: url("../assets/mask.png"), linear-gradient(223.56deg,#6CECA2 0,#005EFF 100%);
  }
  #announcement {
    margin-top: 25px;
    background-image: url("../assets/mask.png");
    padding: 5px 15px 15px;
    border-top: dashed 1px #7f7f7f;
  }
  #announcement span {
    color: #F56C6C;
  }
  .announcement-detail p {
    margin: 0.5em 0;
  }
  .pricing-title {
    font-size: 20px;
  }
  .pricing-detail {
    height: 500px;
  }
  .pricing-detail ul {
    padding: 0px;
  }
  .pricing-detail li {
    font-size: 15px;
    list-style: none;
    margin: 20px 0;
  }
  .pricing-detail li span {
    float: right;
  }
  .tab-icon {
    font-size: 22px;
    vertical-align: sub;
  }
  .pricing-button {
    font-size: 15px;
    padding: 0px;
  }
  .tabs >>> .el-tabs__item {
    font-weight: normal;
  }
</style>
