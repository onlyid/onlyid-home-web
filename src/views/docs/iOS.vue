<template>
  <div>
    <!-- 修改内容时，检查是否需要改另外两个文档 -->
    <h1>iOS快速接入</h1>
      <note>
          因之前维护iOS的志愿者已不再参与，iOS SDK和示例Demo现在处于无人维护状态，如果你有兴趣有时间参与进来，欢迎
          <el-popover placement="left" trigger="hover">
              <img src="@/assets/wechat-155.jpeg" width="215"/><span slot="reference" style="text-decoration: underline">联系我</span>
          </el-popover>。
      </note>
    <h2 id="step1">1. 集成SDK</h2>
    <p>推荐通过CocoaPods集成。</p>
    <p>在项目的Podfile添加：</p>
    <pre>pod 'OnlyID_SDK', :git => 'https://gitee.com/lltb/onlyid-sdk-ios.git'</pre>
    <p>集成SDK。</p>
    <p>或 <a href="https://gitee.com/lltb/onlyid-sdk-ios/tree/master/OnlyID_SDK" target="_blank">下载</a>
      源码文件：AuthViewController.swift和OnlyID.swift，添加到项目。</p>

    <h2>2. 获取authorization code</h2>
    <p>用户需要登录时，使用OnlyID.auth方法发起请求。代码示例：</p>
    <pre>import OnlyID_SDK

class ViewController: UIViewController, AuthDelegate {

    // 发起验证请求
    @IBAction func login(_ sender: Any) {
        OnlyID.auth("你的client id", delegate: self)
    }

    // 返回结果
    func didReceiveAuthResp(errCode: ErrCode, code: String?, state: String?) {
        if errCode == .cancel { // 用户取消 }
        else if errCode == .networkErr { // 网络错误 }
        else { // 成功 }
    }
}</pre>
    <p>Objective-C遵循调用Swift通用流程，引入Xcode生成头文件，其他类似，不再赘述。代码示例：</p>
    <pre>#import &lt;OnlyID_SDK/OnlyID_SDK-Swift.h&gt;

...

// 发起验证请求
- (IBAction)login:(id)sender {
    [OnlyID auth:@"你的client id" delegate:self state:@"123" themeDark:NO
        viewZoomed:NO scene: @"login"];
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
      <p>你已完成接入，接下来还可以查阅 <a href="https://github.com/lltb/onlyid-demo-ios" target="_blank">示例Demo</a>，以加深理解。</p>
  </div>
</template>

<script>
import Note from '../../components/docs/Note'

export default {
  components: { Note },
  data () {
    return {
      msg: 'iOS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
