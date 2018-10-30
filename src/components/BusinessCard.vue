<template>
  <el-card style="width: 500px; margin: 0 auto;" :body-style="{padding: '30px 30px 30px 35px'}">
    <div class="qr-code">
      <slot name="qr-code"></slot>
    </div>
    <span style="font-size: 24px">{{name}} </span> <span style="font-size: 18px"> {{title}}</span>
    <p style="margin-top: 30px">TEL：{{tel}}</p>
    <p>MAIL：{{email}}</p>
    <span>QQ：{{qq}}</span>
  </el-card>
</template>

<script>
export default {
  props: ['name', 'title', 'tel', 'email', 'qq'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .qr-code {
    float: right;
  }
  .qr-code >>> img {
    width: 150px;
  }
</style>
