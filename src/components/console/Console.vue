<template>
  <div id="content">
    <div id="welcome">
      <span>{{ nickname }}</span>
      <el-button @click="logout" id="logout">退出</el-button>
    </div>
    <el-button @click="add" type="primary" style="margin-top: 50px">新建</el-button>
      <el-table :data="clients" id="table" row-class-name="row-bg" header-row-class-name="row-bg">
        <el-table-column prop="name" label="名称" width="700"></el-table-column>
        <el-table-column prop="type" label="类型" width="100"></el-table-column>
        <el-table-column label="">
          <template slot-scope="scope">
            <el-button @click="view(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  import config from '../../config'

  export default {
    name: 'User',
    data () {
      return {
        nickname: sessionStorage.getObj('user').nickname,
        clients: []
      }
    },
    methods: {
      logout () {
        this.$axios.post('/logout').then((res) => {
          sessionStorage.clear()
          this.$router.replace('/')
        }).catch((err) => {
          console.log(err)
        })
      },
      view (index) {
        this.$router.push('/console/clients/' + this.clients[index]._id)
      },
      add () {
        if (this.clients.length >= config.maxClientCount) {
          this.$message('最多只能创建10个client')
        } else {
          this.$router.push('/console/clients/add')
        }
      }
    },
    created () {
      const segue = sessionStorage.getItem('segue')
      sessionStorage.removeItem('segue')
      if (segue === 'delete') {
        this.$message({
          message: '已删除',
          type: 'success'
        })
      }

      this.$axios.get('/clients').then((res) => {
        this.clients = res.data.clients
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    padding: 20px 0px 50px;
    width: 980px;
    margin: 0 auto;
    min-height: 100%;
  }
  #welcome {
    float: right;
    text-align: right;
    font-size: 22px
  }
  #logout {
    margin-left: 20px;
  }
  #table {
    margin-top: 10px;
    font-size: 17px;
  }
</style>
