<template>
  <div id="content">
    <section>
      <p>hi</p>
    </section>
    <my-component>
      <p slot="header">hi</p>
      <p>hi 1</p>
    </my-component>
    <!--<div class="bar">-->
      <!--<div class="box b1"></div><div class="box b2"></div>-->
    <!--</div>-->
    <!--<div>-->
      <!--<div class="box b3"></div><div class="box b4"></div>-->
    <!--</div>-->
    <!--<div class="box5"></div>-->
    <!--<div style="text-align: center">-->
      <!--<div style="width: 300px; background-color: #5daf34">-->
        <!--<p>哈哈</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--<i class="material-icons1 intro2-image">textsms</i>-->
    <!--<el-button @click="CORS">CORS</el-button>-->
    <!--<el-button @click="testPolyfill">testPolyfill</el-button>-->
    <!--<transition name="fade">-->
      <!--<p v-if="show">hello</p>-->
    <!--</transition>-->
    <!--<el-button @click="testTransition">testTransition</el-button>-->
    <!--<i class="material-icons" style="font-size: 300px; color: #fff">account_circle</i>-->
    <!--<el-form ref="form" :model="form" :rules="rules">-->
      <!--<el-form-item prop="name">-->
        <!--<el-radio v-model="form.name" label="ltb">ltb</el-radio>-->
        <!--<el-radio v-model="form.name" label="hbj">hbj</el-radio>-->
        <!--&lt;!&ndash;<el-input placeholder="名称" v-model="form.name"></el-input>&ndash;&gt;-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button @click="testRadio">testRadio</el-button>-->
      <!--</el-form-item>-->
    <!--</el-form>-->
    <!--<p>测试字体大小</p>-->
    <!--<el-menu :default-active="activeIndex" mode="horizontal">-->
      <!--<el-menu-item index="1">1</el-menu-item>-->
      <!--<el-menu-item index="2">2</el-menu-item>-->
    <!--</el-menu>-->
    <!--<el-tabs>-->
      <!--<el-tab-pane label="1">1</el-tab-pane>-->
      <!--<el-tab-pane label="2">2</el-tab-pane>-->
    <!--</el-tabs>-->
    <!--<p>{{ message | capitalize }}</p>-->
    <!--<ol>-->
      <!--<li v-for="item in list" :key="item.id">{{ item.name }}</li>-->
    <!--</ol>-->
    <!--<el-popover-->
      <!--ref="popover1"-->
      <!--placement="bottom"-->
      <!--title="标题"-->
      <!--width="200"-->
      <!--trigger="hover"-->
      <!--content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">-->
    <!--</el-popover>-->
    <!--<el-button slot="append" @click="redirectUriTip" icon="el-icon-question" v-popover:popover1></el-button>-->
    <!--<el-button @click="redirect">redirect</el-button>-->
    <!--<el-button @click="cors">cors</el-button>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import common from 'onlyid-frontend-common'
  import axios from 'axios'

  Vue.component('my-component', {
    template: '<div><slot name="header">fallback content</slot><slot>fallback content2</slot></div>'
  })

  export default {
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        books: [
          {name: 'ltb'},
          {name: 'hbj'},
          {name: 'xy'}
        ],
        password: 'abc',
        tableData: Array(20).fill(item),
        form: {
          name: ''
        },
        rules: {
          name: [{required: true, message: '请选择类型', trigger: 'blur'}]
        },
        message: '',
        list: [{name: 'ltb', sex: 'male', id: 1}, {name: 'hbj', sex: 'male', id: 2}],
        activeIndex: '1',
        show: false,
        name: 'ltb',
        ltb: {
          name: 'ltb',
          sex: 'male'
        },
        counter: 0
      }
    },
    methods: {
      CORS () {
        axios.get('http://onlyid.net:3000/hi1/1', {
          withCredentials: true
        }).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.error(err)
        })
      },
      testPolyfill () {
        common.hi()
      },
      testTransition () {
        this.show = !this.show
      },
      testRadio () {
        this.$refs.form.validate((valid) => {
          if (!valid) {
            console.log('not valid')
          }
        })
      },
      redirect () {
        this.$axios({
          url: '/hi',
          maxRedirects: 0
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          if (err.response) {
            console.log(err.response)
          } else if (err.request) {
            console.log(err.request)
          } else {
            console.log(err)
          }
        })
      },
      cors () {
        console.log('here')
        this.$axios.get('/hi').then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
      },
      handleClick () {
//         this.name = 'hahaha'
      }
    },
    filters: {
      capitalize (value) {
//        debugger
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    mounted () {
      console.log(typeof Date())
      console.log(typeof new Date())
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bar {
    width:200px; height:20px;
    background-color: red;
  }
  .box{
    width:100px; height:20px;
    display:table-cell;
  }

  .b1{
    border-radius: 0 0 50%/20px 0;
    background-color: white;
  }

  .b2{
    border-radius: 0 0 0 50%/20px;
    background-color: white;
  }

  .b3{
    border-radius: 50% 0 0 0;
    background-color:red;
  }

  .b4{
    border-radius: 0 50% 0 0;
    background-color: red;
  }

  .box5{
    width:200px; height:100px;
    background-color: red;
  }

  /*.el-menu-item {*/
    /*color: #fa5555;*/
  /*}*/
  /*.el-tabs--top .el-tabs__item {*/
    /*color: #fa5555;*/
  /*}*/
  /*#id1 {*/
    /*font-size: 60px;*/
  /*}*/
  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .5s*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active in below version 2.1.8 *! {*/
    /*opacity: 0*/
  /*}*/
  /*@font-face {*/
    /*font-family: 'Material Icons1';*/
    /*font-style: normal;*/
    /*font-weight: 400;*/
    /*src: url(http://static.onlyid.net:8084/MaterialIcons-Regular.woff2) format('woff2'),*/
    /*url(http://static.onlyid.net:8084/MaterialIcons-Regular.woff) format('woff'),*/
    /*url(http://static.onlyid.net:8084/MaterialIcons-Regular.ttf) format('truetype');*/
  /*}*/
  /*.material-icons1 {*/
    /*font-family: 'Material Icons1';*/
    /*font-weight: normal;*/
    /*font-style: normal;*/
    /*font-size: 48px;  !* Preferred icon size *!*/
    /*display: inline-block;*/
    /*line-height: 1;*/
    /*text-transform: none;*/
    /*letter-spacing: normal;*/
    /*word-wrap: normal;*/
    /*white-space: nowrap;*/
    /*direction: ltr;*/

    /*!* Support for all WebKit browsers. *!*/
    /*-webkit-font-smoothing: antialiased;*/
    /*!* Support for Safari and Chrome. *!*/
    /*text-rendering: optimizeLegibility;*/

    /*!* Support for Firefox. *!*/
    /*-moz-osx-font-smoothing: grayscale;*/

    /*!* Support for IE. *!*/
    /*font-feature-settings: 'liga';*/
  /*}*/
</style>
