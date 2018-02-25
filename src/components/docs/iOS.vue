<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <p>SDK地址：</p>
    <pre><a href="https://gitee.com/lltb/onlyid-sdk-ios" target="_blank">https://gitee.com/lltb/onlyid-sdk-ios</a></pre>
    <p>开源示例：</p>
    <pre><a href="https://gitee.com/lltb/sos-ios" target="_blank">https://gitee.com/lltb/sos-ios</a>
<a href="https://gitee.com/lltb/sos-backend">https://gitee.com/lltb/sos-backend</a></pre>
    <!--<p>* 可在App Store搜索“一键呼救”体验。</p>-->

    <h2>1. 集成SDK</h2>
    <el-tabs class="docs-ios-tabs">
      <el-tab-pane label="CocoaPods">
        <p>在Podfile添加：</p>
        <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git',
  :tag => '1.0.5'</pre>
        <p>集成SDK。</p>
      </el-tab-pane>
      <el-tab-pane label="源码">
        <p>直接<a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a>AuthViewController.swift和OnlyID_SDK.swift，添加到您的项目。</p>
      </el-tab-pane>
    </el-tabs>

    <h2>2. 获取code</h2>
    <el-tabs class="docs-ios-tabs">
      <el-tab-pane label="Swift">
        <pre>import OnlyID_SDK

class LoginViewController: UIViewController, AuthDelegate {
    let clientId = "您的client id"

    @IBAction func login(_ sender: Any) {
        OnlyID.auth(clientId, delegate: self)
    }

    func didReceiveAuthResponse(authResponse: AuthResponse) {
        if authResponse.code == .cancel {
            // 用户取消
        }
        else if authResponse.code == .networkErr {
            // 网络错误
        }
        else {
            // 成功 code在authResponse.authCode
        }
    }
}</pre>
      </el-tab-pane>
      <el-tab-pane label="Objective-C">
        <p>LoginViewController.h：</p>
        <pre>#import &lt;OnlyID_SDK/OnlyID_SDK-Swift.h&gt;

@interface ViewController : UIViewController &lt;AuthDelegate&gt;
@end</pre>
        <p>LoginViewController.m：</p>
        <pre>#import "LoginViewController.h"
#import &lt;OnlyID_SDK/OnlyID_SDK-Swift.h&gt;

@interface LoginViewController ()
@end

@implementation LoginViewController

- (IBAction)login:(id)sender {
    [OnlyID auth:@"您的client id" state:@"123" delegate:self];
}

- (void)didReceiveAuthResponseWithAuthResponse:(AuthResponse *)authResponse {
    if (authResponse.code == ErrCodeCancel) {
        // 用户取消
    }
    else if (authResponse.code == ErrCodeNetworkErr) {
        // 网络错误
    }
    else {
        // 成功 code在authResponse.authCode
    }
}
@end
</pre>
        <p>* 如果您不知state是什么，可默认传123</p>
      </el-tab-pane>
    </el-tabs>

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
    name: 'Docs-iOS',
    data () {
      return {
        msg: 'iOS'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-size: 20px;
    margin-top: 50px;
  }
  pre {
    padding: 10px;
    background-color: #f7f7f7;
  }
  .warn {
    color: #fa5555;
  }
</style>
