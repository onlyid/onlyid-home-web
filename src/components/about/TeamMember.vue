<template>
    <div style="display: flex; width: 550px;">
        <!--头像-->
        <div style="margin-top: 30px;"><slot></slot></div>
        <div style="margin-left: 20px;">
            <p style="font-size: 18px;">{{ name1 }}</p>
            <p><span style="color: #7f7f7f">负责：</span>{{ inChargeOf }}</p>
            <p><span style="color: #7f7f7f">擅长：</span>{{ goodAt }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name1', 'in-charge-of', 'good-at']
}
</script>

<style scoped>
    img {
        border-radius: 50%;
        width: 80px;
    }
</style>
