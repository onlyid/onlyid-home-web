<template>
  <div style="margin-top: 15px;">
    <!-- 当clients为''时 前个判断会为false 也就是未加载好时 优先显示client列表 -->
    <deploy-guide v-if="clients && clients.length === 0"></deploy-guide>
    <template v-else>
      <el-card shadow="hover">
        <el-row type="flex" justify="space-between">
          <el-col :span="4">
            <num-tip tip="验证client数" :num="clients.length"/>
          </el-col>
          <el-col :span="4">
            <num-tip tip="昨日总请求量" :num="requestCount"/>
          </el-col>
          <el-col :span="4">
            <num-tip tip="昨日总验证量" :num="authSuccessCount + authFailCount"/>
          </el-col>
          <el-col :span="4">
            <num-tip tip="昨日总成功验证量" :num="authSuccessCount"/>
          </el-col>
          <el-col :span="4">
            <num-tip tip="昨日总防御验证量" :num="authFailCount"/>
          </el-col>
        </el-row>
      </el-card>
      <div style="margin-top: 20px">
        <el-card header="账号信息" style="width: 48%; float: left; height: 170px" shadow="hover">
          <p style="margin: 0"><i class="material-icons account-icon" style="color: #3b5898;">account_circle</i>开发者账号： {{ developer.user.mobile }}</p>
          <p><i class="el-icon-star-on account-icon" style="color: #E6A23C"></i>已开通： {{ developer.edition === 'standard' ? '公有云' : '专有云' }}</p>
          <p style="margin: 0"><i class="el-icon-date account-icon" style="color: #67C23A"></i>有效期： {{ developerExpires }}
            <router-link to="/console/account#products"><el-button type="text" style="float: right; padding: 0">续费</el-button></router-link></p>
        </el-card>
        <el-card header="订单信息" style="width: 48%; float: right; height: 170px" shadow="hover">
          <el-row style="margin-top: 20px">
            <el-col :span="12">
              <num-tip num="0" tip="待支付订单"></num-tip>
            </el-col>
            <el-col :span="12">
              <num-tip num="0" tip="待使用优惠券"></num-tip>
            </el-col>
          </el-row>
        </el-card>
        <div style="clear: both"></div>
      </div>
      <div style="text-align: right; margin-top: 30px">
        <el-button @click="createClient" type="primary" size="medium" icon="el-icon-plus">新建client</el-button>
      </div>
      <client-stats-yesterday v-for="client in clients" :client="client" :key="client._id" @deleted="refresh"></client-stats-yesterday>
    </template>
  </div>
</template>

<script>
  import NumTip from './NumTip'
  import DeployGuide from './DeployGuide'
  import config from '../../config'
  import moment from 'moment'
  import ClientStatsYesterday from './ClientStatsYesterday'

  export default {
    components: {
      ClientStatsYesterday,
      NumTip,
      DeployGuide
    },
    data () {
      return {
        developer: sessionStorage.getObj('developer'),
        requestCount: 0,
        authSuccessCount: 0,
        authFailCount: 0,
        clients: ''
      }
    },
    methods: {
      view (index) {
        this.$router.push('/console/clients/' + this.clients[index]._id)
      },
      createClient () {
        if (this.clients.length >= config.maxClientCount) {
          this.$message('最多只能创建' + config.maxClientCount + '个client，请升级专有云（大客户方案）')
        } else {
          this.$router.push('/console/clients/create')
        }
      },
      async refresh () {
        try {
          const res = await this.$axios.get('/clients/stats-yesterday')
          this.clients = res.data.clients

          this.requestCount = 0
          this.authSuccessCount = 0
          this.authFailCount = 0
          for (const c of this.clients) {
            for (const s of c.statsYesterday) {
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
        } catch (err) {
          console.error(err)
        }
      }
    },
    created () {
      this.refresh()
    },
    computed: {
      developerExpires () {
        if (new Date(this.developer.expires) < new Date()) {
          return '已过期，请续费'
        }
        return moment(this.developer.expires).format(config.dateFormat)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-card >>> .el-card__header {
    padding: 5px 20px;
    background-color: #F2F6FC;
  }
  .account-icon {
    font-size: 20px;
    vertical-align: text-bottom;
    margin-right: 15px;
  }
</style>
