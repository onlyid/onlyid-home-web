<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>iOS快速接入</h1>
    <h2>前言</h2>
    <p>使用我们提供的SDK，快速为你的iOS app接入唯ID。</p>
    <note type="info">本节假定你已了解基于OAuth 2.0的系统的交互方式，否则请查阅 <router-link to="/docs/oauth2">OAuth 2.0入门</router-link>。</note>
    <h2 id="step1">1. 集成SDK</h2>
    <p>推荐通过CocoaPods集成。</p>
    <p>在项目的Podfile添加：</p>
    <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git'</pre>
    <p>集成SDK。</p>
    <p>或 <a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a>
      源码文件（不推荐）：AuthViewController.swift和OnlyID_SDK.swift，添加到你的项目。</p>

    <h2>2. 获取access token</h2>
    <p>需要验证用户手机号时，使用OnlyID.auth方法发起请求。代码示例如下：</p>
    <el-tabs>
      <el-tab-pane label="Swift">
        <pre>import OnlyID_SDK

class LoginViewController: UIViewController, AuthDelegate {
    let clientId = "你的client id", clientSecret = "你的client secret"

    @IBAction func auth(_ sender: Any) {
        OnlyID.auth(clientId, clientSecret: clientSecret, delegate: self)
    }

    func didReceiveAuthResponse(authResponse: AuthResponse) {
        if authResponse.code == .cancel {
            // 用户取消
        }
        else if authResponse.code == .networkErr {
            // 网络错误
        }
        else {
            // 成功
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

- (IBAction)auth:(id)sender {
    [OnlyID auth:@"你的client id" clientSecret:@"你的client secret" state:@"123"
          viewZoomed:NO themeDark:NO delegate:self];
}

- (void)didReceiveAuthResponseWithAuthResponse:(AuthResponse *)authResponse {
    if (authResponse.code == ErrCodeCancel) {
        // 用户取消
    }
    else if (authResponse.code == ErrCodeNetworkErr) {
        // 网络错误
    }
    else {
        // 成功
    }
}
@end
</pre>
        <note type="info">如果你不知state是什么，可默认传123。</note>
      </el-tab-pane>
    </el-tabs>
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
    <p>至此，你已完成iOS app的接入。</p>
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
        msg: 'iOS'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
