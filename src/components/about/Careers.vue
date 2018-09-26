<template>
  <div>
    <p id="banner">加入我们，共创未来</p>
    <div class="section">
      <p class="section-title">工作机会</p>
      <p class="section-summary">哪个角色让你游刃有余？</p>
      <div style="margin-top: 40px">
        <p>我们永远在寻找聪明、创新的高素质人才。</p>
        <el-row style="margin-top: 40px" type="flex" justify="space-around">
          <el-col :span="4">
            <position :count="positions[0].length" title="工程师" @click.native="goPositions(0)">
              <img src="../../assets/jianpan.png"/>
            </position>
          </el-col>
          <el-col :span="4">
            <position :count="positions[1].length" title="产品" @click.native="goPositions(1)">
              <img src="../../assets/yinhang.png"/>
            </position>
          </el-col>
          <el-col :span="4">
            <position :count="positions[2].length" title="设计师" @click.native="goPositions(2)">
              <img src="../../assets/zhaopian.png"/>
            </position>
          </el-col>
          <el-col :span="4">
            <position :count="positions[3].length" title="营销&销售" @click.native="goPositions(3)">
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
              <benefit title="极具竞争力的总体薪酬" detail="为每一位员工提供极具竞争力的薪酬待遇">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1.41 16.09V18H8.74v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V2h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H12.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="#FFF"></path></svg>
              </benefit>
            </el-col>
            <el-col :span="11">
              <benefit title="平衡工作和生活" detail="提供灵活和充裕的时间让人们休息和充电">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M16 0H0v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V7h2a2 2 0 0 0 2-2V2c0-1.11-.89-2-2-2zm0 5h-2V2h2v3zM0 16h16v2H0v-2z" fill="#FFF"></path></svg>
              </benefit>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between" style="margin-top: 30px;">
            <el-col :span="11">
              <benefit title="职业发展" detail="提供不间断的反馈和众多机会，让人们成长和发展">
                <svg width="20" height="12" viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg"><title>career-icon</title><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-rule="nonzero" d="M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"></path><path d="M-2-6h24v24H-2z"></path></g></svg>
              </benefit>
            </el-col>
            <el-col :span="11">
              <benefit title="多样和包容" detail="吸引多样性人才并提供包容的环境，让每个人都可以大展身手">
                <svg width="22" height="14" viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg"><title>diversity-icon</title><g fill="none" fill-rule="evenodd"><path d="M-1-5h24v24H-1z"></path><path d="M15 6c1.66 0 2.99-1.34 2.99-3S16.66 0 15 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V14h14v-2.5C14 9.17 9.33 8 7 8zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V14h6v-2.5C22 9.17 17.33 8 15 8z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
              </benefit>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between" style="margin-top: 30px;">
            <el-col :span="11">
              <benefit title="顶级的办公设备" detail="提供极好的办公设备，确保大家都表现出最好的自己">
                <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><path d="M20 14c1.1 0 1.99-.9 1.99-2L22 2c0-1.1-.9-2-2-2H4C2.9 0 2 .9 2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 2h16v10H4V2z" fill="#FFF"></path></svg>
              </benefit>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="section" id="positions">
      <p class="section-title">所有职位</p>
      <p class="section-summary">加入我们，共创未来</p>
      <div style="margin-top: 40px">
        <p>当前有{{ positionsCount }}个公开职位供你选择，所有职位特别优秀者可忽略学历、工作年限要求，请投递简历至：join@onlyid.net。</p>
        <el-row style="min-height: 400px; margin-top: 40px;">
          <el-col :span="6">
            <el-menu unique-opened @select="handleSelect" :default-active="activeIndex">
              <el-submenu index="1">
                <template slot="title"><img src="../../assets/jianpan.png" class="tab-icon"/>工程师</template>
                <el-menu-item v-for="position in positions[0]" :key="position" :index="position">{{position}}</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><img src="../../assets/yinhang.png" class="tab-icon"/>产品</template>
                <el-menu-item v-for="position in positions[1]" :key="position" :index="position">{{position}}</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><img src="../../assets/zhaopian.png" class="tab-icon"/>设计师</template>
                <el-menu-item v-for="position in positions[2]" :key="position" :index="position">{{position}}</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title"><img src="../../assets/kanban.png" class="tab-icon"/>营销&销售</template>
                <el-menu-item v-for="position in positions[3]" :key="position" :index="position">{{position}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="16" :offset="2">
            <p style="color: #7f7f7f; font-size: 16px">岗位职责</p>
            <p v-html="responsibility"></p>
            <p style="color: #7f7f7f; font-size: 16px; margin-top: 40px">任职要求</p>
            <p v-html="requirement"></p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import Position from './Position'
  import Benefit from './Benefit'
  import common from 'onlyid-web-common'

  export default {
    components: {Position, Benefit},
    data () {
      return {
        activeIndex: 'Web工程师（Vue.js）',
        positions: [['Web工程师（Vue.js）', 'Node.js工程师', 'Android工程师', 'iOS工程师'],
          ['产品经理', '产品运营'],
          ['UI设计师'],
          ['销售经理', '电话销售', '客服专员']],
        responsibility: '',
        requirement: ''
      }
    },
    methods: {
      goPositions (index) {
        index = this.positions[index][0]
        common.goAnchor('#positions')
        this.activeIndex = index
        this.handleSelect(index)
      },
      handleSelect (key, keyPath) {
        switch (key) {
          case 'Web工程师（Vue.js）':
            this.responsibility = '唯ID官网开发；<br/>唯ID服务管理系统开发；<br/>唯ID业务管理系统开发；<br/>唯ID开放平台系统开发。'
            this.requirement = '具备1年以上前端工作经验，本科及以上学历；<br/>精通HTML5和CSS3技术和JavaScript开发语言；<br/>熟练掌握Vue.js前端开发框架；<br/>熟练掌握各种浏览器的兼容性匹配技术、前端页面性能调试和优化技术；<br/>熟悉Git代码管理，代码风格规范严谨工整；<br/>有管理经验优先。'
            break
          case 'Node.js工程师':
            this.responsibility = '负责开发公司各平台系统的前端功能及交互效果的实现；<br/>跟设计师和后端工程师相互配合共同完成完整的产品功能；<br/>负责PC、移动Web、APP版本H5页面的制作。'
            this.requirement = '本科及以上学历，相关工作经验1年及以上；<br/>熟悉Node.js、Web开发流程、具备软件架构设计能力；<br/>精通JavaScript语言，熟练使用至少一种Node.js应用框架，如Express；<br/>熟悉nginx常用配置<br/>精通XML、JSON等接口开发；<br/>熟悉LINUX操作系统及常用的LINUX操作命令，熟悉网络编程；<br/>Github使用者、有开源项目贡献者优先考虑。'
            break
          case 'Android工程师':
            this.responsibility = '与产品经理一起设计唯ID SDK 能力与唯ID组件的功能定义、界面定制化方案；<br/>唯ID SDK 开发；<br/>唯ID组件开发（手机帐号系列、IDaaS系列）。'
            this.requirement = '精通 Android 平台的模块化设计架构，能够设计出 SDK 和 UI 组件方案，并实现定制化 UI 组件界面（布局、颜色、纹理等）；<br/>熟悉 Android 平台的界面开发技术，能够根据产品需要完成丰富的交互功能和 UI 展现；<br/>熟悉 Android 平台的内存管理机制，懂得内存优化技术；<br/>对界面美观有苛刻的要求，完美主义者，了解 Android Design 的设计风格和元素；<br/>掌握基本的产品设计、交互设计、用户体验知识；<br/>能够与产品经理、设计师、用户进行深入的沟通和交流；<br/>热衷于学习与自我修炼，喜欢阅读英文原版技术资料；<br/>Github 使用者、有开源项目贡献者优先考虑。'
            break
          case 'iOS工程师':
            this.responsibility = '负责 iOS 平台的开发，iOS SDK 的开发；<br/>负责参与公司核心业务线的开发；<br/>指导客户集成公司产品，负责支持公司技术支持和客服团队等。'
            this.requirement = '本科以上学历、计算机等相关专业经验者，优先；<br/>精通 iOS 开发，熟练理解设计模式和 iOS UI 框架，熟悉开源项目；<br/>有优秀的团队合作意识，负责任的态度；<br/>对代码规范有较高的认识和要求；<br/>有丰富完整的 iOS 开发经验，有代表性产品或上线产品优先；<br/>公司提供广阔的上升空间，愿意与公司共同快速发展，有擅长特殊领域技能者优先。'
            break
          case '产品经理':
            this.responsibility = '理解产品架构和业务发展，对面向开发者的平台需求和易用性负责；<br/>主要负责“手机账号”等平台产品的功能策划和产品设计工作；<br/>协助团队掌握需求，推动团队紧密合作达成产品目标；<br/>关注产品运营的全过程，不断优化迭代、提升产品质量。'
            this.requirement = '1年以上的平台产品或商业产品经验，能将产品知识和经验充分应用于实践；<br/>对面向开发者的产品有深入的理解，熟悉开放平台等平台类产品；<br/>对移动互联网有深刻的认识和理解，了解多种云服务业务；<br/>具备敏锐的商业意识、广阔的视野、良好的洞察力和创造性的思维。'
            break
          case '产品运营':
            this.responsibility = '理解产品架构和业务发展，对平台生态和产品运营效果负责；<br/>运营现有平台产品，通过理解客户推动产品迭代，促进使用；<br/>跟踪业务数据变化，持续不断的以增长为目标进行优化；<br/>分析客户行为和市场趋势，发现商业机会和客户需求。'
            this.requirement = '1年以上的产品运营和用户运营经验，能将运营手段和经验充分应用于工作；<br/>对功能型产品的产品运营有深入的理解，熟悉开放平台等平台类产品；<br/>善于对数据进行分析和使用，具备将运营手段和数据结果对应的能力；<br/>具备敏锐的商业意识、广阔的视野、良好的洞察力和创造性的思维。'
            break
          case 'UI设计师':
            this.responsibility = '负责维护现有产品 (主要为手机账号和企业IDaaS解决方案)；<br/>负责完善各平台UI设计规范&流程，推动效果落地；<br/>负责项目中各种交互界面、图标、LOGO、按钮等相关元素的设计与制作；<br/>准确抓取需求重点，协助产品经理优化交互原型，提升用户体验；<br/>收集和分析用户对GUI的需求，与产品经理/交互设计师共同研究更合适的功能/交互/界面设计；<br/>与开发保持沟通配合并跟踪上线效果和还原度。'
            this.requirement = '大专以上学历，美术、广告、视觉设计等相关专业，1年以上相关经验；<br/>精通PS，AI, Sketch等流行设计软件, 熟悉Axure, Xmind, Flinto, Principle 等主流原型/交互设计软件；<br/>对产品/ 交互设计有深入研究；<br/>专注研究移动端GUI 趋势, 并能合适应用在设计任务当中；<br/>具备良好沟通能力，与需求方进行深入讨论，完善视觉/使用效果；<br/>支持创新，对新事物具有良好的接受性，能在团队里提出新思路，并付诸行动。'
            break
          case '销售经理':
            this.responsibility = '负责唯ID相关产品的销售，完成销售指标。'
            this.requirement = '大专以上学历，1年以上销售经验；<br/>熟悉大客户销售的不同阶段，运用相应销售策略，促进签单回款；<br/>具有很强的沟通能力和亲和力，积极主动有热情；<br/>执行力强，注重结果。'
            break
          case '电话销售':
            this.responsibility = '通过电话销售，挖掘潜在客户；<br/>协调内外部资源，满足客户需求，完成销售目标。'
            this.requirement = '大专以上学历，1年以上电话销售经验；<br/>具有较强的客户需求挖掘、引导能力，沟通能力强；<br/>了解互联网、移动互联网行业，学习能力强；<br/>工作积极主动有热情，声音甜美，有亲和力。'
            break
          case '客服专员':
            this.responsibility = '负责大客户日常的维护和管理；<br/>负责协调内部各相关部门，解决客户集成中的技术问题和产品需求；<br/>构建大客户服务体系，不断总结形成方法论，并对典型客户进行梳理总结，树立样板客户；<br/>客户集成上线后，保持与客户的沟通，及时跟踪客户反馈。'
            this.requirement = '具备较强的资源协调能力及客户服务意识；<br/>具备优秀的沟通和执行能力；<br/>具备团队合作精神与较强的责任心，有一定的团队协调能力；<br/>乐观向上，能够承受工作压力，适应快节奏高效的工作生活；<br/>熟悉移动互联网产品流程，具有计算机开发经验者优先。'
            break
        }
      }
    },
    computed: {
      positionsCount () {
        let count = 0
        this.positions.forEach((ps) => {
          count += ps.length
        })
        return count
      }
    },
    mounted () {
      this.activeIndex = this.positions[0][0]
      this.handleSelect(this.activeIndex)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner {
    background-image: url("../../assets/banner.jpg");
  }
  .tab-icon {
    vertical-align: middle;
    margin-right: 20px;
    width: 32px;
  }
</style>
