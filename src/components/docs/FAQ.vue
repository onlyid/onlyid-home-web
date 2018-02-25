<template>
  <div>
    <h1>常见问题</h1>
    <h2>前言</h2>
    <p>本节涵盖您在接入唯ID时遇到的许多常见问题。</p>
    <h2>一般问题</h2>
    <el-collapse class="collapse">
      <el-collapse-item title="可在哪些平台上使用唯ID？" name="1">
        <p>iOS、Android 和网页均支持使用唯ID。</p>
        <p>对于iOS，支持iOS 8或更高版本。</p>
        <p>对于Android，支持Android 4.4或更高版本。</p>
        <p>但对于网页而言，Internet Explorer (IE) 7、8 和 9 版本均不支持使用唯ID。如想使用，请务必将 IE 升级至 10 或更高版本。IE 10+、Chrome 以及其他现代浏览器均支持使用唯ID。</p>
      </el-collapse-item>
      <el-collapse-item title="接入或运行时出现错误，如何获得更多帮助？" name="2">
        <p>一般而言，当出现错误时，唯ID返回的 error_description 字段会包含足够清晰的错误信息，您可先根据该信息尝试解决问题。如您尝试后无法解决，请联系我们的技术支持。</p>
      </el-collapse-item>
      <el-collapse-item title="通过唯ID使用短信是否会收费？" name="3">
        <p>对于使用公有云的开发者，我们不会收取任何短信费用。</p>
        <p>对于专有云客户，我们提供价格优惠的短信套餐包。请查阅 <router-link to="/pricing">价格</router-link>，或联系我们的客户经理。</p>
      </el-collapse-item>
      <el-collapse-item title="我是公有云客户，是否可以自定义授权界面中显示的或用户收到的短信中的文本？" name="4">
        <p>出于下列原因，您无法自定义授权界面和用户收到的短信中的文本：</p>
        <ul>
          <li>我们需要确保唯ID是一款合法、安全的产品和服务，自定义界面或短信会带来潜在的违法违规、侵权等法律风险，以及潜在的网络欺诈（phishing）等安全风险。</li>
          <li>我们需要确保用户清楚感知是在使用唯ID的手机号验证服务，而不是其他三方服务或app/网站本身的功能，以确保可以跨client共享密码，并带来一致、良好的用户体验。</li>
        </ul>
        <p>对于更多的自定义要求，您可试用我们的专有云（大客户方案），提供丰富的自定义选项，以及针对具体客户的源码级定制。</p>
      </el-collapse-item>
      <el-collapse-item title="你们收费这么便宜，以后会有广告吗？" name="5">
        <p>我们深知唯ID的使用场景决定了其用户体验对您的app/网站至关重要。</p>
        <p>广告会大大影响用户体验，降低用户留存率、转化率。</p>
        <p>我们现在，将来都不会添加任何形式的广告。</p>
      </el-collapse-item>
      <el-collapse-item title="我的app/网站想用邮箱登录，你们有考虑这种情况吗？" name="6">
        <p>对于公有云方案，出于下列原因，唯ID没有把邮箱作为验证方式之一：</p>
        <ul>
          <li>即使是用邮箱（或用户名）登录，根据《网络安全法》规定，也依然需要绑定手机号。</li>
          <li>对于大部分中国网民，输入数字比输入字母更自然，且根据我们的调研，大部分网民的手机号比邮箱要短很多，也就意味着更少的击键次数。</li>
          <li>邮箱的验证非常繁琐耗时，现在常见的实践是发送验证链接到邮箱，引导用户点击，整个过程比短信验证码更多步骤、也更耗费时间。</li>
        </ul>
        <p>唯ID并没有计划增加邮箱验证作为公有云的标准功能之一。如您确实需要，可试用我们的专有云（大客户方案），提供此定制选项。</p>
      </el-collapse-item>
    </el-collapse>
    <h2 id="review">审核相关</h2>
    <p>本小节涵盖审核相关的常见问题。详细了解审核制度请查阅 <router-link to="/docs/review">审核制度</router-link> 。</p>
    <el-collapse class="collapse">
      <el-collapse-item title="“后审核”制度下，我的app/网站需要先上线再审核，如果不通过，会不会很影响用户体验？" name="1">
        <p>根据我们的统计，截至{{ currentYearMonth }}，第一次审核不通过的概率小于0.1%。如果您的app/网站是正常、合法合规的，您完全不用担心此问题。</p>
        <p>同时，也请开发者预先根据审核指南逐项自查，以免出现不理解审核内容，导致审核不通过情况。</p>
      </el-collapse-item>
      <el-collapse-item title="审核有效期多久？" name="2">
        <p>目前审核有效期为：永久。提交审核通过后，该client即永久处于【上线状态】。您后续对app/网站的版本升级、增减功能不需要重新提交审核。</p>
      </el-collapse-item>
      <el-collapse-item title="我一直不提交审核，会怎样？" name="3">
        <p>client的授权页会一直显示【开发状态】，但不会影响实际功能。我们强烈建议您在开发完成后提交审核，以获得更好的用户体验。</p>
      </el-collapse-item>
      <el-collapse-item title="怎么可以加快审核进度？" name="4">
        <p>审核是按client提交到管理后台的顺序进行的，我们的客服努力工作以确保可以在5个工作日内完成审核。您无法加快此过程。</p>
      </el-collapse-item>
    </el-collapse>
    <h2 id="password">密码相关</h2>
    <p>您可能已注意到，当用户使用唯ID的手机号验证服务时，会被要求设置一个密码。本小节涵盖密码相关的常见问题。</p>
    <el-collapse class="collapse">
      <el-collapse-item title="为什么唯ID要求用户设置密码？" name="1">
        <p>我们认为：</p>
        <ul>
          <li>密码仍然是最方便、用户接受度最高的身份验证方式之一。</li>
          <li>对于移动端，短信验证码可以替代密码；但对于桌面站点，使用密码更方便。</li>
        </ul>
        <p>唯ID作为通用、跨平台的手机号验证服务，综合使用短信验证码、密码可方便用户在各种场景均可快速完成验证。</p>
      </el-collapse-item>
      <el-collapse-item title="为什么在唯ID设置这个密码，而不是由我的app/网站单独设置？">
        <p>我们认为：</p>
        <ul>
          <li>如果用户每使用一个app/网站都要设置一次密码，费时且繁琐。</li>
          <li>数量众多的密码让用户不堪重负，难以记忆、管理。</li>
        </ul>
        <p>用户在唯ID设置一次密码，即可在所有接入唯ID的app/网站使用，记忆和管理都十分方便，是唯ID团队精心考虑后的结果。</p>
      </el-collapse-item>
      <el-collapse-item title="用户在唯ID设置密码，而不是在我的app/网站，对用户会有不便吗？">
        <p>不会有不便。</p>
        <p>分两种情况，用户在使用您的app/网站前：</p>
        <ul>
          <li>从未使用过其他接入唯ID的app/网站，此时用户可在不感知唯ID的情况下设置密码（在用户验证完手机号后设置密码是现在app/网站的常见实践），在用户观念中该密码即是您的app/网站的专有密码。</li>
          <li>已使用过其他接入唯ID的app/网站，此时用户已清楚感知是在使用唯ID的手机号验证服务，可选择密码或短信完成验证。</li>
        </ul>
        <p>由上可见，无论用户是初次使用唯ID或者已经熟悉使用，均不会有任何不便。</p>
      </el-collapse-item>
      <el-collapse-item title="我的app/网站是否还应该为用户设置单独的密码？">
        <p>除非您的app/网站有特殊的安全性要求，否则不应该再设置单独的密码。因为唯ID返回的手机号已经是验证后的，您不需要、也不应该再多验证一次。</p>
      </el-collapse-item>
    </el-collapse>
    <h2 id="security">安全相关</h2>
    <p>本小节涵盖安全相关的常见问题。详细了解安全实践请查阅 <router-link to="/docs/security">安全性</router-link> 。</p>
    <el-collapse class="collapse">
      <el-collapse-item title="为什么同个用户，在不同的client（可能来自不同开发者）的id是一样的，这样安全吗？" name="1">
        <p>是安全的。</p>
        <p>同个用户在不同的client保持一致的id，可方便开发者进行用户信息互通。场景举例：</p>
        <ol>
          <li>同个开发者不同client间用户信息互通：如一家公司的app和网站想共用一套用户系统。</li>
          <li>不同开发者间用户信息互通：如在某家公司的app买了电影票，使用另一家公司的app验票进场。</li>
        </ol>
        <p>现在大部分的app/网站已经使用手机号登录，由于同个用户不太可能有多个手机号，也就意味着不同的app/网站对于同个用户已经有了一致的标识（手机号），唯ID在这种前提下提供一致的id不会带来额外的安全问题。</p>
      </el-collapse-item>
      <el-collapse-item title="为什么你们默认使用SDK直接验证流程（而不是服务端中转），这样安全吗？">
        <p>唯ID的手机号验证服务默认使用SDK直接验证流程，在验证成功后，会直接获得用户手机号和id。</p>
        <p>我们默认使用此流程是因为在调研中发现，有相当一部分开发者未接触过OAuth 2.0协议，为了降低接入难度，SDK封装了其中的授权步骤。</p>
        <p>服务端中转流程的确比SDK直接验证更安全。由您决定您的风险模式和数据价值是否有必要采取适当的额外步骤来启用此流程。</p>
        <p>我们暂未收到关于此的安全报告，因此没有计划设定服务端中转为默认流程。</p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
const date = new Date()
// 拨后2个月
date.setMonth(date.getMonth() - 2)

export default {
  data () {
    return {
      currentYearMonth: date.getFullYear() + '年' + (date.getMonth() + 1) + '月'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .collapse {
    margin-top: 30px;
  }
  .collapse >>> .el-collapse-item__header {
    font-weight: normal;
    font-size: 14px;
    color: #3b5898;
  }
  .collapse >>> .el-collapse-item__content {
    font-size: 14px;
  }
</style>
