<template>
  <div>
    <h1>OAuth 2.0入门</h1>
    <h2>前言</h2>
    <p><a href="http://oauth.net/2" target="_blank">OAuth 2.0</a> 是第三方访问用户私密资源的通用标准。</p>
    <p>本节不会详细论述OAuth 2.0的协议细节，只介绍开发者接入唯ID时涉及到的基本流程和概念。</p>
    <notice type="info">如果你已了解OAuth 2.0，或使用过基于OAuth 2.0的系统（微信登录等），可跳过本节。</notice>
    <h2>OAuth和唯ID</h2>
    <p>OAuth是一个开放标准，允许用户让第三方应用访问该用户在某一网站上存储的私密的资源，而无需将用户名和密码提供给第三方应用。</p>
    <p>OAuth 2.0是OAuth协议的下一版本，但不向下兼容OAuth 1.0。</p>
    <p>唯ID的手机号验证服务是基于OAuth 2.0协议标准构建的唯ID OAuth 2.0授权验证系统，遵守rfc6749和rfc6750。</p>
    <p>唯ID OAuth 2.0授权验证让用户安全地在第三方app/网站验证手机号，在用户通过第三方调起的唯ID授权页面完成验证后，第三方可以获得用户的access token（访问口令），通过access token可以获取用户验证后的手机号。</p>
    <h2>授权流程</h2>
    <p>唯ID OAuth 2.0授权验证目前支持authorization code授权方式，适用于拥有server端的client授权。该模式整体流程为：</p>
    <ol class="docs-ol">
      <li>第三方发起唯ID授权验证请求，用户在唯ID授权页面完成手机号验证后，唯ID会返回app或重定向到第三方网站，并且带上authorization code；</li>
      <li>通过authorization code参数加上client id和client secret等，通过API换取access token；</li>
      <li>通过access token进行接口调用，获取用户验证后的手机号。</li>
    </ol>
    <notice type="info">如果你在为app接入唯ID，默认会使用客户端Token流程，在验证成功后，会直接获得access token，这是因为SDK封装了其中的授权步骤。如果你启用了服务端中转流程，则需完成全部授权步骤。</notice>
    <p>获取用户手机号时序图：</p>
    <img src="../../assets/auth-sequence.png" width="683" class="docs-img"/>
    <h2>概念解释</h2>
    <p>OAuth 2.0涉及的概念解释统一见 <router-link to="/docs/overview#glossary">名词解释</router-link></p>
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
