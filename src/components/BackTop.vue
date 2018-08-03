<template>
  <div v-if="visible" @click="backTop">
    <el-tooltip placement="top" content="返回顶部" effect="light" popper-class="back-top" :visible-arrow="false">
      <i class="el-icon-caret-top"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    backTop () {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
  },
  mounted () {
    window.onscroll = () => {
      this.visible = window.pageYOffset > 500
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    position: fixed;
    background-color: #fff;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 1;
  }
  i {
    color: #409eff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
</style>
