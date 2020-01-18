<template>
  <div>
    <div class="section content"
         style="padding-left: 2em; margin-top: 60px;">
      <p>欢迎来到唯ID，我是项目发起人 ltb。前招行Java工程师，现为平安高级Web开发工程师。</p>
      <p>一直以来，人们习惯在每个用到的应用都注册一个账号，设置单独的密码。这导致了一些问题：</p>
      <ol>
        <li>账号密码众多，难以记忆和管理，如果都使用同个账号密码，一旦密码泄露，全部应用都要改一遍，非常麻烦。</li>
        <li>小众应用更难吸引用户注册，头部应用（微信等）占据更多流量，长尾效应消失，互联网逐渐远离开放、自由精神。</li>
      </ol>
      <p>我一直坚信：<b>账号和言论自由、互联网安全一样，是人们的基本权利</b>，所以我在<b>2017年6月12日</b>发起了唯ID项目。唯ID是通用的账号和认证平台，用户只需要在一个接入唯ID的应用注册，即可在所有应用使用。</p>
      <h3>唯ID的特点</h3>
      <ol>
        <li><b>开源、自由</b>，自豪地采用GPLv3协议，托管在
          <a href="https://github.com/lltb"
             target="_blank">github</a> ，所有人可参与贡献，不受大公司控制。</li>
        <li>稳定、可靠，唯ID作为账号系统，对接入的应用非常重要。所以在开发唯ID时，我们始终把安全、稳定、可靠放在首位。</li>
        <li>路线图公开，和其他三方登录不同，唯ID的开发路线图公开，所有人可参与讨论并影响唯ID的未来。</li>
        <li>尽量使用开源技术，同时不拒绝成熟的商业技术。前者如 Spring、Vue等；后者如阿里云 ECS、腾讯云短信等。</li>
      </ol>
      <h3>唯ID和自有登录对比</h3>
      <ol>
        <li><b>唯ID的开发初衷就是替代应用的自有登录</b>。</li>
        <li>用户只需要在一个接入唯ID的应用注册，即可在所有应用使用。</li>
        <li>唯ID会包括一些基础的公开信息，如手机号、邮箱、昵称、头像等。</li>
        <li>用户端有app，一站式管理用户信息、登录设备、授权应用等。</li>
        <li>开发者控制台有完善的应用管理、用户管理、数据统计等功能。</li>
        <li>集成的方案，不需要开发者关注实现细节，<b>也不用承担高额验证短信费用</b>。</li>
      </ol>
      <p class="note">* 上面提到的一些功能可能仍在开发中。</p>
      <h3>和三方登录（微信、微博）的对比</h3>
      <ol>
        <li>和微信、微博只能作为辅助登录方式不同，<b>你可以放心的把唯ID作为你的应用唯一的登录方式（所以叫唯ID ^_^）</b>。</li>
        <li>我们会一直维护下去，不会出现依赖的三方登录（如人人网账号）没落的问题。</li>
        <li>唯ID返回用户真实登录账号，而不只是平台绑定的open id，更加开放，可自由接入或迁出。</li>
        <li>唯ID是中立的平台，和你的应用没有竞争关系，不会出现
          <a href="http://finance.eastmoney.com/a/201901281035452049.html"
             target="_blank">抖音不能用微信登录</a> 的破事。</li>
      </ol>
      <h3>捐赠</h3>
      <p>开发和维护唯ID几乎占用了我全部的业余时间，如果你觉得有帮助，就请我吃顿快餐吧~</p>
      <div class="donate">
        <img src="@/assets/alipay.jpg"
             width="250" />
        <img src="@/assets/wechat-pay.jpg"
             width="250"
             style="margin-left: 100px" />
      </div>
      <p style="text-align: right; font-size: 14px; margin-top: 2em;">2019年1月29日</p>
    </div>

    <div id="banner">关于唯ID</div>
    <div class="section">
      <p class="section-title">团队介绍</p>
      <p class="subsection-title">核心团队</p>
      <p>核心团队成员直接参与项目的贡献，长期维护唯ID的各个子项目。</p>
      <div style="display: flex; justify-content: space-between">
        <team-member name1="ltb"
                     in-charge-of="项目发起人，负责唯ID所有子项目开发、协调、管理"
                     good-at="js & java；web前端 & android & 后台">
          <img src="@/assets/team-member-ltb.png">
        </team-member>
      </div>
      <p class="subsection-title">社区伙伴</p>
      <p>这些社区的小伙伴，经常关注唯ID的发展，提过很多宝贵的意见，有些还贡献过代码，真的很感谢他们。</p>
      <div style="display: flex; justify-content: space-between">
        <team-member name1="zy"
                     in-charge-of="特别顾问"
                     good-at="js全栈 & haskell">
          <img src="@/assets/team-member-zy.jpg">
        </team-member>
      </div>
    </div>
    <div class="section"
         id="join">
      <p class="section-title">加入我们</p>
      <p style="margin-top: 40px;">如你所见，唯ID现在还处于非常原始的阶段，需要你的帮助！</p>
      <p>不论是贡献代码、报告bug还是产品设计、美工UI又或者只是帮忙宣传、提一些简单意见，都非常欢迎，下方有我的联系方式，期待认识你 ^_^</p>
    </div>
  </div>
</template>

<script>
import TeamMember from '@/components/about/TeamMember'

export default {
  components: { TeamMember }
}
</script>

<style scoped>
.subsection-title {
  margin-top: 40px;
  font-size: 21px;
}
.content h3 {
  font-size: 18px;
  font-weight: normal;
  margin-top: 2em;
}
.content li + li {
  margin-top: 4px;
}
.donate {
  display: flex;
  justify-content: center;
  opacity: 0.9;
}
</style>
