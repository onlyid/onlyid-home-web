<template>
  <div>
    <p id="banner1">唯ID致力于建立中国统一的账号和认证体系，加入我们，共创未来</p>
    <div id="content">
      <div class="section">
        <p class="section-title">工作机会</p>
        <p class="section-summary">哪个角色让您游刃有余？</p>
        <div style="margin-top: 40px">
          <p>我们永远在寻找聪明、创新、足智多谋的高素质人才加入唯ID。</p>
          <el-row style="margin-top: 40px" type="flex" justify="space-around">
            <el-col :span="4">
              <position count="3" title="工程师" @click.native="goAnchor('allPositions')">
                <img src="../../assets/jianpan.png"/>
              </position>
            </el-col>
            <el-col :span="4">
              <position count="3" title="产品">
                <img src="../../assets/yinhang.png"/>
              </position>
            </el-col>
            <el-col :span="4">
              <position count="3" title="设计师">
                <img src="../../assets/zhaopian.png"/>
              </position>
            </el-col>
            <el-col :span="4">
              <position count="3" title="营销&销售">
                <img src="../../assets/kanban.png"/>
              </position>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section-bg-dark">
        <div class="section">
          <p class="section-title">待遇和福利</p>
          <p class="section-summary">为优秀的人才提供应有的待遇</p>
          <div style="margin-top: 40px;">
            <el-row type="flex" justify="space-between">
              <el-col :span="11">
                <benefit title="极具竞争力的总体薪酬" detail="我们为每一位员工提供极具竞争力的薪酬待遇。">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1.41 16.09V18H8.74v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V2h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H12.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="#FFF"></path></svg>
                </benefit>
              </el-col>
              <el-col :span="11">
                <benefit title="平衡工作和生活" detail="我们提供灵活和充裕的时间让人们休息和充电。">
                  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M16 0H0v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V7h2a2 2 0 0 0 2-2V2c0-1.11-.89-2-2-2zm0 5h-2V2h2v3zM0 16h16v2H0v-2z" fill="#FFF"></path></svg>
                </benefit>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-between" style="margin-top: 30px;">
              <el-col :span="11">
                <benefit title="职业发展" detail="我们提供不间断的反馈和众多机会，让人们在职业生涯中成长和发展。">
                  <svg width="20" height="12" viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg"><title>career-icon</title><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-rule="nonzero" d="M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"></path><path d="M-2-6h24v24H-2z"></path></g></svg>
                </benefit>
              </el-col>
              <el-col :span="11">
                <benefit title="多样和包容" detail="我们吸引多样性人才并提供包容的环境，确保每个人都得到尊重、被公平对待、可以在其擅长的职业一展身手。">
                  <svg width="22" height="14" viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg"><title>diversity-icon</title><g fill="none" fill-rule="evenodd"><path d="M-1-5h24v24H-1z"></path><path d="M15 6c1.66 0 2.99-1.34 2.99-3S16.66 0 15 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V14h14v-2.5C14 9.17 9.33 8 7 8zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V14h6v-2.5C22 9.17 17.33 8 15 8z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
                </benefit>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-between" style="margin-top: 30px;">
              <el-col :span="11">
                <benefit title="顶级的办公设备" detail="我们为每一位员工提供极好的办公设备（以及配套的软件工具链），确保每个人都可以表现出最好的自己。">
                  <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><path d="M20 14c1.1 0 1.99-.9 1.99-2L22 2c0-1.1-.9-2-2-2H4C2.9 0 2 .9 2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 2h16v10H4V2z" fill="#FFF"></path></svg>
                </benefit>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="section" ref="allPositions">
        <p class="section-title">所有职位</p>
        <p class="section-summary">加入我们，共创未来</p>
        <p>我们当前有18个公开职位供您选择。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Position from './Position'
  import Benefit from './Benefit'

  export default {
    components: {
      Position,
      Benefit
    },
    data () {
      return {
      }
    },
    methods: {
      goAnchor (selector) {
        this.$refs[selector].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner1 {
    background-image: url("../../assets/banner.jpg");
  }
  #content {
    font-size: 16px;
  }
</style>
