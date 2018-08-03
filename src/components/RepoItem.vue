<template>
  <el-card style="width: 305px; position: relative; box-sizing: border-box" :body-style="{paddingRight: '0px'}" shadow="hover" id="content">
    <div style="float: left; margin-top: 5px;">
      <slot></slot>
    </div>
    <div style="float: left; margin-left: 20px">
      <span style="font-size: 16px;">{{ title }}</span>
      <p style="color: #7f7f7f; margin: 8px 0 0; font-size: 14px;">{{ detail }}</p>
    </div>
    <div style="clear: both"></div>
  </el-card>
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
  #content >>> i {
    color: white;
    font-size: 25px;
    border-radius: 50%;
    padding: 10px;
  }
  #content {
    float: left;
  }
</style>
