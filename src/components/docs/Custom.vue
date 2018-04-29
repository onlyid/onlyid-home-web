<template>
  <div>
    <h1>自定义选项（基础）</h1>
    <h2>前言</h2>
    <p>利用我们为公有云的开发者提供的自定义选项，设计个性十足的授权页。</p>
    <note type="info">本节假定你已完成接入流程，client正常可用，否则请根据你的client类型，查阅 快速接入 对应小节，完成接入。</note>
    <h2>开始使用</h2>
    <p>目前我们为公有云的开发者提供以下自定义选项（不断更新中）：</p>
    <el-table
      :data="tableData"
      :show-header="false"
      style="width: 500px">
      <el-table-column
        prop="title"
        label="title"
        width="200">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="detail"
        width="300">
      </el-table-column>
    </el-table>
    <p style="margin-top: 20px">所有自定义选项使用方式类似：对于网站，通过授权页的query参数设置；对于app，通过sdk传参设置。</p>
    <p>下面以网站和Android为例，讲解所有的自定义选项，iOS使用方式和Android类似，不再赘述。</p>
    <note type="info">你也可试用我们的专有云（大客户方案），提供更丰富的自定义选项，以及针对具体客户的源码级定制。</note>
    <h2 id="theme-dark">主题界面</h2>
    <p>提供日间、夜间两种主题界面，通过theme_dark（网站）或themeDark（SDK）设置，为true时展示夜间主题，否则默认日间主题，示例如下：</p>
    <el-tabs>
      <el-tab-pane label="网站">
        <pre>https://oauth.onlyid.net/authorize?response_type=code&client_id=5ae01c99904be93f3f62101a
&state=123&redirect_uri=https%3A%2F%2Fdemo.onlyid.net%2F%23%2Fauth&theme_dark=true</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, CLIENT_SECRET, true, null);</pre>
      </el-tab-pane>
    </el-tabs>
    <p>效果图对比：</p>
    <div class="docs-img-div">
      <img src="../../assets/theme-light.png" width="256" class="docs-img"/>
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
        <pre>https://oauth.onlyid.net/authorize?response_type=code&client_id=5ae01c99904be93f3f62101a
&state=123&redirect_uri=https%3A%2F%2Fdemo.onlyid.net%2F%23%2Fauth&view_zoomed=true</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, CLIENT_SECRET, null, true);</pre>
      </el-tab-pane>
    </el-tabs>
    <p>效果图对比：</p>
    <div class="docs-img-div">
      <img src="../../assets/theme-light.png" width="256" class="docs-img"/>
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
    <pre>https://oauth.onlyid.net/token</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=你的client id
client_secret=你的client secret
grant_type=authorization_code
code=获取到的code
redirect_uri=https://oauth.onlyid.net/default_redirect_uri</pre>
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
  components: {
    Note
  },
  data () {
    return {
      tableData: [
        {title: '主题界面', detail: '两种（日间、夜间）'},
        {title: '放大显示', detail: '两种（标准、放大）'},
        {title: '验证方式（仅app）', detail: '两种（客户端Token、服务端中转）'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
