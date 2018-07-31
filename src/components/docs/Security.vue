<template>
  <div>
    <h1>安全性</h1>
    <h2>前言</h2>
    <p>我们严肃对待安全问题，所有代码都经过检视，每个设计均有安全性考虑。本节涵盖唯ID本身的安全措施、你可进一步采取的安全措施以及如何报告安全问题。</p>
    <h2>唯ID的安全保障</h2>
    <p>我们采用诸多安全措施保证开发者和用户的数据安全和交互安全。包括：</p>
    <h3>基于OAuth 2.0构建</h3>
    <p>OAuth 2.0已经成为授权的工业级标准，其三段式授权可在简化开发者工作的同时充分保证安全性。唯ID的手机账号是基于OAuth 2.0构建的授权验证系统，可以让用户安全地在第三方app/网站验证手机号。</p>
    <h3>全站HTTPS</h3>
    <p>在网络传输层面，全站采用HTTPS保证数据安全。</p>
    <h3>密码安全存储</h3>
    <p>对于密码等敏感数据，采用符合业界标准的方式处理和存储。包括：</p>
    <ul class="docs-ol">
      <li>不允许明文密码等敏感数据落地到硬盘。</li>
      <li>采用基于Blowfish加密算法改进的密码hash算法（而非通用的MD5、SHA1等）加密数据。</li>
      <li>引入工作因子（work factor），确保密码的安全性不会随着摩尔定律的发展而降低。</li>
      <li>加盐以防止彩虹表攻击。</li>
    </ul>
    <h3>云架构</h3>
    <p>应用云架构，面对突发的性能需求，可以提供不间断业务的快速扩容能力。</p>
    <h3>其他</h3>
    <p>团队还包括曾在知名银行IT中心从事多年风控、反欺诈工作的安全专家，为安全保驾护航。</p>
    <h2>你可采取的安全措施</h2>
    <p>安全是一个整体问题，必须参与系统的各方协调配合，以下是你可进一步采取的安全措施。</p>
    <h3 id="server-redirect">服务端中转</h3>
    <p>对于Android和iOS app，授权可通过以下两种方式实现：</p>
    <ul class="docs-ol">
      <li>客户端Token（默认）</li>
      <li>使用authorization code通过服务端中转进行验证</li>
    </ul>
    <note type="info">Web接入仅支持使用authorization code进行验证。</note>
    <p>如果你在为app接入唯ID，启用服务端中转流程是你可采取的最简单的提高安全性的措施。</p>
    <p>当启用了服务端中转流程后，你的app（验证成功后）就会收到一条短时效authorization code，并随后安全传递至你的服务器。然后你的服务器就可以使用此authorization code来检索access token，以便将access token用于API调用。提供这一流程的目的在于降低出现以下情况的风险：攻击者试图假冒你的app或以其他方式拦截长时效的access token。由你决定你的风险模式和数据价值是否有必要采取适当的额外步骤来启用此流程。同时也由你负责确保app和你的服务端之间保持适当级别的安全性。</p>
    <p>要启用服务端中转流程，请查阅 <router-link to="/docs/custom#server-redirect">验证方式（仅app）</router-link> 。</p>
    <h3>设置服务端IP</h3>
    <p>设置服务端IP后，仅列表内IP可调用唯ID RESTful API，其他IP调用会返回未授权错误。</p>
    <p>要设置服务端IP，请跳转 控制台 / 管理设置 / 高级设置 / 服务端IP。</p>
    <h3>安全存储client secret和access token</h3>
    <p>client secret相当于你的app/网站在唯ID的密码，泄露后可能导致用户数据泄露。存储在客户端，可能被反编译恶意窃取。access token为用户授权第三方应用发起接口调用的凭证，泄露后的风险同上。我们建议：</p>
    <ol class="docs-ol">
      <li>启用服务端中转流程，将secret放在服务端，由服务端中转接口调用请求。</li>
      <li>勿将token落地到硬盘（或手机闪存）。</li>
      <li>使用第三方代码托管服务时，勿将secret提交到代码库。</li>
    </ol>
    <h2>报告安全问题</h2>
    <p>在现代软件系统的构建过程中，安全性漏洞无可避免。</p>
    <p>为了给我们充足的时间来响应并升级系统，我们建议你私下报告安全问题。请联系技术支持，提供问题详情以及重现步骤，我们会尽快响应。如果你不想联系技术支持，可发邮件到help@onlyid.net，也请提供问题的详情以及重现步骤。</p>
    <p>修复安全问题的优先级高于修复其他bug。如果一个版本修复了严重的安全问题，我们会标记其为“紧急”，并通知开发者升级。</p>
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
