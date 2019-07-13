<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>Android快速接入</h1>
    <h2>1. 集成SDK</h2>
    <p>已改用gradle形式，发布到 <a href="https://bintray.com/ltb/maven/onlyid-sdk" target="_blank">JCenter</a> ，请开发者使用gradle来编译、更新SDK。</p>
    <p>在app模块的build.gradle添加：</p>
    <pre>dependencies {
    其他依赖 ...
    implementation 'net.onlyid:onlyid-sdk:+'
}</pre>
    <p>集成SDK。</p>
    <h2>2. 获取authorization code</h2>
    <p>用户需要登录时，使用OnlyID.auth方法发起请求。代码示例：</p>
    <pre>import net.onlyid.onlyid_sdk.OnlyID;

public class MainActivity extends Activity implements OnlyID.AuthListener {

    // 发起验证请求
    public void login(View view) {
        Intent intent = new Intent();
        intent.putExtra("clientId", "你的client id");
        OnlyID.auth(this, intent, this);
    }

    // 返回结果
    public void onAuthResp(OnlyID.ErrCode errCode, String code, String state) {
        if (errCode == OnlyID.ErrCode.CANCEL) { // 用户取消 }
        else if (errCode == OnlyID.ErrCode.NETWORK_ERR) { // 网络错误 }
        else { // 成功 }
    }
}</pre>
    <p>验证成功后，authorization code保存在code属性。</p>
    <h2>3. 获取用户信息</h2>
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
    <p>你已完成接入，接下来还可以查阅 <a href="https://github.com/lltb/onlyid-demo-android" target="_blank">示例Demo</a>，以加深理解。</p>
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
