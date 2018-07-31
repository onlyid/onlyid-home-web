<template>
  <div :class="contentClass" style="border-width: 1px; border-style: solid; border-radius: 4px;">
    <div style="text-align: center; float: left; width: 35px">
      <i :class="iconClass" style="margin-top: 12px"></i>
    </div>
    <p><slot>默认内容</slot></p>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data () {
    return {
    }
  },
  computed: {
    iconClass () {
      if (this.type === 'info') {
        return 'el-icon-info'
      } else {
        return 'el-icon-warning'
      }
    },
    contentClass () {
      if (this.type === 'info') {
        return 'info'
      } else {
        return 'warning'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .info {
    background: #e9ebee;
    border-color: #dddfe2;
    color: #7f7f7f;
  }
  .warning {
    background: #ffd6d6;
    border-color: #ffd6d6;
    color: #F56C6C;
  }
  p {
    font-size: 14px;
    color: #7f7f7f;
    border-radius: 0 4px 4px 0;
    padding: 10px;
    margin: 0 0 0 35px;
    background-color: #fff;
  }
</style>
