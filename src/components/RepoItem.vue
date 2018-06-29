<template>
  <el-card style="width: 300px; position: relative;" :body-style="{paddingRight: '0px'}" shadow="hover" id="content">
    <span style="font-size: 13px; position: absolute; right: 10px; top: 10px;">
      <span style="color: #7f7f7f;">v{{version}} &nbsp;{{ updateDate }}更新</span>
    </span>
    <div style="float: left; margin-top: 20px;">
      <slot></slot>
    </div>
    <div style="float: right; width: 215px; margin-top: 20px">
      <span style="font-size: 16px;">{{ title }}</span>
      <p style="color: #7f7f7f; margin: 8px 0 0; font-size: 14px;">{{ detail }}</p>
    </div>
    <div style="clear: both"></div>
  </el-card>
</template>

<script>
export default {
  props: ['title', 'detail', 'updateDate', 'version'],
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
