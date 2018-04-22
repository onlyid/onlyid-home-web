<template>
  <div>
    <el-card style="margin-top: 20px; padding-bottom: 30px" shadow="never">
      <p style="font-size: 20px; text-align: center; margin-top: 30px">仅需三步，轻松部署验证服务</p>
      <div style="margin-top: 50px">
        <div class="step" style="margin-left: 70px">
          <img src="../../assets/wenjian.svg"/>
          <p class="step-num">1</p>
          <span class="step-tip">新建client</span>
        </div>
        <div class="step">
          <img src="../../assets/banshou.svg"/>
          <p class="step-num">2</p>
          <span class="step-tip">集成SDK（仅app）</span>
        </div>
        <div class="step">
          <img src="../../assets/xiaohuojian.svg"/>
          <p class="step-num">3</p>
          <span class="step-tip">部署验证</span>
        </div>
        <div style="clear: both"></div>
      </div>
      <div style="text-align: center; margin-top: 40px">
        <p style="font-size: 18px">当前没有client，请添加</p>
        <router-link to="/console/clients/create"><el-button type="primary" icon="el-icon-plus">新建client</el-button></router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .step {
    text-align: center;
    float: left;
    margin-left: 150px;
  }
  .step img {
    width: 70px;
  }
  .step-num {
    background-color: #78c6ec;
    color: white;
    border-radius: 11px;
    padding: 1px;
    width: 20px;
    height: 20px;
    margin: 30px auto 15px;
    text-align: center;
  }
  .step-tip {
    color: #289acc;
  }
</style>
