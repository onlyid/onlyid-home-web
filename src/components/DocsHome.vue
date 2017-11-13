<template>
  <div>
    <ul>
      <li>唯一ID基于OAuth 2.0，遵守rfc6749和rfc6750，支持authorization code和refresh token授权方式。</li>
      <li>所有服务免费，包括不限量的短信验证码服务。</li>
      <li>用户只需注册一次，即可在所有接入唯一ID的app/网站使用。</li>
      <li class="warn">手机号和id是用户隐私，请注意保密。</li>
    </ul>

    <h2>准备工作</h2>
    <p>登录<router-link to="/console">控制台</router-link>，新建client获取client id和client secret。</p>
    <p>然后选择左侧菜单继续接入流程。</p>
  </div>
</template>

<script>
  export default {
    name: 'DocsHome',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    padding-left: 0px;
  }
  li {
    margin-top: 20px;
    list-style: none;
    font-size: 17px;
  }
  p {
    font-size: 17px;
  }
  h2 {
    font-size: 22px;
    margin-top: 50px;
  }
  pre {
    font-size: 17px;
    padding: 10px;
    background-color: #fff6d7;
  }
  .warn {
    color: #fa5555;
  }
</style>
