<template>
  <div>
    <h1>OAuth 2.0入门</h1>
    <h2>前言</h2>
    <p><a href="http://oauth.net/2" target="_blank">OAuth 2.0</a> 是一个开放标准，允许第三方访问用户在某一网站上存储的私密资源，而无需将用户名和密码提供给第三方。唯ID的手机账号是基于OAuth 2.0构建的授权验证系统，可以让用户安全地在第三方应用验证手机号。</p>
    <p>本节不论述OAuth 2.0的协议细节，只介绍开发者接入时涉及到的概念和流程。</p>
    <h2>授权流程</h2>
    <p>支持authorization code授权方式，适用于拥有server端的应用授权。整体流程：</p>
    <ol class="docs-ol">
      <li>第三方发起验证请求，用户在授权页完成手机号验证，唯ID带上authorization code返回第三方应用；</li>
      <li>使用authorization code、client id和client secret进行RESTful API调用，获取access token；</li>
      <li>使用access token进行RESTful API调用，获取用户信息。</li>
    </ol>
    <note type="info">实际接入时，唯ID简化了授权流程，抹去了access token的概念，使用更加简便。</note>
    <div class="docs-img-div" style="margin-top: 15px;">
      <img src="../../assets/auth-sequence.png" width="768" class="docs-img"/>
      <p>时序图</p>
    </div>
    <h2>名词解释</h2>
    <p>统一见 <router-link to="/docs/overview#glossary">名词解释</router-link></p>
  </div>
</template>

<script>
import Note from '../../components/docs/Note'

export default {
  components: { Note },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../assets/docs.css"></style>
