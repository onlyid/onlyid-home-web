<template>
  <div id="content">
    <el-dialog
      title="提交申请"
      :visible.sync="dialogVisible"
      width="500px"
      center>
      <span>已提交，我们会很快联系您，请耐心等待。</span>
      <span slot="footer">
        <el-button type="primary" @click="dialogVisible = false">好的</el-button>
      </span>
    </el-dialog>

    <p style="font-size: 20px; border-bottom: solid 1px #EBEEF5; padding-bottom: 20px">您尚未开通专有云（大客户方案），您可以</p>
    <p style="font-size: 16px;">点击按钮提交开通申请后，我们将通过您的预留信息联系您</p>
    <el-row>
      <el-col :span="6">手机号</el-col>
      <el-col :span="18">{{mobile}}</el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="6">邮箱</el-col>
      <el-col :span="18">{{email}}</el-col>
    </el-row>
    <el-button style="margin-top: 20px" type="primary" @click="apply">提交开通申请</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      const developer = sessionStorage.getObj('developer')

      return {
        email: developer.email,
        mobile: developer.user.mobile,
        dialogVisible: false
      }
    },
    methods: {
      async apply () {
        try {
          await this.$axios.post('/enterprise/apply', {
            developer: {id: sessionStorage.getObj('developer').id}
          })
          this.dialogVisible = true
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    width: 500px;
    margin: 50px auto 0;
  }
</style>
