<template>
  <div class="position">
    <div class="position-img">
      <slot></slot>
    </div>
    <p style="margin: 30px 0 0 0;">{{ title }}</p>
    <p style="font-size: 14px; color: #7f7f7f; margin-top: 10px">{{ count }} 个职位</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'count'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .position {
    width: 150px;
    text-align: center;
    cursor: pointer;
  }
  .position-img {
    background-color: #f7f8f9;
    padding: 30px;
    border-radius: 62px;
    width: 64px;
    height: 64px;
    margin: 0 auto;
  }
  .position-img:hover {
    background-color: #eee;
  }
  .position img {
    width: 64px;
  }
</style>
