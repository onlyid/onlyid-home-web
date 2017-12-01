<template>
  <div id="content">
    <i class="material-icons" style="font-size: 300px; color: #fff">account_circle</i>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="name">
        <el-radio v-model="form.name" label="ltb">ltb</el-radio>
        <el-radio v-model="form.name" label="hbj">hbj</el-radio>
        <!--<el-input placeholder="名称" v-model="form.name"></el-input>-->
      </el-form-item>
      <el-form-item>
        <el-button @click="testRadio">testRadio</el-button>
      </el-form-item>
    </el-form>
    <!--<el-menu :default-active="activeIndex">-->
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
    <el-popover
      ref="popover1"
      placement="bottom"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </el-popover>
    <el-button slot="append" @click="redirectUriTip" icon="el-icon-question" v-popover:popover1></el-button>
    <el-button @click="redirect">redirect</el-button>
    <el-button @click="cors">cors</el-button>
    <my-component ref="c"></my-component>
    <el-button @click="handleClick">修改子组件数据</el-button>
    <p ref="c1">hahahaha</p>
    <el-input v-model="name"></el-input>
    <person v-model="name"></person>
    <a href="#music">音乐</a>
    <div style="margin-top: 50px"></div>
    <p id="music">音乐列表</p>

  </div>
</template>

<script>
  import Vue from 'vue'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
  import ElForm from '../../node_modules/element-ui/packages/form/src/form.vue'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item.vue'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
  import ElRadio from '../../node_modules/element-ui/packages/radio/src/radio.vue'

  Vue.component('my-component', {
    template: '<div><p>{{ msg }}</p></div>',
    data () {
      return {
        msg: 'hahaa'
      }
    }
  })

  Vue.component('person', {
    props: ['value'],
    template: '<div><el-input v-model="name"></el-input></div>',
    data () {
      return {
      }
    },
    methods: {
      updateValue (event) {
        this.$emit('input', event.target.value)
      }
    },
    computed: {
      name: {
        set (newValue) {
          this.$emit('input', newValue)
        },
        get () {
          return this.value
        }
      }
    }
  })

  export default {
    name: 'Hi',
    data () {
      return {
        form: {
          name: ''
        },
        rules: {
          name: [{required: true, message: '请选择类型', trigger: 'blur'}]
        },
        message: '',
        list: [{name: 'ltb', sex: 'male', id: 1}, {name: 'hbj', sex: 'male', id: 2}],
        name: 'lll',
        activeIndex: '1'
      }
    },
    methods: {
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
        console.log(this.$refs.c1)
//        this.$refs.c.msg = 'hi'
      }
    },
    components: {
      ElRadio,
      ElInput,
      ElFormItem,
      ElForm,
      ElButton
    },
    filters: {
      capitalize (value) {
//        debugger
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    background-color: #7f7f7f;
  }
  .el-menu-item {
    color: #fa5555;
  }
  .el-tabs--top .el-tabs__item {
    color: #fa5555;
  }
  #id1 {
    font-size: 60px;
  }
</style>
