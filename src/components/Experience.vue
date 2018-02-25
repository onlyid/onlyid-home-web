<template>
  <div>
    <p id="banner1">体验下一代手机号验证服务</p>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'experience'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner1 {
    background-color: #409EFF;
  }
</style>
