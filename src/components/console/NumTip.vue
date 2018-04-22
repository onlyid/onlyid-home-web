<template>
  <div style="text-align: center">
    <p style="font-size: 18px; margin: 0">{{ num }}</p>
    <p style="color: #7f7f7f; font-size: 13px; margin: 2px 0 0">{{ tip }}</p>
  </div>
</template>

<script>
  export default {
    props: ['num', 'tip'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
