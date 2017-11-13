<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <p>* 以下步骤1由前端发起；<span class="warn">步骤2、3和4应在后台进行，以防泄露您的client secret和token。</span></p>
    <h2 style="margin-top: 0px">1. 获取code</h2>
    <p>需要登录时，GET方式请求：</p>
    <pre>https://oauth.onlyid.net/authorize?response_type=code&client_id=您的client id
&state=123&redirect_uri=您的redirect uri</pre>
    <p>获取code。</p>
    <p>失败示例：</p>
    <pre>{
  "error": "invalid_client",
  "error_description": "Invalid client: client credentials are invalid"
}</pre>
    <p>唯一ID会引导用户登录，然后带上code GET方式请求您的redirect uri：</p>
    <pre>您的redirect uri?code=xxxx&state=123</pre>
    <p>* 如果您不知state是什么，可默认传123</p>

    <h2>2. 获取token</h2>
    <p>得到code后，POST方式请求：</p>
    <pre>https://oauth.onlyid.net/token</pre>
    <p>设置Content-Type为application/x-www-form-urlencoded，带上参数：</p>
    <pre>client_id=您的client id
client_secret=您的client secret
grant_type=authorization_code
code=获取到的code
redirect_uri=您的redirect uri</pre>
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

    <h2>3. 获取用户信息</h2>
    <p>得到token后，GET方式请求：</p>
    <pre>https://oauth.onlyid.net/user</pre>
    <p>设置首部字段：</p>
    <pre>Authorization: Bearer（空格）获取到的access token</pre>
    <p>获取用户信息。</p>
    <p>成功示例：</p>
    <pre>{
    "headImgUrl": "https://onlyid.net/headimg/599fd5af4ce32128b7bfd771.png",
    "nickname": "ltb4",
    "sex": "",  // 可能为"male","female"或""
    "mobile": "18588237889",
    "id": "599fd5af4ce32128b7bfd771"
}</pre>
    <p>失败示例：</p>
    <pre>{
    "error": "invalid_token",
    "error_description": "Invalid token: access token is invalid"
}</pre>
    <p>* <span class="warn">手机号和id是用户隐私，请注意保密。</span></p>

    <h2>4.（附加）保持登录</h2>
    <p>如果需要保持用户登录，可在用户每天第一次访问您的网站时，通过refresh token获取token，再获取最新用户信息。</p>
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
    name: 'DocsWeb',
    data () {
      return {
        msg: 'Web'
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
