<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" width="500px" title="删除client" center>
      <p class="dialog-content">{{ '确认删除 "' + client.name + '" ？' }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="delete1">删除</el-button>
      </span>
    </el-dialog>

    <el-card style="margin-top: 20px; position: relative" shadow="hover" :body-style="{padding: '0px'}">
      <div style="padding: 20px;">
        <el-button icon="el-icon-delete" type="info" circle plain style="position: absolute; right: 10px; top: 10px;" class="delete" @click="dialogVisible = true"></el-button>
        <p style="font-size: 16px; margin: 0">{{ client.name }}</p>
        <el-row style="margin-top: 15px">
          <el-col :span="4">
            <num-tip :num="requestCount" tip="昨日请求量"></num-tip>
          </el-col>
          <el-col :span="4">
            <num-tip :num="authSuccessCount + authFailCount" tip="昨日验证量"></num-tip>
          </el-col>
          <el-col :span="5">
            <num-tip :num="authSuccessCount" tip="昨日成功验证量"></num-tip>
          </el-col>
          <el-col :span="5">
            <num-tip :num="authFailCount" tip="昨日防御验证量"></num-tip>
          </el-col>
          <el-col :span="2" :offset="1">
            <router-link :to="'/console/analytics/' + client._id"><el-button circle type="danger" plain><i class="iconfont">&#xe9d0;</i></el-button></router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="'/console/settings/' + client._id"><el-button icon="el-icon-setting" type="primary" size="medium" round plain>管理</el-button></router-link>
          </el-col>
        </el-row>
      </div>
      <p style="margin: 0; background-color: #F2F6FC; padding: 8px 20px; color: #606266">
        <span style="width: 320px; display: inline-block">client id : {{ client._id }}</span>
        client secret : {{ client.secret }}
      </p>
    </el-card>
  </div>
</template>

<script>
import NumTip from './NumTip'

export default {
  components: {
    NumTip
  },
  props: ['client'],
  data () {
    return {
      dialogVisible: false,
      requestCount: 0,
      authSuccessCount: 0,
      authFailCount: 0
    }
  },
  methods: {
    async delete1 () {
      try {
        await this.$axios.delete('/clients/' + this.client._id)
        this.dialogVisible = false
        this.$emit('deleted')
      } catch (err) {
        console.error(err)
      }
    }
  },
  created () {
    for (const s of this.client.statsYesterday) {
      switch (s.type) {
        case 'request':
          this.requestCount += s.count
          break
        default:
          if (s.success) {
            this.authSuccessCount += s.count
          } else {
            this.authFailCount += s.count
          }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-button.is-circle {
    padding: 5px;
  }
  .delete {
    visibility: hidden;
  }
  .el-card:hover .delete {
    visibility: visible;
  }
</style>
