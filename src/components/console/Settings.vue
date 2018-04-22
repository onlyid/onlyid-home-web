<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" width="500px" title="重置secret" center>
      <p>确认重置？重置后原secret马上失效（一般只在secret泄露后重置）</p>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="resetSecret">重置</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="reviewDialogVisible" width="500px" title="提交审核" center>
      <span>在您提交上线审核前，须满足以下条件。请自行检查您的app/网站：</span>
      <ol>
        <li>主体内容基本完善。可清晰识别client的主要功能、经营内容。</li>
        <li>已上线可正常使用。app可在应用商店正常搜索、下载、使用；网站须保持80端口可正常访问。</li>
      </ol>
      <el-form :model="form" ref="formReview" :rules="rules" :label-width="client.type === 'app' ? '120px' : '0'">
        <el-form-item prop="website" v-if="client.type === 'web'">
          <el-input v-model="form.website" placeholder="上线网址"></el-input>
        </el-form-item>
        <template v-else>
          <p class="note" style="font-size: 13px; margin: 0 0 10px">如你的app同时有iOS和Android版，任意选择一家即可。</p>
          <el-form-item label="上架应用商店" prop="appStore">
            <el-select v-model="form.appStore" style="width: 250px">
              <el-option label="App Store（iOS）" value="apple"></el-option>
              <el-option label="小米应用商店（Android）" value="mi"></el-option>
              <el-option label="360手机助手（Android）" value="360"></el-option>
            </el-select>
          </el-form-item>
        </template>
      </el-form>
      <p class="note" style="font-size: 13px; margin: 20px 0 0">如您的app/网站不适宜开放公众使用，如企业、政府或其他组织的内部系统，请联系客户经理单独处理。</p>
      <span slot="footer">
          <el-button @click="reviewDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitReview">提交审核</el-button>
      </span>
    </el-dialog>

    <span style="font-size: 20px; color: #7f7f7f;">管理设置</span>
    <client-overview style="margin-top: 15px" @selectClient="selectClient"></client-overview>
    <p style="font-size: 16px; margin-top: 30px;">基本设置</p>
    <el-card shadow="never">
      <table class="table1">
        <tr>
          <td class="c1">icon</td>
          <td class="c2">
            <el-upload
              :action="clientIconAction"
              accept="image/jpeg,image/png"
              :with-credentials="true"
              :before-upload="beforeAvatarUpload"
              :on-success="handleAvatarSuccess"
              :on-error="handleAvatarError"
              :show-file-list="false"
              name="icon"
              class="avatar-uploader">
              <img :src="imageUrl" class="avatar"/>
            </el-upload>
          </td>
        </tr>
        <tr style="height: 10px"></tr>
        <tr>
          <td class="c1">名称</td>
          <td class="c2">
            <el-form v-if="isUpdateName" ref="formName" :rules="rules" :model="form">
              <el-form-item prop="name">
                <el-input v-model="form.name" style="width: 300px"></el-input>
                <el-button icon="el-icon-close" type="text" @click="dismissUpdate('name')">取消</el-button>
                <el-button icon="el-icon-check" type="text" @click="submit('name')">保存</el-button>
              </el-form-item>
            </el-form>
            <template v-else>
              {{ client.name }}
              <el-button icon="el-icon-edit" type="text" @click="presentUpdate('name')">修改</el-button>
            </template>
          </td>
        </tr>
        <tr>
          <td class="c1">类型</td>
          <td class="c2">
            <el-radio-group v-model="client.type" @change="changeType">
              <el-radio label="web"></el-radio>
              <el-radio label="app"></el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr>
          <td class="c1">redirect uri</td>
          <td class="c2" style="word-break:break-all;">
            <el-form v-if="isUpdateRedirectUri" ref="formRedirectUri" :model="form" :rules="rules">
              <el-form-item prop="redirectUri">
                <el-input v-model="form.redirectUri" style="width: 410px"></el-input>
                <el-button icon="el-icon-close" type="text" @click="dismissUpdate('redirectUri')">取消</el-button>
                <el-button icon="el-icon-check" type="text" @click="submitRedirectUri">保存</el-button>
              </el-form-item>
            </el-form>
            <template v-else>
              {{ client.redirectUris ? client.redirectUris[0] : '' }}
              <el-button v-if="client.type !== 'app'" icon="el-icon-edit" type="text" @click="presentUpdate('redirectUri')">修改</el-button>
            </template>
          </td>
        </tr>
        <tr>
          <td class="c1">主题</td>
          <td class="c2">
            标准、夜间模式
              <el-radio :label="false">亮色系</el-radio>
              <el-radio :label="true">暗色系</el-radio>
          </td>
        </tr>
        <tr>
          <td class="c1">缩放</td>
          <td class="c2">
            <el-radio-group v-model="client.viewZoomed" @change="changeView">
              <el-radio :label="false">标准</el-radio>
              <el-radio :label="true">放大</el-radio>
            </el-radio-group>
          </td>
        </tr>
      </table>
    </el-card>
    <p style="font-size: 16px; margin-top: 30px;">高级设置</p>
    <el-card shadow="never">
      <table class="table1">
        <tr>
          <td class="c1">验证方式</td>
          <td class="c2">
            客户端Token、服务端中转
            <router-link to="/docs/custom#server-redirect"><el-button icon="el-icon-search" type="text">查看文档</el-button></router-link>
          </td>
        </tr>
        <tr>
          <td class="c1">client secret</td>
          <td class="c2">
            {{ client.secret }}
            <el-button icon="el-icon-refresh" type="text" @click="dialogVisible = true">重置</el-button>
          </td>
        </tr>
        <tr>
          <td class="c1">服务端IP</td>
          <td class="c2">
            <el-form v-if="isUpdateServerIp" :model="form" ref="formServerIp" :rules="rules">
              <el-form-item prop="serverIp">
                <el-input v-model="form.serverIp" style="width: 300px" placeholder="多个ip请用逗号分隔，最多不超过5个"></el-input>
                <el-button icon="el-icon-close" type="text" @click="dismissUpdate('serverIp')">取消</el-button>
                <el-button icon="el-icon-check" type="text" @click="submit('serverIp')">保存</el-button>
              </el-form-item>
            </el-form>
            <template v-else>
              {{ client.serverIp && client.serverIp.toString() }}
              <el-button icon="el-icon-edit" type="text" @click="presentUpdate('serverIp')">修改</el-button>
            </template>
          </td>
        </tr>
      </table>
    </el-card>
    <p style="font-size: 16px; margin-top: 30px;">审核</p>
    <el-card shadow="never">
      <el-button type="text" icon="el-icon-menu" style="float: right" @click="presentReview" v-if="reviewButtonVisible">提交审核</el-button>
      <p style="font-size: 15px; margin-top: 10px">你的{{ client.type === 'app' ? 'app' : '网站'}}开发完成后，需提交上线审核</p>
      <p class="note" style="font-size: 13px">唯ID实行“后审核”制度，审核期间对用户“表现为”审核通过，不会影响你的业务正常开展。
        了解更多请查阅 <router-link to="/docs/review">审核制度</router-link></p>
      <table class="table1">
        <tr>
          <td class="c1">状态</td>
          <td class="c2">{{ reviewStatus }}</td>
        </tr>
        <tr>
          <td class="c1">{{ client.type === 'app' ? '上架应用商店' : '上线网址' }}</td>
          <td class="c2">{{ availableOn }}</td>
        </tr>
        <tr>
        </tr>
      </table>
    </el-card>
  </div>
