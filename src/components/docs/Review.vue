<template>
  <div>
    <h1>审核制度</h1>
    <h2>前言</h2>
    <p>你的app/网站需要审核，才可实际上线使用唯ID的手机号验证服务。</p>
    <p>我们深知你希望尽快上线，因此我们实行“后审核”制度。先上线，再审核，让你无感接入唯ID。</p>
    <p>未审核和通过审核效果图对比：</p>
    <div class="docs-img-div">
      <img src="../../assets/review-dev.png" width="256" class="docs-img"/>
      <p>开发中，未审核</p>
    </div>
    <div class="docs-img-div">
      <img src="../../assets/review-approved.png" width="256" class="docs-img"/>
      <p>审核已通过</p>
    </div>
    <h2>“后审核”制度</h2>
    <p>在你的app/网站开发完成后，你可提交上线审核。为了你的业务正常开展，该client会立即对用户“表现为”审核通过，然后唯ID客服再审核。</p>
    <p>该模式整体流程为：</p>
    <ol class="docs-ol">
      <li>提交审核后，client会进入【审核中】状态，授权页清除【开发中】字样，对外表现和审核通过无异。同时，实际的审核工作会在5个工作日（节假日顺延）内完成。</li>
      <li>根据客服的审核，可能有两种结果：
        <ul>
          <li>审核未通过，client会进入【审核未通过】状态，在授权页提示用户存在风险。此时，你必须按审核未通过原因整改你的app/网站，再次提交审核。</li>
          <li>审核顺利通过，client进入【审核通过】状态。</li>
        </ul>
      </li>
    </ol>
    <p>未通过和通过审核效果图对比：</p>
    <div class="docs-img-div">
      <img src="../../assets/review-rejected.png" width="256" class="docs-img"/>
      <p>审核未通过</p>
    </div>
    <div class="docs-img-div">
      <img src="../../assets/review-approved.png" width="256" class="docs-img"/>
      <p>审核已通过</p>
    </div>
    <p>由上可见，“后审核”制度可让绝大部分正常、合法合规的client快速上线；同时，对于极少数恶意、违法违规的client，及时封堵在上线初期。是唯ID团队在长期的实践中，在便利性和安全性间取得的平衡。</p>
    <h2>审核指南</h2>
    <h3>前置要求</h3>
    <p>在提交上线审核前，须满足以下条件。请自行检查你的app/网站：</p>
    <ol class="docs-ol">
      <li>主体内容基本完善。可清晰识别client的主要功能、经营内容。</li>
      <li>已上线可正常使用。app可在应用商店正常搜索、下载、使用；网站须保持80端口可正常访问。
        <ul>
          <li>iOS的应用商店为App Store。Android目前我们认可 <a href="http://dev.360.cn/">360手机助手</a> 和 <a href="https://dev.mi.com/console/">小米应用商店</a> ，请保证在任一家可正常搜索下载。</li>
          <li>如你的app/网站不适宜开放公众使用，如企业、政府或其他组织的内部系统，请联系客户经理单独处理。</li>
        </ul>
      </li>
    </ol>
    <p>如你的app/网站不满足上述任一条件，请勿提交上线审核，以免浪费客服精力。</p>
    <h3>审核原则</h3>
    <p>唯ID致力于打造开放、统一的平台，所以一直秉承宽松的审核政策。目前我们的审核原则是：</p>
    <ol class="docs-ol">
      <li>必须遵守现行中国法律</li>
      <li>不得侵犯其他用户、第三方（包括唯ID）的合法权益</li>
    </ol>
    <p>对于所有现行审核内容未有覆盖情况，均以此原则判定client是否合法合规可通过审核。</p>
    <h3>审核内容</h3>
    <p>基于以上原则，如你的app/网站有以下任一行为，一律拒绝通过审核：</p>
    <ol class="docs-ol">
      <li>违反宪法或法律法规规定的；</li>
      <li>危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</li>
      <li>损害国家荣誉和利益的，损害公共利益的；</li>
      <li>煽动民族仇恨、民族歧视，破坏民族团结的；</li>
      <li>破坏国家宗教政策，宣扬邪教和封建迷信的；</li>
      <li>散布谣言，扰乱社会秩序，破坏社会稳定的；</li>
      <li>散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</li>
      <li>侮辱或者诽谤他人，侵害他人合法权益的；</li>
      <li>含有法律、行政法规禁止的其他内容的；</li>
      <li>有歧义，误导用户或侵犯其他用户、第三方合法权益的，包括但不限于：侵权，冒充其他公司品牌虚假宣传，非唯ID官方但client名称包含“唯ID” “OnlyID”等；</li>
    </ol>
    <h3>不审核内容</h3>
    <p>唯ID目前只审核client是否合法合规，一般不涉及内容本身。你的app/网站功能是否完善、界面是否美观、用户体验是否友好、是否有广告等，均不会对审核造成影响。</p>
    <h2>常见问题</h2>
    <p>审核相关的常见问题统一见 <router-link to="/docs/faq#review">审核相关</router-link></p>
  </div>
</template>

<script>
import Notice from './Note'

export default {
  components: {
    Notice
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
