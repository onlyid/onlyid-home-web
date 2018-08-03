<template>
  <div>
    <h1>常见问题</h1>
    <el-collapse class="collapse">
      <el-collapse-item title="可在哪些平台上使用唯ID？">
        <p>iOS、Android 和网页均支持使用唯ID。</p>
        <p>对于iOS，支持iOS 8或更高版本。</p>
        <p>对于Android，支持Android 4.4或更高版本。</p>
        <p>对于网页，支持IE 11、Chrome 以及其他现代浏览器。</p>
      </el-collapse-item>
      <el-collapse-item title="短信是否收费？">
        <p>对于公有云的开发者，不收取任何短信费用。对于专有云客户，提供价格优惠的短信套餐包。</p>
      </el-collapse-item>
      <el-collapse-item title="公有云是否可以自定义授权页或短信中的文本？">
        <p>出于下列原因，你无法自定义界面或短信：</p>
        <ul>
          <li>我们需要确保唯ID是一款合法、安全的产品，自定义界面或短信会带来潜在的违法违规、侵权等法律风险，以及潜在的网络欺诈（phishing）等安全风险。</li>
          <li>我们需要确保用户清楚感知是在使用唯ID的手机账号，而不是其他三方服务或app/网站本身的功能，以确保可以跨client共享密码，并带来一致、良好的用户体验。</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="你们收费这么便宜，以后会有广告吗？">
        <p>唯ID的使用场景决定了其用户体验对你的app/网站至关重要。</p>
        <p>广告会大大影响用户体验，降低用户留存率、转化率。我们现在，将来都不会添加任何形式的广告。</p>
      </el-collapse-item>
      <el-collapse-item title="我的app/网站想用邮箱登录，你们有考虑这种情况吗？">
        <p>出于下列原因，唯ID没有把邮箱作为验证方式之一：</p>
        <ul>
          <li>即使是用邮箱登录，根据《网络安全法》规定，也依然需要绑定手机号。</li>
          <li>手机号的普及率比邮箱高很多，且大部分用户的手机号比邮箱要短，意味着更少的击键次数。</li>
          <li>邮箱的验证需要发送验证链接到邮箱，引导用户点击，比短信验证码更繁琐耗时。</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="为什么唯ID要求用户设置密码，而不是由我的app/网站设置？">
        <p>我们认为：</p>
        <ul>
          <li>解耦业务系统和认证是国内外的趋势，可简化开发、降低成本、提高安全性。</li>
          <li>如果用户每使用一个app/网站都要设置一次密码，费时且繁琐，难以记忆和管理。</li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="用户在唯ID设置密码，而不是在我的app/网站，对用户有不便吗？">
        <p>没有不便，分两种情况，用户在使用你的app/网站前：</p>
        <ul>
          <li>未使用过其他接入唯ID的app/网站，此时用户可不感知唯ID，设置的密码即是你的app/网站的专有密码。</li>
          <li>已使用过其他接入唯ID的app/网站，此时用户已感知是在使用唯ID的手机账号，可选择密码或短信完成验证。</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
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
<style scoped src="../../assets/docs.css"></style>
<style scoped>
  .collapse {
    margin-top: 40px;
  }
  .collapse >>> .el-collapse-item__header {
    font-weight: normal;
    font-size: 15px;
    color: #3b5898;
  }
  .collapse >>> .el-collapse-item__content {
    font-size: 15px;
  }
</style>
