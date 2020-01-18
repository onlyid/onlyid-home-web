<template>
  <div>
    <banner />

    <div class="section-bg-dark">
      <div class="section"
           style="text-align: center;">
        <p style="font-size: 18px; margin-bottom: 30px">我们的使命：建立全球统一的账号和认证体系，为世界带来秩序</p>
        <el-button type="primary"
                   @click="goConsole">开始使用标准版</el-button>
        <el-button style="margin-left: 40px"
                   @click="goConsole">了解企业版</el-button>
      </div>
      <div class="gradient-hr"
           style="background: #7f7f7f;"></div>
    </div>
  </div>
</template>

<script>
import Banner from './banner'
import config from '@/config'

export default {
  components: {
    Banner
  },
  data() {
    return {}
  },
  methods: {
    goConsole() {
      window.location.assign(config.consoleUrl)
    }
  },
  mounted() {}
}
</script>

<style scoped>
</style>
