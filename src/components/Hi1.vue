<template>
  <div>
    <el-button @click="test">测试</el-button>
    <p>{{person.name}}</p>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {
        person: {
          name: 'ltb'
        }
      }
    },
    methods: {
      test () {
        this.$emit('updatePerson', this.person)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
