<template>
  <div>
    <h1>审核</h1>
    <h2>前言</h2>
    <p>你的应用需要审核，才可上线使用唯ID的手机账号。</p>
    <p>我们深知你希望尽快上线，因此我们采用后审核方式。先上线，再审核，让你无感接入唯ID。</p>
    <h2>后审核</h2>
    <p>整体流程：</p>
    <ol class="docs-ol">
      <li>提交审核后，应用进入【审核中】状态，授权页清除【开发中】字样，对外表现和审核通过无异。</li>
      <li>5个工作日内完成审核，可能有两种结果：
        <ul>
          <li>审核未通过，应用进入【审核未通过】状态。你必须整改你的应用，再次提交审核。</li>
          <li>审核顺利通过，应用进入【审核通过】状态。</li>
        </ul>
      </li>
    </ol>
    <div class="docs-img-div">
      <img src="../../assets/review-rejected.png" width="256" class="docs-img"/>
      <p>审核未通过</p>
    </div>
    <div class="docs-img-div">
      <img src="../../assets/review-approved.png" width="256" class="docs-img"/>
      <p>审核已通过</p>
    </div>
    <p>“后审核”让大部分合法合规的应用快速上线；同时，对于少数违法违规的应用，及时封堵在上线初期。</p>
    <note type="info">根据统计，审核不通过的概率小于0.1%。你不用担心审核不通过，影响业务开展。</note>
    <h2>审核指南</h2>
    <h3>前置要求</h3>
    <p>提交上线审核前，须满足以下条件。</p>
    <ol class="docs-ol">
      <li>主体内容基本完善。可清晰识别应用的主要功能、经营内容。</li>
      <li>已上线可正常使用。移动应用可在应用商店正常搜索、下载、使用；网站应用须保持80端口可正常访问。</li>
    </ol>
    <note type="info">如你的应用不适宜开放公众使用，如企业、政府的内部系统，请联系客户经理单独处理。</note>
    <h3>审核内容</h3>
    <p>有以下任一行为，一律拒绝通过审核：</p>
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
      <li>有歧义，误导用户或侵犯其他用户、第三方合法权益的，包括但不限于：侵权，冒充其他公司品牌虚假宣传，非唯ID官方但应用名称包含“唯ID” “OnlyID”等；</li>
    </ol>
    <h3>不审核内容</h3>
    <p>我们只审核应用是否合法合规，不涉及内容本身。功能是否完善、界面是否美观，均不对审核造成影响。</p>
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
