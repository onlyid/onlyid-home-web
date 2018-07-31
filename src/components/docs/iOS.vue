<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>iOS快速接入</h1>
    <h2 id="step1">1. 集成SDK</h2>
    <p>推荐通过CocoaPods集成。</p>
    <p>在项目的Podfile添加：</p>
    <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git'</pre>
    <p>集成SDK。</p>
    <p>或 <a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a>
      源码文件：AuthViewController.swift和OnlyID_SDK.swift，添加到项目。</p>

    <h2>2. 获取access token</h2>
    <p>用户需要登录时，使用OnlyID.auth方法发起请求。Swift代码示例：</p>
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
    <p>Objective-C遵循调用Swift通用流程，引入Xcode生成头文件，其他类似，不再赘述。</p>
    <pre>#import &lt;OnlyID_SDK/OnlyID_SDK-Swift.h&gt;</pre>
    <p>验证成功后，access token保存在authResponse的accessToken属性。</p>
    <note type="info">access token的有效期为1个小时</note>
    <h2>3. 获取用户信息</h2>
    <note>获取用户信息建议在服务端进行，因为服务端不应该信任客户端“自称”从唯ID获取的用户信息。</note>
    <p>得到access token后，GET方式请求：</p>
    <pre>https://my.onlyid.net/user?access_token=获取到的access token</pre>
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
    <h2>结语</h2>
    <p>你已完成iOS app的接入，接下来还可以在下载中心查阅 <router-link to="/downloads#demo">示例Demo</router-link>，以加深理解。</p>
  </div>
</template>

<script>
  import Note from './Note'

  export default {
    components: {Note},
    data () {
      return {
        msg: 'iOS'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../assets/docs.css"></style>
