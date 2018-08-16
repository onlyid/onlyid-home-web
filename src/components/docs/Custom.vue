<template>
  <div>
    <h1>自定义选项（基础）</h1>
    <h2>前言</h2>
    <p>我们为公有云的开发者提供以下自定义选项：</p>
    <table style="border-collapse: collapse; margin-top: 15px">
      <tr style="border-top: 1px solid #E4E7ED;"><td class="c1">业务场景</td><td>四种（登录、绑号、换号、验证）</td></tr>
      <tr><td class="c1">主题界面</td><td>两种（日间、夜间）</td></tr>
      <tr><td class="c1">放大显示</td><td>两种（标准、放大）</td></tr>
    </table>
    <p style="margin-top: 25px">使用方式类似：对于网站应用，通过授权页的query参数设置；对于移动应用，通过sdk传参设置。下面以网站和Android为例，讲解所有自定义选项，iOS使用方式和Android类似，不再赘述。</p>
    <h2 id="scenario">业务场景</h2>
    <p>提供手机号登录（默认）、三方登录绑定手机、更换手机号和通用验证场景，通过scenario设置，分别为login、bind、change和auth，以绑号为例：</p>
    <el-tabs>
      <el-tab-pane label="网站">
        <pre>https://my.onlyid.net/auth?client_id=...&redirect_uri=...&scenario=bind</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, null, null, "bind");</pre>
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
        <pre>https://my.onlyid.net/auth?client_id=...&redirect_uri=...&theme_dark=true</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, true, null);</pre>
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
        <pre>https://my.onlyid.net/auth?client_id=...&redirect_uri=...&view_zoomed=true</pre>
      </el-tab-pane>
      <el-tab-pane label="Android">
        <pre>OnlyID.auth(this, CLIENT_ID, null, this, null, true);</pre>
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
    border-bottom: 1px solid #E4E7ED;
  }
  table tr:hover {
    background-color: #f7f8f9;
  }
</style>
