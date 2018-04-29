<template>
  <div>
    <h1>准备工作</h1>
    <h2>前言</h2>
    <p>无论你准备接入的是app还是网站，都请先查阅本节。本节指导你注册唯ID开发者账号，新建client获得id和secret。</p>
    <h2>注册开发者账号</h2>
    <p>要使用唯ID提供的服务，你需要先注册开发者账号。点击右上角 登录/注册 按钮，开始注册流程。</p>
    <p>注册过程分为验证开发者手机号和完善开发者信息两步，请按提示填写真实有效的个人信息。</p>
    <img src="../../assets/signup.png" width="300" class="docs-img" style="padding: 20px;"/>
    <div style="clear: both"></div>
    <h2>新建client</h2>
    <p>注册完成后，即可新建你的第一个client。</p>
    <p>点击控制台 / 概览 / 新建client，开始新建流程，请按提示填写真实有效的client信息。</p>
    <img src="../../assets/create-client.png" width="410" class="docs-img" style="padding: 20px; "/>
    <p>新建完成后，你会获得client对应的id和secret。</p>
    <p>然后请根据你的client类型，完成剩余接入流程：
      <router-link to="/docs/ios">iOS快速接入</router-link>、
      <router-link to="/docs/android">Android快速接入</router-link>、
      <router-link to="/docs/web">网站快速接入</router-link>。</p>
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
<style scoped>

</style>
