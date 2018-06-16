<template>
  <div>
    <section class="section" style="width: 400px">
      <p class="section-title">注册</p>
      <p class="section-summary">完善开发者信息</p>
      <el-form ref="form" :model="form" :rules="rules" style="margin-top: 40px;">
        <el-form-item>
          <el-input :value="mobile" disabled></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input placeholder="真实姓名" v-model="form.name"></el-input>
        </el-form-item>
        <p style="margin: 20px 0 10px;" class="note">邮箱仅用于接收通知，不用于登录</p>
        <el-form-item prop="email">
          <el-input placeholder="邮箱" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="checkEmail">
          <el-input placeholder="确认邮箱" v-model="form.checkEmail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="agreementChecked"></el-checkbox>
          我已阅读并同意唯ID <router-link to="/agreement">服务条款</router-link> 和 <router-link to="/privacy">隐私权政策</router-link>
        </el-form-item>
        <el-form-item style="margin-top: 30px">
          <el-button type="primary" @click="submit" style="width: 100%" :disabled="!agreementChecked">同意协议并注册</el-button>
        </el-form-item>
      </el-form>
    </section>
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
        mobile: sessionStorage.getObj('user').mobile,
        agreementChecked: true,
        rules: config.developerRules
      }
    },
    methods: {
      submit () {
        this.$refs['form'].validate(async (valid) => {
          try {
            if (!valid) {
              console.log('not valid')
              return
            }

            const res = await this.$axios.post('/signup', {
              name: this.form.name,
              email: this.form.email
            })
            sessionStorage.setObj('developer', res.data.developer)
            this.$router.replace(sessionStorage.fromRoute.split('/')[1])
            this.$bus.$emit('login')
          } catch (err) {
            console.error(err)
          }
        })
      }
    },
    // 用mounted竟然不行。。
    created () {
      const validateEmail = (rule, value, callback) => {
        if (this.form.checkEmail !== '') {
          this.$refs.form.validateField('checkEmail')
        }
        callback()
      }
      const validateEmail2 = (rule, value, callback) => {
        if (value !== this.form.email) {
          return callback(new Error('两次输入的邮箱不一致，请重新输入'))
        }
        callback()
      }

      this.rules.checkEmail = [
        { validator: validateEmail2, trigger: 'blur' }
      ]
      this.rules.email.push({ validator: validateEmail, trigger: 'blur' })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
