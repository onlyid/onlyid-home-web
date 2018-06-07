<template>
  <el-card shadow="never">
    <span style="font-size: 16px; margin-right: 20px">client 选择</span>
    <el-select v-model="selectedClient" value-key="_id" @change="handleChange">
      <el-option v-for="client in clients" :key="client._id" :label="client.name" :value="client"></el-option>
    </el-select>
    <p style="font-size: 16px; margin-top: 30px">client 基本信息</p>
    <table>
      <tr>
        <td class="c1">名称</td>
        <td class="c2">{{ selectedClient.name }}</td>
      </tr>
      <tr>
        <td class="c1">client id</td>
        <td class="c2">{{ selectedClient._id }}</td>
        <td class="c1">client secret</td>
        <td class="c2">{{ selectedClient.secret }}</td>
      </tr>
      <tr>
        <td class="c1">类型</td>
        <td class="c2">{{ selectedClient.type }}</td>
        <td class="c1">审核</td>
        <td class="c2">{{ review }}</td>
      </tr>
    </table>
  </el-card>
</template>

<script>
  function getClient (id) {
    for (const client of this.clients) {
      if (client._id === id) {
        return client
      }
    }
  }

  export default {
    data () {
      return {
        clients: '',
        selectedClient: ''
      }
    },
    methods: {
      handleChange (client) {
        this.$router.replace('/console/' + this.$route.path.split('/')[2] + '/' + client._id)
      }
    },
    async created () {
      try {
        const res = await this.$axios.get('/clients')
        this.clients = res.data.clients
        if (this.clients.length === 0) {
          this.$message('请先新建client')
          return this.$router.replace('/console/overview')
        }
        let id = this.$route.params.id
        // 如果id不存在 默认取clients列表第一个
        if (!id) {
          id = this.clients[0]._id
          this.$router.replace(this.$route.path + '/' + id)
        } else {
          this.selectedClient = getClient.call(this, id)
          this.$emit('selectClient', this.selectedClient)
        }
      } catch (err) {
        console.error(err)
      }
    },
    computed: {
      review () {
        // 刚初始化时 review为null 会报错
        if (!this.selectedClient) {
          return ''
        }
        switch (this.selectedClient.review.status) {
          case 'dev':
            return '开发中，未审核'
          case 'rejected':
            return '审核未通过'
          case 'approved':
            return '审核已通过'
          case 'ongoing':
            return '审核中，请等候'
        }
      }
    },
    watch: {
      // 侦听用户改地址栏和自身组件调$router.replace
      '$route' (newVal) {
        const id = newVal.params.id
        if (id) {
          this.selectedClient = getClient.call(this, id)
          this.$emit('selectClient', this.selectedClient)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    height: 25px;
  }
  .c1 {
    width: 100px;
    color: #7f7f7f;
  }
  .c2 {
    width: 250px;
  }
</style>
