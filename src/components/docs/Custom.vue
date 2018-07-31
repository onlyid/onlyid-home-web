<template>
  <div>
    <h1>自定义选项（基础）</h1>
    <h2>前言</h2>
    <p>我们为公有云的开发者提供以下自定义选项：</p>
    <table style="border-collapse: collapse; margin-top: 15px">
      <tr><td class="c1">业务场景</td><td>四种（登录、绑号、换号、验证）</td></tr>
      <tr><td class="c1">主题界面</td><td>两种（日间、夜间）</td></tr>
      <tr><td class="c1">放大显示</td><td>两种（标准、放大）</td></tr>
      <tr><td class="c1">验证方式（仅app）</td><td>两种（客户端Token、服务端中转）</td></tr>
    </table>
    <p style="margin-top: 25px">所有自定义选项使用方式类似：对于网站，通过授权页的query参数设置；对于app，通过sdk传参设置。下面以网站和Android为例，讲解所有自定义选项，iOS使用方式和Android类似，不再赘述。</p>
    <h2 id="scene">业务场景</h2>
    <p>提供手机号登录（默认）、三方登录绑定手机、更换手机号和通用验证场景，通过scene设置，分别为login、bind、change和auth，以绑号为例：</p>
    <el-tabs>
      <el-tab-pane label="网站">
        <pre>https://my.onlyid.net/authorize?response_type=code&client_id=5ae01c99904be93f3f62101a
&state=123&redirect_uri=https%3A%2F%2Fdemo.onlyid.net%2F%23%2Fauth&scene=bind</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, CLIENT_SECRET, null, null, "bind");</pre>
      </el-tab-pane>
    </el-tabs>
    <div class="docs-img-div">
      <img src="../../assets/bind1.png" width="256" class="docs-img"/>
      <p>绑号1</p>
    </div>
    <div class="docs-img-div">
      <img src="../../assets/bind2.png" width="256" class="docs-img"/>
      <p>绑号2</p>
    </div>
    <h2 id="theme-dark">主题界面</h2>
    <p>提供日间、夜间两种主题界面，通过theme_dark（网站）或themeDark（SDK）设置，为true时展示夜间主题，否则默认日间主题，示例如下：</p>
    <el-tabs>
      <el-tab-pane label="网站">
        <pre>https://my.onlyid.net/authorize?response_type=code&client_id=5ae01c99904be93f3f62101a
&state=123&redirect_uri=https%3A%2F%2Fdemo.onlyid.net%2F%23%2Fauth&theme_dark=true</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, CLIENT_SECRET, true, null);</pre>
      </el-tab-pane>
    </el-tabs>
    <div class="docs-img-div">
      <img src="../../assets/review-approved.png" width="256" class="docs-img"/>
      <p>日间</p>
    </div>
    <div class="docs-img-div">
      <img src="../../assets/theme-dark.png" width="256" class="docs-img"/>
      <p>夜间</p>
    </div>
    <h2 id="view-zoomed">放大显示</h2>
    <p>提供标准、放大两种显示大小，通过view_zoomed（网站）或viewZoomed（SDK）设置，为true时放大显示，否则正常显示，示例如下：</p>
    <el-tabs>
      <el-tab-pane label="网站">
        <pre>https://my.onlyid.net/authorize?response_type=code&client_id=5ae01c99904be93f3f62101a
&state=123&redirect_uri=https%3A%2F%2Fdemo.onlyid.net%2F%23%2Fauth&view_zoomed=true</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, CLIENT_SECRET, null, true);</pre>
      </el-tab-pane>
    </el-tabs>
    <div class="docs-img-div">
      <img src="../../assets/review-approved.png" width="256" class="docs-img"/>
      <p>标准</p>
    </div>
    <div class="docs-img-div">
      <img src="../../assets/view-zoomed.png" width="256" class="docs-img"/>
      <p>放大</p>
    </div>
    <h2 id="server-redirect">验证方式（仅app）</h2>
    <note type="info">如需详细了解客户端Token和服务端中转的安全性考虑，请查阅 <router-link to="/docs/security#server-redirect">服务端中转</router-link> 。</note>
    <p>对于Android和iOS app，默认使用客户端Token流程验证，但使用authorization code通过服务端中转可有效提升安全性。</p>
    <p>要启用服务端中转流程，只需去掉OnlyID.auth方法的clientSecret参数即可，代码示例如下：</p>
    <el-tabs>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this);</pre>
      </el-tab-pane>
      <el-tab-pane label="iOS (Swift)">
        <pre>OnlyID.auth(clientId, delegate: self)</pre>
      </el-tab-pane>
    </el-tabs>
    <p>验证成功后，authorization code保存在authResponse的authCode属性。然后你使用authorization code换取access token。</p>
    <note>获取access token和用户信息建议在服务端进行，以防泄露你的client secret和access token。</note>
    <p>POST方式请求：</p>
    <pre>https://my.onlyid.net/token</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=你的client id
client_secret=你的client secret
grant_type=authorization_code
code=获取到的code
redirect_uri=https://my.onlyid.net/default_redirect_uri</pre>
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
    <p>得到access token后，获取用户信息步骤和客户端Token流程一致，不再赘述。</p>
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
  table .c1 {
    width: 160px;
    color: #7f7f7f;
  }
  table td {
    padding: 12px 15px;
  }
  table tr {
    border-bottom: 1px solid #DCDFE6;
  }
  table tr:hover {
    background-color: #F2F6FC;
  }
</style>
