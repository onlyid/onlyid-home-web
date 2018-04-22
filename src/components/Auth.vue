<template>
  <div id="content">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import common from 'onlyid-frontend-common'

  export default {
    data () {
      return {
        msg: '请稍候 . . .'
      }
    },
    async created () {
      try {
        const code = common.urlArgs()['code']
        // 如果存在auth4 则跳转原路由处理
        if (sessionStorage.auth4) {
          sessionStorage.code = code
          location.replace('/#' + sessionStorage.fromRoute)
        } else { // 否则按登录处理
          const res = await this.$axios.post('/login', {
            code
          })
          if (res.data.developer) {
            sessionStorage.setObj('developer', res.data.developer)
            // 不能用router.replace 因为要删掉location.search
            // 跳回第一级路由
            location.replace('/#/' + sessionStorage.fromRoute.split('/')[1])
          } else { // 新用户注册
            sessionStorage.setObj('user', res.data.user)
            location.replace('/#/signup')
          }
        }
      } catch (err) {
        this.msg = '登录出错'
        console.error(err)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    width: 980px;
    margin: 0 auto;
  }
</style>
