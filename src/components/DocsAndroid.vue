<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <p>SDK地址：</p>
    <pre><a href="https://gitee.com/lltb/onlyid-sdk-android" target="_blank">https://gitee.com/lltb/onlyid-sdk-android</a></pre>
    <p>开源示例：</p>
    <pre><a href="https://gitee.com/lltb/sos-android" target="_blank">https://gitee.com/lltb/sos-android</a>
<a href="https://gitee.com/lltb/sos-backend" target="_blank">https://gitee.com/lltb/sos-backend</a></pre>
    <p>* 下载“<a href="https://static.onlyid.net/downloads/app-release.apk">一键呼救</a>”体验。</p>

    <h2>1. 集成SDK</h2>
    <p>SDK托管在jcenter，在app模块的build.gradle添加：</p>
    <pre>compile 'net.onlyid:onlyid-sdk:[1,2)'</pre>
    <p>集成SDK。</p>

    <h2>2. 获取code</h2>
    <pre>import net.onlyid.onlyid_sdk.OnlyID;

LoginActivity extends Activity implements OnlyID.AuthListener {
    static final String CLIENT_ID = "您的client id";

    // 发起登录请求
    public void login(View view) {
      OnlyID.auth(this, CLIENT_ID, this);
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
            // 成功 code在authResponse.authCode
        }
    }
}
</pre>

    <p style="margin-top: 50px">* <span class="warn">以下步骤3、4和5建议在后台进行，以防泄露您的client secret和token。</span></p>
    <h2 style="margin-top: 0px">3. 获取token</h2>
    <p>得到code后，POST方式请求：</p>
    <pre>https://oauth.onlyid.net/token</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=您的client id
client_secret=您的client secret
grant_type=authorization_code
code=获取到的code
redirect_uri=https://oauth.onlyid.net/default_redirect_uri</pre>
    <p>获取token。</p>
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
    <p>* access token有效期1个小时，refresh token有效期3个月。</p>

    <h2>4. 获取用户信息</h2>
    <p>得到token后，GET方式请求：</p>
    <pre>https://oauth.onlyid.net/user?access_token=获取到的access token</pre>
    <p>获取用户信息。</p>
    <p>成功示例：</p>
    <pre>{
    "headImgUrl": "https://onlyid.net/head-img/599fd5af4ce32128b7bfd771.png",
    "nickname": "ltb4",
    "sex": "",  // 可能为"male","female"或"unknown"
    "mobile": "18588237889",
    "id": "599fd5af4ce32128b7bfd771"
}</pre>
    <p>失败示例：</p>
    <pre>{
    "error": "invalid_token",
    "error_description": "Invalid token: access token is invalid"
}</pre>
    <p>* <span class="warn">手机号和id是用户隐私，请注意保密。</span></p>

    <h2>5. 保持登录</h2>
    <p>用户打开app时，如果已登录，通过refresh token获取token，再获取最新用户信息。</p>
    <p>POST方式请求：</p>
    <pre>https://oauth.onlyid.net/token</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=您的client id
client_secret=您的client secret
grant_type=refresh_token
refresh_token=之前获取到的refresh token</pre>
    <p>得到token后，获取用户信息见步骤4。</p>
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
