<template>
  <div id="content" :class="contentClassObject">
    <div style="text-align: center; float: left; width: 35px">
      <i :class="iconClassObject"></i>
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
    iconClassObject () {
      if (this.type === 'info') {
        return 'el-icon-info'
      } else {
        return 'el-icon-warning'
      }
    },
    contentClassObject () {
      if (this.type === 'info') {
        return 'content-info'
      } else {
        return 'content-warning'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
  }
  .content-info {
    background: #e9ebee;
    border-color: #dddfe2;
    color: #7f7f7f;
  }
  .content-warning {
    background: #ffd6d6;
    border-color: #ffd6d6;
    color: #F56C6C;
  }
  #content i {
    margin-top: 12px
  }
  #content p {
    color: #7f7f7f;
    border-radius: 0 4px 4px 0;
    padding: 10px;
    margin: 0px 0 0 35px;
    background-color: #fff;
  }
</style>
