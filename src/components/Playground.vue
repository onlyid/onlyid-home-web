<template>
  <div id="content">
    <!--<div style="position: relative; background-color: #3b5898;">-->
      <!--<p style="background-color: #7f7f7f; z-index: -1;">hi</p>-->
      <!--<p style="position: absolute; top: 0; background-color: #E6A23C; margin: 0">he</p>-->
    <!--</div>-->
    <el-button @click="setSession">setSession</el-button>
    <el-button @click="printSession">printSession</el-button>
    <a href="http://onlyid.net:8085/playground" target="_blank">http://onlyid.net:8085/playground</a>
    <!--<p>哈哈-->
    <!--或或</p>-->
    <!--<p style="width: 80px; word-wrap: break-word; word-break: break-all">哈哈哈哈 he-lloahaaaaaaa 哈哈哈哈hello 哈哈哈哈hello 哈哈哈哈hello 哈哈哈哈hello 哈哈哈哈hello 哈哈哈哈hello 哈哈哈哈hello </p>-->
    <!--<hi1 @updatePerson="updatePerson"></hi1>-->
    <!--<p>{{ person.name }}</p>-->
    <!--<router-link to="#music"><el-button>哈哈</el-button></router-link>-->
    <!--<div id="music" style="margin-top: 1000px">music</div>-->
    <!--<el-button @click="replace">replace</el-button>-->
    <!--<el-button @click="pay">支付</el-button>-->
    <!--<form method="post" :action="payAction">-->
      <!--<input name="biz_content" :value="bizContent"/>-->
      <!--<input type="submit" value="submit"/>-->
    <!--</form>-->
    <!--<p>{{ name }}</p>-->
    <!--<hi1 v-model="name"></hi1>-->
    <!--<div class="div1">-->
      <!--<div class="div2"></div>-->
      <!--<p>div1 content</p>-->
    <!--</div>-->
    <!--<div style="height: 50px;">-->
    <!--<transition name="fade">-->
      <!--<p :key="name" style="position: absolute;">{{ name }}</p>-->
    <!--</transition>-->
    <!--</div>-->
    <!--<el-button @click="toggle">toggle</el-button>-->
    <!--<span class="wave1 center-box"><i class="waves"></i></span>-->
    <!--<i v-html="myHtml"></i>-->
    <!--<section>-->
      <!--<p>hi</p>-->
    <!--</section>-->
    <!--<my-component>-->
      <!--&lt;!&ndash;<p slot="header">hi my component</p>&ndash;&gt;-->
      <!--<p>hi 1</p>-->
    <!--</my-component>-->
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
  </div>
</template>

<script>
  import Vue from 'vue'
  import common from 'onlyid-frontend-common'

  Vue.component('my-component', {
    template: '<div><slot name="header">fallback content</slot><slot>fallback content2</slot><p style="font-size: 20px;">test</p></div>'
  })

  export default {
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        person: {
          name: 'ltb'
        },
        payAction: 'https://openapi.alipay.com/gateway.do',
        bizContent: JSON.stringify({
          out_trade_no: Date.now(),
          total_amount: 0.01,
          subject: '测试',
          body: '',
          product_code: 'FAST_INSTANT_TRADE_PAY'
        }),
        dialogVisible: false,
        isWidth100: false,
        img: require('../assets/logo.png'),
        myHtml: '<a href="sogou.com">hi</a>',
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
        activeIndex: 'wock',
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
      setSession () {
        sessionStorage.name = 'ltb from home'
      },
      printSession () {
        console.log(sessionStorage.name)
      },
      updatePerson (person) {
        this.person.name = 'hbj'
        this.person = person
      },
      replace () {
        location.replace('http://www.sogou.com')
      },
      toggle () {
        this.name = 'hbj'
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
    created () {
      console.log('created')
    },
    mounted () {
      console.log('mounted')
      console.log(opener.location)
    },
    beforeDestroy () {
      console.log('beforeDestroy')
    },
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .avatar-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
    vertical-align: middle;
  }
  .div1 {
    width: 100px;
    height: 100px;
    box-shadow: 0 3px 5px 0 rgba(24,44,79,.05), 0 5px 15px 0 rgba(24,44,79,.1);
    margin-bottom: 50px;
    margin-left: 50px;
    position: relative;
    background-color: white;
  }
  .div2 {
    position: absolute;
    left: 100%;
    top: 20px;
    width: 20px;
    height: 40px;
    /*background-color: #E6A23C;*/
    overflow: hidden;
  }
  .div2::after {
    position: absolute;
    top: 10px;
    left: 0px;
    content: '';
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 3px 5px 0 rgba(24,44,79,.05), 0 5px 15px 0 rgba(24,44,79,.1);
    transform: translateX(-50%) rotate(-45deg);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .waves::before {
    position: absolute;
    background: #E4E7ED;
    width: 50px;
    height: 50px;
    content: "";
    display: block;
    border-radius: 50%;
    animation: wave-animate 3s infinite ease-out;
  }
  @keyframes wave-animate {
    0% {
      transform: scale(0);
      opacity: 1;
      transform-origin: center
    }
    100% {
      transform: scale(3);
      opacity: 0;
      transform-origin: center
    }
  }
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

</style>
