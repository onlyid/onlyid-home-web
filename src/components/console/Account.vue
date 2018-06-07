<template>
  <div>
    <el-dialog title="更换手机号" :visible.sync="dialogVisible" width="500px" center>
      <span>更换绑定的手机号，之后可以用新手机号登录</span>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="changeMobile">验证新手机号</el-button>
      </span>
    </el-dialog>
    <el-dialog title="续费" :visible.sync="renewDialogVisible" width="500px" center>
      <p class="note" style="margin-top: 0"><i class="material-icons" style="color: #E6A23C; font-size: 20px; vertical-align: text-bottom; margin-right: 5px">shopping_cart</i>续费年限越长，优惠越多：2年9.5折，3年9折，4年8.5折，5年8折</p>
      <span style="margin-right: 10px">购买时长</span>
      <el-radio-group v-model="renewYears">
        <el-radio-button :label="1">1年</el-radio-button>
        <el-radio-button :label="2">2年</el-radio-button>
        <el-radio-button :label="3">3年</el-radio-button>
        <el-radio-button :label="4">4年</el-radio-button>
        <el-radio-button :label="5">5年</el-radio-button>
      </el-radio-group>
      <table class="order-table" style="margin-top: 25px">
        <thead><tr>
          <th>待续费项</th>
          <th>有效期</th>
          <th>续费后有效期</th>
        </tr></thead>
        <tbody><tr>
          <td>手机号验证服务<br/>(公有云部署方式)</td>
          <td>{{ developerExpires }}</td>
          <td>{{ renewDeveloperExpires }}</td>
        </tr></tbody>
      </table>
      <p class="note" style="font-size: 13px;">温馨提示：所有订单均不支持退款</p>
      <p style="margin: 20px 0 0; text-align: right">总计费用 <span style="color: #E6A23C; font-size: 24px">{{ totalAmount }}</span> 元</p>
      <span slot="footer">
        <p class="note" style="font-size: 13px; margin-top: 0">点击“支付”后将打开支付宝页面进行支付</p>
        <el-button @click="renewDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="renew">支付</el-button>
      </span>
    </el-dialog>

    <p class="subsection-title" style="margin-top: 0px;">登录信息</p>
    <table class="account-table">
      <tr>
        <td class="c1">手机号</td>
        <td class="c2">{{ developer.user.mobile }}</td>
        <td><el-button icon="el-icon-edit" type="text" @click="dialogVisible = true">更换</el-button></td>
      </tr>
    </table>
    <p class="subsection-title">开发者信息
      <template v-if="isUpdateDeveloper">
        <el-button icon="el-icon-close" type="text" style="margin-left: 10px" @click="isUpdateDeveloper = false">取消</el-button>
        <el-button icon="el-icon-check" type="text" style="margin-left: 10px" @click="submit">保存</el-button>
      </template>
      <template v-else>
        <el-button icon="el-icon-edit" type="text" style="margin-left: 10px" @click="updateDeveloper">修改</el-button>
      </template>
    </p>
    <el-form label-width="80px" style="margin-left: 100px; width: 450px" ref="form" :model="form" :rules="rules" v-if="isUpdateDeveloper">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
    </el-form>
    <table class="account-table" v-else>
      <tr>
        <td class="c1">姓名</td>
        <td class="c2">{{ developer.name }}</td>
      </tr>
      <tr>
        <td class="c1">邮箱</td>
        <td class="c2">{{ developer.email }}</td>
      </tr>
    </table>
    <p class="subsection-title" id="products">产品信息</p>
    <table class="account-table">
      <tr>
        <td class="c1">手机号验证服务</td>
        <td class="c2">已开通：{{ developer.edition === 'standard' ? '公有云' : '专有云' }}</td>
        <td><router-link to="/console/enterprise/apply"><el-button type="text"><i class="material-icons" style="font-size: 15px; vertical-align: text-bottom; margin-right: 4px;">arrow_upward</i>升级</el-button></router-link></td>
      </tr>
      <tr>
        <td class="c1"></td>
        <td class="c2">有效期：{{ developerExpires }}</td>
        <td><el-button icon="el-icon-goods" type="text" @click="renewDialogVisible = true">续费</el-button></td>
      </tr>
    </table>
    <table class="account-table">
      <tr>
        <td class="c1">手机账号服务</td>
        <td class="c2" style="color: #7f7f7f">已暂停运营</td>
        <td><router-link to="/console/mobile-account"><el-button icon="el-icon-question" type="text"></el-button></router-link></td>
      </tr>
    </table>
    <p class="subsection-title">通知管理</p>
    <p class="note">选择你希望接收唯ID发送的哪些电子邮件。</p>
    <el-form style="margin: 30px 0 0 120px;">
      <el-checkbox disabled checked></el-checkbox><span class="notification-title" style="color: #7f7f7f">开发者账号通知</span>
      <p class="notification-detail">账号敏感信息变更；服务即将过期；服务已过期导致服务暂停等</p>
      <el-checkbox disabled checked=""></el-checkbox><span class="notification-title" style="color: #7f7f7f">client通知</span>
      <p class="notification-detail">client审核失败、被举报、API请求频率异常导致服务暂停；SDK版本停用导致你的app受影响等</p>
      <el-checkbox v-model="announcementsChecked"></el-checkbox><span class="notification-title">平台公告</span>
      <p class="notification-detail">现有产品更新、新产品推荐、优惠活动等</p>
    </el-form>
  </div>
