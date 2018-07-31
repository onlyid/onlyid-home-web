<template>
  <div>
    <h1>概述</h1>
    <h2>前言</h2>
    <p>app/网站使用手机号登录是大势所趋，但一直都没有好的实践。</p>
    <p>常规的做法需要开发者开通短信，发送和匹配验证码。麻烦不说，安全性大多考虑不周，还要担心短信接口盗刷问题。成本也非常高，一个每年10万人次登录的小型app，一年的短信花销高达5千元。</p>
    <p>唯ID的手机账号解决了这些问题，开发者不用开通短信，轻松获取用户手机号。我们不是用户系统，只提供认证，是微信、微博等三方登录的理想补充。广泛应用于手机号登录、三方登录绑定手机、用户更换手机号等场景。</p>
    <h2>验证流程</h2>
    <p>以app为例：</p>
    <ol class="docs-ol">
      <li>通过SDK的auth方法打开授权页。</li>
      <li>用户输入手机号，点击下一步。
        <ul>
          <li>如果用户之前未使用过唯ID，系统引导用户以短信验证码方式验证，并提示用户设置密码。</li>
          <li>如果用户之前使用过唯ID，系统引导用户以密码方式验证，用户也可选短信验证。</li>
        </ul>
      </li>
      <li>SDK发送手机号、验证码和密码等数据到唯ID服务器，服务器完成验证返回结果。</li>
      <li>如果你的应用没有启用服务端中转流程，则在验证成功后，会直接获得access token，否则，你会收到一个authorization code，app的服务端可使用此authorization code安全地获取access token，然后获取用户手机号和id。</li>
    </ol>
    <div class="docs-img-div">
      <img src="../../assets/auth-chart.png" width="768" class="docs-img"/>
      <p>验证流程</p>
    </div>
    <h2 id="glossary">名词解释</h2>
    <p>以下为文档中出现频繁的技术名词。</p>
    <dl>
      <dt>client</dt>
      <dd>指app或网站，同个app不区分平台（一个app的iOS和Android版视为一个client）。</dd>
      <dt>client id和client secret</dt>
      <dd>分别相当于你的app/网站在唯ID的帐号和密码。是SDK连接服务器所必需的标识。</dd>
      <dt>authorization code</dt>
      <dd>第三方通过authorization code获取access token，code的超时时间为5分钟，一个code只能换取一次access token即失效。</dd>
      <dt>access token</dt>
      <dd>第三方通过access token获取用户手机号和id，token的超时时间为1小时，一个token可多次换取mobile和id。</dd>
    </dl>
  </div>
</template>

<script>
  import Note from './Note'

  export default {
    components: {Note},
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../assets/docs.css"></style>
<style scoped>
  dl dt {
    margin: 20px 0 5px;
    font-weight: bold;
  }
  dl dd {
    margin-left: 0px;
  }
</style>
