<template>
  <div>
    <div style="float: left; vertical-align: middle; margin-top: 3px">
      <slot></slot>
    </div>
    <div style="margin-left: 40px">
      <p style="font-size: 18px">{{ title }}</p>
      <p style="color: #C0C4CC">{{ detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'detail'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
