<template>
  <div>
    <h1>产品概述</h1>
    <h2>背景</h2>
    <p>在app/网站的开发中，开发者必然会遇到使用手机号登录、三方登录绑定手机号等场景，但一直都没有好的实践。</p>
    <p>以手机号登录为例，现在常规的做法是由开发者开通短信服务，用户登录时，服务端调起发送短信接口发送验证码，再匹配用户输入的验证码和手机号，正确则认为是用户真实手机号。</p>
    <p>整个过程，开发者需要开通短信服务，发送验证码，储存验证码，匹配验证码；考虑验证码过期，校验失败次数，以及通过不同的方式防止短信接口被盗刷等各种繁琐细节。</p>
    <p>这里还不包括居高不下的短信发送成本，以一个每年约10万人次登录（假设仅使用短信验证码登录，不考虑密码登录、其他三方登录等情况）的小型app为例，一年的短信花销可能高达5千元。</p>
    <p>总的来说，开发者自己实现短信验证码登录，费时费力，且成本高企不可控。</p>
    <p>唯ID的手机号验证服务正是在这种开发者的窘境中诞生，力求一劳永逸解决以上问题。</p>
    <h2>功能和使用场景</h2>
    <p>短信验证码的本质，是证明用户输入的手机号是其本人的，也就是一种验证手机号的方式。</p>
    <p>唯ID的手机号验证服务封装实际验证过程，开发者不用开通短信服务，轻松获取用户验证后的手机号，省时省力。</p>
    <p>通过综合使用短信验证码、密码等验证方式，唯ID实现了较低成本运营，真正为广大开发者和企业带来实实在在的优惠。</p>
    <p>唯ID能够覆盖全中国的用户，具备稳定可靠的性能。我们本身不是用户系统，只提供认证服务，是现有三方登录的理想补充。</p>
    <p>可广泛应用于短信验证码登录、三方登录绑定手机号、用户更换手机号等场景。</p>
    <notice type="info">在应用于以上三个场景时，调用唯ID的方式并无不同。唯ID只负责验证用户手机号，不感知、不干涉、不影响您的业务流程，您可应用在任何需要验证用户手机号的场景。</notice>
    <h2>工作原理</h2>
    <p>唯ID为每个用户存储手机号、id和密码信息。当用户使用唯ID的手机号验证服务时，系统会返回给您用户的手机号和id。如果您有多个应用同时使用唯ID的手机号验证服务，请放心，id在不同的应用是一致的。</p>
    <h3>验证流程（以iOS为例）</h3>
    <ol class="docs-ol">
      <li>app通过调起SDK的auth方法，开始验证流程。</li>
      <li>用户输入手机号，点击下一步。
        <ul>
          <li>如果用户之前没有使用过唯ID，系统提示用户以短信验证码方式验证，唯ID服务器会发送验证码短信，以便用户继续验证，并提示用户设置密码方便下次使用。</li>
          <li>如果用户之前已使用过唯ID并且预留了密码，系统会优先提示用户以密码方式验证，用户也可选短信方式验证。</li>
        </ul>
      </li>
      <li>SDK会发送用户输入的手机号，验证码或密码等数据到唯ID服务器，服务器完成验证返回结果。</li>
      <li>如果您的应用没有启用服务端中转流程，则在验证成功后，会直接获得用户手机号和id。否则，您会收到一个授权代码（authorization code），app的服务端可使用此授权代码安全地获取访问口令（access token），然后获取用户手机号和id。</li>
    </ol>
    <p>如需详细了解SDK直接验证和服务端中转的安全性考虑，请查阅 <router-link to="/docs/security#server-redirect">服务端中转</router-link> 。</p>
    <img src="../../assets/auth-chart.png" width="683"/>
    <h2 id="glossary">名词解释</h2>
    <p>以下为唯ID产品中出现频繁的技术名词。</p>
    <dl class="glossary-dl">
      <dt>id</dt>
      <dd>由唯ID生成，用于标识一个具体的用户。同个用户的id对应同个手机号不会变。</dd>
      <dd>同个用户的id在不同的client是一致的。如需详细了解安全性考虑，请查阅 <router-link to="/docs/faq/#security">安全相关</router-link>。</dd>
      <dt>client</dt>
      <dd>唯ID用client指代app或网站，同个app不区分平台（一个app的iOS和Android版视为一个client）</dd>
      <dt>client id和client secret</dt>
      <dd>分别相当于您的app/网站在唯ID的帐号和密码。是唯ID SDK连接服务器所必需的标识，每一个client对应一套id / secret。</dd>
      <dd>请妥善保管id / secret，勿泄露给任何第三方。</dd>
      <dt>授权代码（authorization code）</dt>
      <dd>第三方通过authorization code获取access token，code的超时时间为5分钟，一个code只能成功换取一次access token即失效。</dd>
      <dd>code的临时性和一次性保障了唯ID授权验证的安全性。第三方可通过使用https和state参数，进一步加强自身授权验证的安全性。</dd>
      <dt>访问口令（access token）</dt>
      <dd>第三方通过access token获取用户手机号（mobile）和id，token的超时时间为1小时，一个token可多次换取mobile和id。</dd>
      <dd>请妥善保管access token，勿泄露给任何第三方。</dd>
    </dl>
    <!--<p>所有服务免费，包括不限量的短信验证码服务。</p>-->
    <!--<p>用户只需注册一次，即可在所有接入唯一ID的app/网站使用。</p>-->
    <!--<p class="warn">手机号和id是用户隐私，请注意保密。</p>-->
  </div>
</template>

<script>
  import Notice from './Note'

  export default {
    components: {
      Notice
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
