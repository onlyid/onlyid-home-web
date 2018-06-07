<template>
  <div style="margin-top: 15px">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>新建client</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="content1">
      <el-form ref="form" :model="form" :rules="rules">
        <p class="note">上传client的icon，调起授权页时用户通过icon识别你的app/网站<br/>
          128x128像素，支持JPG/PNG格式，大小不超过300KB</p>
        <el-form-item prop="icon">
          <el-upload :action="clientIconAction" accept="image/jpeg,image/png" :with-credentials="true"
            :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess" :on-error="handleAvatarError"
            :show-file-list="false" name="icon" class="avatar-uploader">
            <img v-if="imageUrl" :src="imageUrl" class="avatar"/>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <p class="note">调起授权页时用户通过client名称识别你的app/网站</p>
        <el-form-item prop="name">
          <el-input placeholder="client名称" v-model="form.name" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item prop="type" label="类型">
          <el-radio-group v-model="form.type">
            <el-radio label="web">web</el-radio>
            <el-radio label="app">app</el-radio>
          </el-radio-group>
        </el-form-item>
        <p class="note">对于网站，唯ID会在用户授权后带上code请求redirect uri，你使用code继续完成验证；对于app，code通过SDK返回，redirect uri为默认值</p>
        <el-form-item prop="redirectUris">
          <el-input placeholder="redirect uri" v-model="form.redirectUris" :disabled="form.type === 'app'"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="$router.back()">取消</el-button>
          <el-button type="primary" @click="submit">新建</el-button>
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
        imageUrl: '',
        form: {
          icon: '',
          name: '',
          redirectUris: '',
          type: ''
        },
        rules: config.clientRules,
        clientIconAction: config.clientIconAction
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        if (res.code !== 0) {
          return this.$message.error(res.message)
        }

        console.log(res.icon)
        this.form.icon = res.icon

        this.$message({
          type: 'success',
          message: '已上传icon'
        })

        this.imageUrl = URL.createObjectURL(file.raw)
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
      submit () {
        this.$refs['form'].validate(async (valid) => {
          if (!valid) {
            console.log('not valid')
            return
          }

          const res = await this.$axios.post('/clients', {
            icon: this.form.icon,
            name: this.form.name,
            type: this.form.type,
            redirectUris: [this.form.redirectUris]
          })
          console.log(res.data)
          this.$message({
            message: '已创建client，请阅读文档完成接入',
            type: 'success'
          })
          this.$router.replace('/console/overview')
        })
      }
    },
    watch: {
      'form.type' (val, oldVal) {
        if (val === 'app') {
          this.form.redirectUris = config.defaultRedirectUri
          this.$refs.form.validateField('redirectUris')
        } else if (oldVal === 'app') { // 此时val为web 且是由app跳回来 则引导用户填写redirect uri
          this.form.redirectUris = ''
          this.$refs.form.validateField('redirectUris')
        }
      }
    },
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content1 {
    margin-top: 50px;
  }
  .note {
    margin: 0 0 10px
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
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 128px;
    height: 128px;
    line-height: 128px;
  }
  .avatar {
    width: 128px;
    height: 128px;
    vertical-align: middle;
  }
</style>
