<template>
  <div>
  </div>
</template>

<script>
import common from 'onlyid-frontend-common'

export default {
  data () {
    return {
    }
  },
  created () {
    opener.onCode(common.urlArgs()['code'])
    window.close()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
