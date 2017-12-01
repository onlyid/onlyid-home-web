<template>
  <div id="content">
    <el-popover
      ref="popover1"
      placement="top-end"
      width="500"
      :hide-after="0"
      trigger="hover"
      content="用户登录后，唯一ID会带上code请求您的redirect uri，您使用code继续完成授权；对于app，code通过sdk返回，redirect uri为默认值">
    </el-popover>

    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/console/client' }">client</el-breadcrumb-item>
      <el-breadcrumb-item>修改</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="content1">
      <el-form ref="form" :model="form" style="padding-top: 30px" :rules="rules" label-width="150px">
        <el-form-item prop="name" label="名称：">
          <el-input v-model="form.name" class="item-detail"></el-input>
        </el-form-item>
        <el-form-item label="client id：">
          <el-input v-model="form.id" class="item-detail" disabled></el-input>
        </el-form-item>
        <el-form-item label="client secret：">
          <el-input v-model="form.secret" class="item-detail" disabled>
            <el-button slot="append" @click="confirmResetSecret" type="primary">重置</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="type" label="类型：">
          <el-radio-group v-model="form.type">
            <el-radio label="web">web</el-radio>
            <el-radio label="app">app</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="redirectUri" label="redirect uri：">
          <el-input v-model="form.redirectUri" class="item-detail" :disabled="redirectUriDisabled">
            <el-button slot="append" icon="el-icon-question" v-popover:popover1></el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <div style="padding-top: 30px">
        <el-row :gutter="100" type="flex" justify="center">
          <el-col :span="5">
            <el-button @click="cancel">取消</el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="primary" @click="submit">修改</el-button>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-dialog :show-close="false" :visible="dialogVisible" width="500px">
      <p class="dialog-content">{{ confirmResetSecretText }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="resetSecret">重置</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
import config from '../config'
import ElRadioGroup from '../../node_modules/element-ui/packages/radio/src/radio-group.vue'

export default {
  components: {
    ElRadioGroup,
    ElButton,
    ElInput},
  data () {
    return {
      form: {
        name: '',
        id: '',
        secret: '',
        redirectUri: '',
        type: ''
      },
      rules: config.rules,
      dialogVisible: false,
      confirmResetSecretText: '重置secret？您一般只在secret泄露才需重置，重置后原secret马上失效'
    }
  },
  methods: {
    confirmResetSecret () {
      this.dialogVisible = true
    },
    cancel () {
      this.$router.back()
    },
    resetSecret () {
      this.$axios.put('/clients/' + this.$route.params.id + '/secret').then((res) => {
        this.$message({
          message: '已重置',
          type: 'success'
        })
        this.form.secret = res.data.secret
        this.dialogVisible = false
      }).catch((err) => {
        console.log(err)
      })
    },
    submit () {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          console.log('not valid')
          return
        }

        const client = {}
        client.name = this.form.name
        client.redirectUris = [this.form.redirectUri]
        client.type = this.form.type
        this.$axios.put('/clients/' + this.$route.params.id, {
          client
        }).then((res) => {
          sessionStorage.setItem('segue', 'update')
          this.$router.replace('/console/clients/' + this.$route.params.id)
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  },
  watch: {
    'form.type' (val) {
      if (val === 'app') {
        this.form.redirectUri = config.defaultRedirectUri
      } else {
        this.form.redirectUri = this.client.redirectUris[0]
      }
    }
  },
  computed: {
    redirectUriDisabled () {
      return this.form.type === 'app'
    }
  },
  created () {
    this.$axios.get('/clients/' + this.$route.params.id).then((res) => {
      this.client = res.data.client
      this.form.name = this.client.name
      this.form.id = this.client._id
      this.form.secret = this.client.secret
      this.form.redirectUri = this.client.redirectUris[0]
      this.form.type = this.client.type
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    padding: 50px 0px;
    width: 980px;
    margin: 0 auto;
  }
  #content1 {
    width: 700px;
    margin: 0 auto;
    padding-top: 20px;
  }

</style>
