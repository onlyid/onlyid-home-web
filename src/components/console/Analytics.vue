<template>
  <div>
    <el-popover
      trigger="hover"
      placement="right"
      ref="popover1">
      请求量：用户请求验证服务的量（以打开授权页为准）<br/>
      验证量：用户实际验证的量（如使用密码、短信验证）
    </el-popover>
    <el-popover
      trigger="hover"
      placement="right"
      ref="popover2">
      成功验证量：用户实际验证成功的量<br/>
      防御验证量：用户实际验证失败的量
    </el-popover>
    <el-dialog
      title="请求和验证量"
      width="500px"
      :fullscreen="true"
      :visible.sync="dialog1Visible"
      center>
      <el-table
        header-cell-class-name="header-cell"
        :data="table1Data"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="date"
          label="日期"
          width="170">
        </el-table-column>
        <el-table-column
          align="center"
          prop="requestCount"
          label="请求量"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="authCount"
          label="验证量">
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
      title="成功验证和防御验证量"
      width="500px"
      :fullscreen="true"
      :visible.sync="dialog2Visible"
      center>
      <el-table
        header-cell-class-name="header-cell"
        :data="table2Data"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="date"
          label="日期"
          width="170">
        </el-table-column>
        <el-table-column
          align="center"
          prop="authSuccessCount"
          label="成功验证量"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="authFailCount"
          label="防御验证量">
        </el-table-column>
      </el-table>
    </el-dialog>

    <span style="font-size: 20px; color: #7f7f7f;">数据统计</span>
    <client-overview style="margin-top: 15px"></client-overview>
    <div style="margin-top: 30px;">
      <el-button @click="dialog1Visible = true" style="float: right" size="medium" type="primary" plain>数据详情</el-button>
      <p style="font-size: 16px; margin-bottom: 4px;">请求和验证量 <el-button icon="el-icon-question" type="text" v-popover:popover1></el-button></p>
      <el-card shadow="never">
        <div id="chart1" style="height:400px;"></div>
      </el-card>
    </div>
    <div style="margin-top: 30px;">
      <el-button @click="dialog2Visible = true" style="float: right" size="medium" type="primary" plain>数据详情</el-button>
      <p style="font-size: 16px; margin-top: 30px; margin-bottom: 4px;">成功验证和防御验证量 <el-button icon="el-icon-question" type="text" v-popover:popover2></el-button></p>
      <el-card shadow="never">
        <div id="chart2" style="height:400px;"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import ClientOverview from './ClientOverview'
  import echarts from 'echarts'
  import moment from 'moment'
  import config from '../../config'

  const xAxisData = []
  const date = new Date()
  date.setDate(date.getDate() - 30)
  for (let i = 0; i < 30; i++) {
    xAxisData.push(moment(date).format(config.dateFormat))
    date.setDate(date.getDate() + 1)
  }

  async function refreshStats () {
    try {
      console.log('refreshStats')
      const id = this.$route.params.id
      if (!id) {
        return
      }
      const res = await this.$axios.get('/clients/' + id + '/stats')
      const requestStats = res.data.requestStats
      const authSuccessStats = res.data.authSuccessStats
      const authFailStats = res.data.authFailStats

      console.log(JSON.stringify(requestStats))
      // 因为从后台返回的数据如果那天的count为0 则不会有记录 所以要先补齐
      const date = new Date()
      date.setDate(date.getDate() - 30)
      for (let i = 0; i < 30; i++) {
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        const rs = requestStats[i]
        const ass = authSuccessStats[i]
        const afs = authFailStats[i]
        if (!rs || rs._id.year !== y || rs._id.month !== m || rs._id.day !== d) {
          requestStats.splice(i, 0, {_id: {year: y, month: m, day: d}, count: 0})
        }
        if (!ass || ass._id.year !== y || ass._id.month !== m || ass._id.day !== d) {
          authSuccessStats.splice(i, 0, {_id: {year: y, month: m, day: d}, count: 0})
        }
        if (!afs || afs._id.year !== y || afs._id.month !== m || afs._id.day !== d) {
          authFailStats.splice(i, 0, {_id: {year: y, month: m, day: d}, count: 0})
        }
        date.setDate(date.getDate() + 1)
      }
      console.log(JSON.stringify(requestStats))
      // 转换成echarts可以接受的格式
      const requestCount = []
      const authCount = []
      const authSuccessCount = []
      const authFailCount = []
      for (let i = 0; i < 30; i++) {
        requestCount.push(requestStats[i].count)
        authSuccessCount.push(authSuccessStats[i].count)
        authFailCount.push(authFailStats[i].count)
        authCount.push(authSuccessCount[i] + authFailCount[i])
      }
      this.chart1.setOption({
        series: [{
          name: '请求量',
          data: requestCount
        }, {
          name: '验证量',
          data: authCount
        }]
      })
      this.chart2.setOption({
        series: [{
          name: '成功验证量',
          data: authSuccessCount
        }, {
          name: '防御验证量',
          data: authFailCount
        }]
      })

      // 转换成数据详情对话框表格可以接受的格式
      this.table1Data = []
      this.table2Data = []
      for (let i = 0; i < 30; i++) {
        this.table1Data.push({
          date: xAxisData[i],
          requestCount: requestCount[i],
          authCount: authCount[i]
        })
        this.table2Data.push({
          date: xAxisData[i],
          authSuccessCount: authSuccessCount[i],
          authFailCount: authFailCount[i]
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  export default {
    components: {
      ClientOverview
    },
    data () {
      return {
        dialog1Visible: false,
        dialog2Visible: false,
        table1Data: '',
        table2Data: ''
      }
    },
    methods: {
    },
    mounted () {
      // chartOption的初始化不能放在外面 否则在页面跳转别处再跳回来时会重用 导致错乱
      const chartOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['请求量', '验证量']
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: {
          name: '单位（次）'
        },
        series: [{
          name: '请求量',
          type: 'line',
          data: [0],
          itemStyle: {
            color: '#409EFF'
          }
        }, {
          name: '验证量',
          type: 'line',
          data: [0],
          itemStyle: {
            color: '#0be1f4'
          }
        }]
      }
      this.chart1 = echarts.init(document.getElementById('chart1'))
      this.chart1.setOption(chartOption)
      chartOption.legend.data = ['成功验证量', '防御验证量']
      chartOption.series = [{
        name: '成功验证量',
        type: 'line',
        data: [0],
        itemStyle: {
          color: '#67C23A'
        }
      }, {
        name: '防御验证量',
        type: 'line',
        data: [0],
        itemStyle: {
          color: '#F56C6C'
        }
      }]
      this.chart2 = echarts.init(document.getElementById('chart2'))
      this.chart2.setOption(chartOption)

      refreshStats.call(this)
    },
    watch: {
      '$route' () {
        refreshStats.call(this)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-table >>> .header-cell {
    background-color: #F2F6FC;
  }
  .el-dialog__wrapper >>> .el-dialog__body {
    padding: 0;
  }
</style>