</template>

<script>
  import config from '@/config'
  import moment from 'moment'

  export default {
    data () {
      return {
        renewYears: 3,
        developer: sessionStorage.getObj('developer'),
        announcementsChecked: false,
        dialogVisible: false,
        renewDialogVisible: false,
        isUpdateDeveloper: false,
        form: {
          name: '',
          email: ''
        },
        rules: config.developerRules
      }
    },
    methods: {
      async renew () {
        try {
          const res = await this.$axios.post('/developer/renew', {
            renewYears: this.renewYears
          })
          sessionStorage.alipay = true
          location.assign(res.data.payUrl)
        } catch (err) {
          console.error(err)
        }
      },
      updateDeveloper () {
        this.isUpdateDeveloper = true
        this.form.name = this.developer.name
        this.form.email = this.developer.email
      },
      submit () {
        this.$refs.form.validate(async (valid) => {
          try {
            if (!valid) {
              console.log('not valid')
              return
            }

            await this.$axios.put('/developer', {
              name: this.form.name,
              email: this.form.email
            })

            this.developer.name = this.form.name
            this.developer.email = this.form.email
            sessionStorage.setObj('developer', this.developer)
            this.isUpdateDeveloper = false
            this.$bus.$emit('login')
          } catch (err) {
            console.error(err)
          }
        })
      },
      changeMobile () {
        sessionStorage.auth4 = 'changeMobile'
        sessionStorage.fromRoute = this.$route.path
        location.assign(config.authorizeUrl)
      }
    },
    watch: {
      async announcementsChecked (newVal) {
        try {
          await this.$axios.put('/developer/notification-settings', {
            announcements: newVal
          })
          this.$message({
            message: '已保存修改',
            type: 'success'
          })
        } catch (err) {
          console.error(err)
        }
      }
    },
    async mounted () {
      try {
        // 如果是更换手机号
        if (sessionStorage.auth4 === 'changeMobile') {
          delete sessionStorage.auth4

          const res = await this.$axios.put('/developer/user', {
            code: sessionStorage.code
          })
          sessionStorage.setObj('developer', res.data.developer)
          this.developer = res.data.developer
          this.$message({
            message: '已更换手机号',
            type: 'success'
          })
        }
        if (sessionStorage.alipay) {
          delete sessionStorage.alipay

          const order = this.$route.query.out_trade_no
          if (!order) {
            return this.$message.error('支付失败')
          }

          const res = await this.$axios.post('/developer/check-renew', {
            order
          })
          sessionStorage.setObj('developer', res.data.developer)
          this.developer = res.data.developer
          this.$message({
            message: '已完成续费',
            type: 'success'
          })
          // 去掉query
          this.$router.replace(this.$route.path)
        }
      } catch (err) {
        console.error(err)
      }
    },
    computed: {
      totalAmount () {
        const discount = 1 - (this.renewYears - 1) * 0.05
        return (this.renewYears * 365 * discount).toFixed(2)
      },
      developerExpires () {
        if (new Date(this.developer.expires) < new Date()) {
          return '已过期，请续费'
        }
        return moment(this.developer.expires).format(config.dateFormat)
      },
      renewDeveloperExpires () {
        // 如果已过期，计算续费后到期时间从当前开始
        const now = moment()
        let expires = moment(this.developer.expires)
        if (expires.isBefore(now)) {
          expires = now
        }
        return expires.add(this.renewYears, 'y').format(config.dateFormat)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .account-table {
    margin-left: 140px;
  }
  .account-table td {
    width: 150px;
    height: 40px;
  }
  .account-table td.c1 {
    color: #7f7f7f;
  }
  .account-table td.c2 {
    width: 200px;
  }
  .subsection-title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-bottom: 0;
  }
  .notification-detail {
    margin-left: 25px;
    color: #7f7f7f;
    margin-top: 5px;
    font-size: 13px;
  }
  .notification-title {
    font-size: 15px;
    margin-left: 12px;
  }
  .order-table {
    border-collapse: collapse;
    width: 100%;
  }
  .order-table td {
    padding: 8px;
  }
  .order-table th {
    padding: 4px 8px;
    text-align: left;
  }
  .order-table thead {
    background-color: #f6f8fa;
    border-bottom: 1px solid #d1d5de;
    border-top: 1px solid #d1d5de;
  }
  .order-table tbody {
    border-bottom: 1px solid #d1d5de;
  }
</style>
