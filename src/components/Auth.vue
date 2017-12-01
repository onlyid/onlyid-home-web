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
        msg: '登录中 . . .'
      }
    },
    created () {
      this.$axios.get('/auth', {
        params: {
          code: common.urlArgs()['code']
        }
      }).then((res) => {
        sessionStorage.setObj('user', res.data.user)
        // 不能用router.replace 因为要删掉location.search
        // 跳回第一级路由
        location.replace('/#/' + sessionStorage.fromRoute.split('/')[1])
      }).catch((err) => {
        this.msg = '登录出错'
        console.log(err)
      })
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
