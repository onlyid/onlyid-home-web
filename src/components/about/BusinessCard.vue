<template>
  <el-card style="font-size: 15px; width: 600px; margin: 0 auto;" :body-style="{paddingLeft: '25px'}">
    <div>
      <div class="qr-code">
        <slot name="qr-code"></slot>
      </div>
      <span style="font-size: 24px">{{name}} </span> <span style="font-size: 18px"> {{title}}</span>
      <p style="margin-top: 35px">TEL：{{tel}}（工作日 09:30 - 18:30）</p>
      <p>MAIL：{{email}}（用@代替#）</p>
      <span>QQ：{{qq}}</span>
    </div>
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
