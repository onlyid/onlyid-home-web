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
      <el-breadcrumb-item>新建client</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="content1">
      <el-form ref="form" :model="form" style="padding-top: 30px" :rules="rules">
        <el-form-item prop="name">
          <el-input placeholder="名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="type">
          <span style="font-size: 17px">类型：</span>
          <el-radio-group v-model="form.type">
            <el-radio label="web">web</el-radio>
            <el-radio label="app">app</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="redirectUri">
          <el-input placeholder="redirect uri" v-model="form.redirectUri" :disabled="redirectUriDisabled">
            <el-button slot="append" icon="el-icon-question" v-popover:popover1></el-button>
          </el-input>
        </el-form-item>
        <el-form-item style="padding-top: 30px">
          <el-row :gutter="100" type="flex" justify="center">
            <el-col :span="5">
              <el-button @click="cancel">取消</el-button>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" @click="submit">新建</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import config from '../../config'

  export default {
    data () {
      return {
        form: {
          name: '',
          redirectUri: '',
          type: ''
        },
        rules: config.rules
      }
    },
    methods: {
      submit () {
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            console.log('not valid')
            return
          }

          this.$axios.post('/clients', {
            client: {
              name: this.form.name,
              type: this.form.type,
              redirectUris: [this.form.redirectUri]
            }
          }).then((res) => {
            console.log(res.data)
            this.$message({
              message: '已创建，请继续阅读文档完成接入',
              type: 'success'
            })
            this.$router.replace('/console/clients/' + res.data.client._id)
          }).catch((err) => {
            console.log(err)
          })
        })
      },
      cancel () {
        this.$router.back()
      }
    },
    watch: {
      'form.type' (val) {
        if (val === 'app') {
          this.form.redirectUri = config.defaultRedirectUri
        } else {
          this.form.redirectUri = ''
        }
      }
    },
    computed: {
      redirectUriDisabled () {
        return this.form.type === 'app'
      }
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
