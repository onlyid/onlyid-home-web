<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>网站快速接入</h1>
    <h2>1. 获取authorization code</h2>
    <p>用户需要登录时，打开授权页：</p>
    <pre>https://my.onlyid.net/auth?client_id=你的client id&redirect_uri=你的redirect uri</pre>
    <note type="info">你可设置redirect uri为任意网址；你可使用 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open" target="_blank">window.open</a> 方法以小窗口形式打开授权页，以获得更好体验。</note>
    <p>授权页引导用户完成验证，然后带上code GET方式重定向到你的redirect uri，成功示例：</p>
    <pre>你的redirect uri?code=596c441eced7220159a3c0616e4de248e9223c9d</pre>
    <h2>2. 获取用户信息</h2>
    <note>获取用户信息建议在服务端进行，以防泄露你的client secret。</note>
    <p>得到authorization code后，POST方式请求：</p>
    <pre>https://my.onlyid.net/user</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=你的client id
client_secret=你的client secret
code=获取到的code</pre>
    <p>获取用户信息。</p>
    <p>成功示例：</p>
    <pre>{
  "id":"5abcd260c4542d641acf1c34",
  "mobile":"18588888888",
  "createDate":"2018-04-28T07:27:28.347Z"
}</pre>
    <p>失败示例：</p>
    <pre>{
  "error": "Invalid grant: authorization code is invalid"
}</pre>
    <h2>结语</h2>
    <p>你已完成接入，接下来还可以查阅 <a href="https://github.com/lltb/onlyid-demo-web" target="_blank">示例Demo</a>，以加深理解。</p>
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
