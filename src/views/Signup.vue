<template>
  <div class="section" style="width: 440px">
    <p class="section-title" style="text-align: center">注册</p>
    <el-form label-width="70px" style="margin: 40px 40px 0 0">
      <el-form-item label="手机号">
        <el-input :value="user.mobile" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input placeholder="请填写姓名" v-model="form.name"></el-input>
      </el-form-item>
      <p style="margin: 20px 0 10px 70px;" class="note">用于接收通知，不用于登录</p>
      <el-form-item label="邮箱">
        <el-input placeholder="请填写邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="确认邮箱">
        <el-input placeholder="重复填写邮箱" v-model="form.checkEmail"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="agreementChecked"></el-checkbox>
        <span class="note">我已阅读并同意唯ID <router-link to="/about/agreement" target="_blank">服务条款</router-link> 和
          <router-link to="/about/privacy" target="_blank">隐私权政策</router-link></span>
      </el-form-item>
      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="submit" style="width: 100%" :disabled="!agreementChecked">注 册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import config from '../config'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        checkEmail: ''
      },
      user: '',
      agreementChecked: true,
      config
    }
  },
  methods: {
    async submit () {
      try {
        if (this.form.email !== this.form.checkEmail) {
          return this.$message.error('两次填写的邮箱不一致')
        }
        await this.$axios.post('/signup', { name: this.form.name, email: this.form.email })
        location.replace(config.consoleUrl)
      } catch (err) {
        console.error(err)
      }
    }
  },
  created () {
    this.user = JSON.parse(sessionStorage.user)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
