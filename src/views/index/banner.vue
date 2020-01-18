<template>
  <el-carousel height="450px"
               trigger="click"
               arrow="never"
               interval="4000">
    <el-carousel-item>
      <div class="banner1-bg">
        <div class="banner">
          <div style="padding-top: 100px;">
            <p class="banner-title">唯ID：开源账号和认证解决方案</p>
            <div class="banner-tips">
              <p>从不限量验证码短信到企业级用户权限平台</p>
              <p>我们为网站和app提供通用的账号和认证解决方案</p>
            </div>
          </div>
          <div class="start-use">
            <el-button type="primary"
                       plain
                       round
                       @click="goConsole">开始使用标准版</el-button>
            <el-button round
                       plain
                       @click="goConsole"
                       style="margin-top: 40px;">了解企业版</el-button>
          </div>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="banner2-bg">
        <div class="banner">
          <div class="banner-left">
            <p class="banner-title">唯ID标准版</p>
            <div class="banner-tips">
              <p>适合普通网站和app的完善的账号和认证解决方案</p>
            </div>
            <el-button style="margin-top: 20px;"
                       plain
                       type="primary"
                       round
                       @click="goConsole">开始使用</el-button>
          </div>
          <ul class="advantages"
              style="margin-right: 20px">
            <li><i class="iconfont">&#xe93e;</i>完全开源：自豪地采用GPL v3协议</li>
            <li><i class="iconfont">&#xe93e;</i>成本极低：每个开发者每年只需捐赠100元</li>
            <li><i class="iconfont">&#xe93e;</i>无限短信：提供不限量的手机号验证码短信</li>
          </ul>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="banner3-bg">
        <div class="banner">
          <div class="banner-left">
            <p class="banner-title">唯ID企业版</p>
            <div class="banner-tips">
              <p>适合大、中、小型企业的统一的用户和权限管理平台</p>
            </div>
            <el-button style="margin-top: 20px;"
                       plain
                       type="primary"
                       round
                       @click="goConsole">了解更多</el-button>
          </div>
          <ul class="advantages">
            <li><i class="iconfont">&#xe93e;</i>安全可靠：我们始终把安全、稳定、可靠放在首位</li>
            <li><i class="iconfont">&#xe93e;</i>灵活好用：用户、组织机构、角色、权限，覆盖企业绝大部分 IAM 需求</li>
            <li><i class="iconfont">&#xe93e;</i>支持定制：对中大型企业，支持源码级定制和专有、私有化部署</li>
          </ul>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import config from '@/config'

export default {
  methods: {
    goConsole() {
      window.location.assign(config.consoleUrl)
    }
  }
}
</script>

<style lang="less" scoped>
.banner1-bg {
  background-image: url('~@/assets/mask.png'), linear-gradient(to right, #2f518b 0%, #0be1f4 100%);
  background-size: cover;
  color: #fff;
  background-position: center center;
  height: 450px;
}
@media screen and (max-width: 1920px) {
  .banner1-bg {
    background-size: 1920px;
  }
}
.banner {
  width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  &-title {
    font-size: 37px;
  }
  &-tips {
    font-size: 18px;
  }
  .el-button {
    font-size: 16px;
  }
  .start-use {
    padding-top: 160px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    .el-button {
      width: 180px;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }
  .banner-left {
    padding-top: 100px;
  }
  .advantages {
    list-style: none;
    font-size: 18px;
    padding-top: 100px;
    .iconfont {
      margin-right: 20px;
    }
    li {
      margin-top: 30px;
    }
  }
}
.banner2-bg {
  background-image: url('~@/assets/banner2-bg.png');
  height: 100%;
  color: white;
  background-size: cover;
}
.banner3-bg {
  background-image: url('~@/assets/banner3-bg.jpg');
  height: 100%;
  color: white;
  background-size: cover;
  background-position: center 100%;
}
</style>>