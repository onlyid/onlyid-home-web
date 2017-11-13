<template>
  <div>
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
        message: '',
        list: [{name: 'ltb', sex: 'male', id: 1}, {name: 'hbj', sex: 'male', id: 2}],
        name: 'lll',
        activeIndex: '1'
      }
    },
    methods: {
      handleClick () {
        console.log(this.$refs.c1)
//        this.$refs.c.msg = 'hi'
      }
    },
    components: {
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