</template>

<script>
  import ClientOverview from './ClientOverview'
  import config from '../../config'

  export default {
    components: {
      ClientOverview
    },
    data () {
      return {
        isUpdateName: false,
        isUpdateRedirectUri: false,
        isUpdateServerIp: false,
        clientIconAction: config.clientIconAction,
        client: '',
        imageUrl: '',
        form: {
          name: '',
          redirectUri: '',
          serverIp: '',
          appStore: '',
          website: ''
        },
        rules: config.clientRules,
        dialogVisible: false,
        reviewDialogVisible: false
      }
    },
    methods: {
      async handleAvatarSuccess (res, file) {
        try {
          if (res.code !== 0) {
            return this.$message.error(res.message)
          }

          console.log(res.icon)
          const res1 = await this.$axios.put('/clients/' + this.client._id + '/icon', {
            icon: res.icon
          })

          this.$message({
            type: 'success',
            message: '已更新icon'
          })

          this.client.iconUrl = res1.data.iconUrl
          this.imageUrl = URL.createObjectURL(file.raw)
        } catch (err) {
          console.error(err)
        }
      },
      handleAvatarError (err) {
        this.$message.error(err.toString())
      },
      beforeAvatarUpload (file) {
        const sizeValid = file.size < config.clientIconMaxSize

        if (!sizeValid) {
          this.$message.error('不能大于' + config.clientIconMaxSize / 1024 + 'KB')
        }
        return sizeValid
      },
      selectClient (client) {
        this.client = client
        this.imageUrl = client.iconUrl + '?' + new Date().getTime()
      },
      // 所有用表单的更新 如name
      submit (what) {
        this.$refs['form' + what.substring(0, 1).toUpperCase() + what.substring(1)].validate(async (valid) => {
          try {
            if (!valid) {
              console.log('not valid')
              return
            }
            const body = {}
            body[what] = this.form[what]
            body.what = what
            await this.$axios.put('/clients/' + this.client._id, body)
            this.client[what] = this.form[what]
            this.dismissUpdate(what)
          } catch (err) {
            console.error(err)
          }
        })
      },
      // 所有不是用表单的更新 如type
      async submit1 (what, value) {
        try {
          const body = {}
          body.what = what
          body[what] = value
          await this.$axios.put('/clients/' + this.client._id, body)
          this.$message({
            message: '已保存修改',
            type: 'success'
          })
        } catch (err) {
          console.error(err)
        }
      },
      submitRedirectUri () { // redirect uri特殊点 单独更新
        this.$refs['formRedirectUri'].validate(async (valid) => {
          try {
            if (!valid) {
              console.log('not valid')
              return
            }
            const body = {}
            body.redirectUris = [this.form.redirectUri]
            body.what = 'redirectUris'
            await this.$axios.put('/clients/' + this.client._id, body)
            this.client.redirectUris = [this.form.redirectUri]
            this.dismissUpdate('redirectUri')
          } catch (err) {
            console.error(err)
          }
        })
      },
      async resetSecret () {
        try {
          const res = await this.$axios.put('/clients/' + this.$route.params.id + '/secret')
          this.$message({
            message: '已重置secret',
            type: 'success'
          })
          this.client.secret = res.data.secret
          this.dialogVisible = false
        } catch (err) {
          console.error(err)
        }
      },
      submitReview () {
        this.$refs.formReview.validate(async (valid) => {
          try {
            if (!valid) {
              console.log('not valid')
              return
            }

            const body = {}
            body.type = this.client.type
            if (this.client.type === 'app') {
              body.appStore = this.form.appStore
            } else {
              body.website = this.form.website
            }
            await this.$axios.put('/clients/' + this.client._id + '/review', body)

            if (this.client.type === 'app') {
              // 因为一开始app store和website可能是undefined 所以需要这样写 computed里的availableOn才会起作用
              this.$set(this.client.review, 'appStore', this.form.appStore)
            } else {
              this.$set(this.client.review, 'website', this.form.website)
            }
            this.client.review.status = 'ongoing'
            this.reviewDialogVisible = false
          } catch (err) {
            console.error(err)
          }
        })
      },
      presentUpdate (what) {
        this['isUpdate' + what.substring(0, 1).toUpperCase() + what.substring(1)] = true
        if (what === 'serverIp') {
          this.form.serverIp = this.client.serverIp ? this.client.serverIp.toString() : ''
        } else if (what === 'redirectUri') {
          this.form.redirectUri = this.client.redirectUris[0]
        } else {
          this.form[what] = this.client[what]
        }
      },
      presentReview () {
        this.reviewDialogVisible = true
        // 加载后第一次点 formReview会是undefined
        this.$refs.formReview && this.$refs.formReview.resetFields()
      },
      dismissUpdate (what) {
        this['isUpdate' + what.substring(0, 1).toUpperCase() + what.substring(1)] = false
      },
      changeType (value) {
        this.client.redirectUris = [config.defaultRedirectUri]
        this.submit1('type', value)
      },
      changeTheme (value) {
        this.submit1('themeDark', value)
      },
      changeView (value) {
        this.submit1('viewZoomed', value)
      }
    },
    computed: {
      reviewStatus () {
        // 刚初始化时 review为null 会报错
        if (!this.client.review) {
          return ''
        }
        switch (this.client.review.status) {
          case 'dev':
            return '开发中，未审核'
          case 'rejected':
            return '审核未通过'
          case 'approved':
            return '审核已通过'
          case 'ongoing':
            return '审核中，请等候'
        }
      },
      availableOn () {
        if (!this.client.review) {
          return ''
        }
        if (this.client.type === 'web') {
          return this.client.review.website
        }
        switch (this.client.review.appStore) {
          case 'apple':
            return 'App Store（iOS）'
          case 'mi':
            return '小米应用商店（Android）'
          case '360':
            return '360手机助手（Android）'
        }
      },
      reviewButtonVisible () {
        if (!this.client.review) {
          return false
        }
        switch (this.client.review.status) {
          case 'dev':
          case 'rejected':
            return true
          default:
            return false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table1 {
    margin-left: 80px;
  }
  .table1 td {
    height: 40px;
  }
  .table1 td.c1 {
    width: 100px;
    color: #7f7f7f;
  }
  .avatar-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
    vertical-align: middle;
  }
  .avatar-uploader >>> .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar {
    width: 128px;
    height: 128px;
    vertical-align: middle;
  }
  .el-button {
    margin-left: 10px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
</style>
