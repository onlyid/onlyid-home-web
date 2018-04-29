<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>Android快速接入</h1>
    <h2>前言</h2>
    <p>使用我们提供的SDK，快速为你的Android app接入唯ID。</p>
    <note type="info">本节假定你已了解基于OAuth 2.0的系统的交互方式，否则请查阅 <router-link to="/docs/oauth2">OAuth 2.0入门</router-link>。</note>
    <h2>1. 集成SDK</h2>
    <p>已改用gradle形式，发布到 <a href="https://bintray.com/ltb/maven/onlyid-sdk" target="_blank">JCenter</a> ，请开发者使用gradle来编译、更新SDK。</p>
    <p>在app模块的build.gradle添加：</p>
    <pre>dependencies {
    其他依赖 ...
    compile 'net.onlyid:onlyid-sdk:+'
}</pre>
    <p>集成SDK。</p>
    <h2>2. 获取access token</h2>
    <p>需要验证用户手机号时，使用OnlyID.auth方法发起请求，参数列表最后两字段为自定义选项，这里可直接传null。</p>
    <p>代码示例如下：</p>
    <pre>import net.onlyid.onlyid_sdk.OnlyID;

LoginActivity extends Activity implements OnlyID.AuthListener {
    static final String CLIENT_ID = "你的client id", CLIENT_SECRET = "你的client secret";

    // 发起验证请求
    public void auth(View view) {
      OnlyID.auth(this, CLIENT_ID, null, this, CLIENT_SECRET, null, null);
    }

    // 返回结果
    public void onAuthResponse(OnlyID.AuthResponse authResponse) {
        if (authResponse.code == OnlyID.ErrCode.CANCEL) {
            // 用户取消
        }
        else if (authResponse.code == OnlyID.ErrCode.NETWORK_ERR) {
            // 网络错误
        }
        else {
            // 成功
        }
    }
}
</pre>
    <p>验证成功后，access token保存在authResponse的accessToken属性。</p>
    <note type="info">access token的有效期为1个小时</note>
    <h2>3. 获取用户信息</h2>
    <note>获取用户信息建议在服务端进行，因为服务端不应该信任客户端“自称”从唯ID获取的用户信息。</note>
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
    <p>至此，你已完成Android app的接入。</p>
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
