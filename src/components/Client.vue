<template>
  <div id="content">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>client</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="content1">
      <p class="item">
        <span class="item-title">名称：</span><span class="item-detail">{{ client.name }}</span>
      </p>
      <div class="gradient-hr"/>
      <p class="item">
        <span class="item-title">client id: </span><span class="item-detail">{{ client._id }}</span>
      </p>
      <div class="gradient-hr"/>
      <p class="item">
        <span class="item-title">client secret: </span><span class="item-detail">{{ client.secret }}</span>
      </p>
      <div class="gradient-hr"/>
      <p class="item">
        <span class="item-title">redirect uri: </span><span class="item-detail">{{ client.redirectUris ? client.redirectUris[0] : '' }}</span>
      </p>
      <div class="gradient-hr"/>
      <p class="item">
        <span class="item-title">类型：</span><span class="item-detail">{{ client.type }}</span>
      </p>
      <div style="padding-top: 30px;">
        <el-row type="flex" :gutter="100" justify="center">
          <el-col :span="5">
            <el-button type="danger" @click="confirmDelete">删除</el-button>
          </el-col>
          <el-col :span="5">
            <el-button @click="update">修改</el-button>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-dialog :show-close="false" :visible="dialogVisible" width="30%">
      <p class="dialog-content">{{ confirmDeleteText }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="delete1">删除</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        client: {},
        dialogVisible: false,
        confirmDeleteText: ''
      }
    },
    methods: {
      confirmDelete () {
        this.dialogVisible = true
      },
      delete1 () {
        this.$axios.delete('/clients/' + this.client._id).then((res) => {
          sessionStorage.setItem('segue', 'delete')
          this.$router.replace('/console')
        }).catch((err) => {
          console.log(err)
        })
      },
      update () {
        this.$router.push('/console/clients/' + this.$route.params.id + '/update')
      }
    },
    created () {
      this.$axios.get('/clients/' + this.$route.params.id).then((res) => {
        this.client = res.data.client
        this.confirmDeleteText = '删除' + this.client.name + '？'
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    padding: 50px 0px;
    width: 980px;
    margin: 0 auto;
    font-size: 17px;
  }
  #content1 {
    padding-top: 20px;
    width: 700px;
    margin: 0 auto;
  }
  .item {
    margin: 20px 0px;
  }
  .item-title {
    display: inline-block;
    width: 200px;
  }
  .item-detail {
    display: inline-block;
    width: 500px;
    word-wrap: break-word;
    word-break:break-all;
    vertical-align: top;
  }
</style>
