<template>
  <div>
  </div>
</template>

<script>
import { urlArgs } from '../util'

export default {
  data () {
    return {
    }
  },
  created () {
    opener.onCode(urlArgs()['code'])
    window.close()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
