<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>网站快速接入</h1>
    <h2>前言</h2>
    <p>使用RESTful API快速为你的网站接入唯ID。</p>
    <note type="info">本节假定你已了解基于OAuth 2.0的系统的交互方式，否则请查阅 <router-link to="/docs/oauth2">OAuth 2.0入门</router-link>。</note>
    <h2>1. 获取authorization code</h2>
    <p>需要验证用户手机号时，GET方式请求：</p>
    <pre>https://oauth.onlyid.net/authorize?response_type=code&client_id=你的client id
&state=123&redirect_uri=你的redirect uri</pre>
    <p>打开授权页。</p>
    <note type="info">若提示“参数错误”，请检查参数是否填写正确，如redirect_uri与控制台填写的是否一致。<br/>如果你不知state是什么，可默认传123。</note>
    <p>授权页会引导用户完成验证，然后带上code GET方式重定向到你的redirect uri，成功示例：</p>
    <pre>你的redirect uri?code=596c441eced7220159a3c0616e4de248e9223c9d&state=123</pre>
    <h2>2. 获取access token</h2>
    <note>获取access token和用户信息建议在服务端进行，以防泄露你的client secret和access token。</note>
    <p>得到authorization code后，POST方式请求：</p>
    <pre>https://oauth.onlyid.net/token</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=你的client id
client_secret=你的client secret
grant_type=authorization_code
code=获取到的code
redirect_uri=你的redirect uri</pre>
    <p>获取access token。</p>
    <p>成功示例：</p>
    <pre>{
  "access_token": "6082b1f9861fe019bf76ce31facae7fb7b5ef905",
  "token_type": "Bearer",
  "expires_in": 3599,
  "refresh_token": "7608b799ff3d2073bead1f39bf12ade18ce7e82d"
}</pre>
    <p>失败示例：</p>
    <pre>{
  "error": "invalid_grant",
  "error_description": "Invalid grant: authorization code is invalid"
}</pre>
    <note type="info">access token的有效期为1个小时</note>
    <h2>3. 获取用户信息</h2>
    <p>得到access token后，GET方式请求：</p>
    <pre>https://oauth.onlyid.net/user?access_token=获取到的access token</pre>
    <p>获取用户信息。</p>
    <p>成功示例：</p>
    <pre>{
  "id":"5abcd260c4542d641acf1c34",
  "mobile":"18512345678",
  "createDate":"2018-04-28T07:27:28.347Z"
}</pre>
    <p>失败示例：</p>
    <pre>{
    "error": "invalid_token",
    "error_description": "Invalid token: access token is invalid"
}</pre>
    <note>手机号和id是用户隐私，请注意保密。</note>
    <h2>结语</h2>
    <p>至此，你已完成网站的接入。</p>
    <p>接下来，你还可以在下载中心查阅 <router-link to="/downloads#demo">示例Demo</router-link>，以加深理解。
      或继续阅读 <router-link to="/docs/custom">自定义选项（基础）</router-link>，了解我们为使用公有云的开发者提供的自定义选项。</p>
  </div>
</template>

<script>
  import Note from './Note'

  export default {
    components: {
      Note
    },
    data () {
      return {
        msg: 'Web'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
