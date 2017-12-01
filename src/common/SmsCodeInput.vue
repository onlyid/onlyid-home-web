<template>
  <div>
    <el-input placeholder="验证码" v-model="smsCode" ref="smsCode"></el-input>
    <el-button id="send-sms-code" type="text" @click="sendSmsCode" :disabled="sendSmsCodeDisabled">{{ sendSmsCodeText }}</el-button>
  </div>
</template>

<script>
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item.vue'

  export default {
    components: {ElFormItem},
    props: ['value', 'mobile'],
    data () {
      return {
        sendSmsCodeDisabled: false,
        sendSmsCodeText: '发送验证码'
      }
    },
    methods: {
      sendSmsCode () {
        this.$axios.post('/sms-code/send', {
          mobile: this.mobile
        }).then((res) => {
          this.$refs.smsCode.focus()

          let countDown = 60
          this.sendSmsCodeDisabled = true
          this.sendSmsCodeText = countDown
          const h = setInterval(() => {
            countDown -= 1
            this.sendSmsCodeText = countDown
          }, 1000)
          setTimeout(() => {
            clearInterval(h)
            this.sendSmsCodeDisabled = false
            this.sendSmsCodeText = '发送验证码'
          }, countDown * 1000)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    computed: {
      smsCode: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #send-sms-code {
    padding-top: 10px;
    position: absolute;
    top: 0px;
    right: 10px;
    width: auto;
  }
</style>
