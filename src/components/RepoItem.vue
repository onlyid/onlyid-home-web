<template>
  <div id="content">
    <el-card style="width: 440px; position: relative;">
      <p style="font-size: 14px; position: absolute; right: 10px; top: 10px; margin: 0px">
        <slot name="version"></slot><span style="margin-left: 10px; color: #7f7f7f;">更新于：{{ updateDate }}</span>
      </p>
      <div style="float: left; margin: 15px 25px 0 10px;">
        <slot></slot>
      </div>
      <div style="float: left; width: 290px;">
        <p style="font-size: 18px; margin-top: 10px;">{{ title }}</p>
        <p style="color: #7f7f7f; margin-bottom: 5px; font-size: 14px;">{{ detail }}</p>
      </div>
      <div style="clear: both"></div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: ['title', 'detail', 'updateDate'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content >>> .el-card:hover {
    background-color: #f7f8f9;
  }
  #content >>> i {
    color: white;
    font-size: 35px;
    border-radius: 35px;
    padding: 15px;
  }
  #content >>> a {
    text-decoration: none;
  }
</style>
