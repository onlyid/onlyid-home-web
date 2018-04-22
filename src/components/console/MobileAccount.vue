<template>
  <div>
    <div v-if="!isShowAnnouncement" style="margin-top: 200px">
      <p style="text-align: center; " class="note">因业务调整，手机账号服务将于2018年4月暂停运营，具体重启时间待定，详情请查阅
        <el-button type="text" @click="isShowAnnouncement = true">暂停运营公告</el-button>
      </p>
    </div>
    <div style="width: 700px;" class="section" v-else>
      <div style="text-align: center;">
        <el-tag style="font-size: 18px" type="info">暂停运营公告</el-tag>
      </div>
      <div id="announcement">
        <p style="font-size: 18px; text-align: center">关于手机账号服务暂停运营的公告</p>
        <div>
          <p>尊敬的客户：</p>
          <p>唯ID的手机账号服务已于2018年1月升级为手机号验证服务，并拆分公有云和专有云（大客户方案）两种部署模式。</p>
          <p>为了向您提供更为优质便捷高效的服务和体验，我们将于2018年4月暂停运营手机账号服务。</p>
          <p>原存量客户迁移、升级至手机号验证服务的专有云（大客户方案），可<span>免费使用一年，一年后续费价格按官网统一标准</span>，具体迁移、升级完成时间以官网通知为准，敬请关注。</p>
          <p>如您有任何疑问，敬请垂询客户经理。</p>
          <p>特此公告。</p>
          <p style="text-align: right">—— 唯ID团队 2018年1月</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShowAnnouncement: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #announcement {
    margin-top: 30px;
    background-image: url("../../assets/mask.png");
    padding: 10px 15px 15px;
    border-top: dashed 1px #7f7f7f;
  }
  #announcement span {
    color: #F56C6C;
  }
</style>
