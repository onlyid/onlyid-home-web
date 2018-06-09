<template>
  <div>
    <div class="section">
      <p class="section-title">审核</p>
      <p class="subsection-title">所有待审核client（{{tableData.length}}个）</p>
      <el-table :data="tableData">
        <el-table-column label="icon" width="100">
          <img :src="scope.row.iconUrl" slot-scope="scope" width="64"/>
        </el-table-column>
        <el-table-column label="名称" prop="name" width="100"></el-table-column>
        <el-table-column label="类型" prop="type" width="80"></el-table-column>
        <el-table-column label="创建日期" width="140">
          <span slot-scope="scope">{{ moment(scope.row.createDate).format(config.dateFormat) }}</span>
        </el-table-column>
        <el-table-column label="网址/商店" width="180" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="scope.row.type === 'app'">{{ appStore(scope.row.review.appStore) }}</span>
            <span v-else><a :href="scope.row.review.website" target="_blank">{{ scope.row.review.website }}</a></span>
          </template>
        </el-table-column>
        <el-table-column label="提交日期" width="140">
          <span slot-scope="scope">{{ moment(scope.row.review.submitDate).format(config.dateFormat) }}</span>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span v-if="scope.row.review.status === 'approved'" style="color: #67C23A; font-size: 15px">已通过</span>
            <span v-else-if="scope.row.review.status === 'rejected'" style="color: #F56C6C; font-size: 15px">已拒绝</span>
            <template v-else>
              <el-button @click="updateReview('approved', scope.$index, scope.row)" type="success" plain>通过</el-button>
              <el-button @click="updateReview('rejected', scope.$index, scope.row)" type="danger" plain>拒绝</el-button>
            </template>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <div slot-scope="scope">
            <p style="font-size: 16px; color: #7f7f7f; margin-top: 0">开发者信息</p>
            <span class="expand-column-item">姓名：{{scope.row.developer.name}}</span>
            <span class="expand-column-item">手机号：{{scope.row.developer.user.mobile}}</span>
            <span class="expand-column-item">邮箱：{{scope.row.developer.email}}</span>
            <span class="expand-column-item">创建日期：{{moment(scope.row.developer.createDate).format(config.dateFormat)}}</span>
            <span class="expand-column-item">有效期：{{moment(scope.row.developer.expires).format(config.dateFormat)}}</span>
          </div>
        </el-table-column>
      </el-table>
    </div>
    <div class="section">
      <p class="section-title">统计</p>
      <p class="subsection-title">一周内新增开发者（{{tableData1.length}}位）</p>
      <el-table :data="tableData1">
        <el-table-column label="姓名" prop="name" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column label="手机号" prop="user.mobile"></el-table-column>
        <el-table-column label="邮箱" prop="email" show-overflow-tooltip width="170"></el-table-column>
        <el-table-column label="创建日期">
          <span slot-scope="scope">{{moment(scope.row.createDate).format(config.dateFormat)}}</span>
        </el-table-column>
        <el-table-column label="有效期">
          <span slot-scope="scope">{{moment(scope.row.expires).format(config.dateFormat)}}</span>
        </el-table-column>
        <el-table-column label="操作">
          <el-button @click="renew(scope.$index, scope.row)" slot-scope="scope" type="primary" plain>续费1年</el-button>
        </el-table-column>
        <el-table-column label="client个数" width="90">
          <span slot-scope="scope">{{ scope.row.clients.length }}</span>
        </el-table-column>
        <el-table-column type="expand">
          <div slot-scope="scope">
            <p style="font-size: 16px; color: #7f7f7f; margin-top: 0">client列表</p>
            <el-table :data="scope.row.clients" style="width: 420px">
              <el-table-column label="icon" width="100">
                <img :src="scope.row.iconUrl" slot-scope="scope" width="64"/>
              </el-table-column>
              <el-table-column label="名称" prop="name" width="100"></el-table-column>
              <el-table-column label="类型" prop="type" width="80"></el-table-column>
              <el-table-column label="创建日期" width="140">
                <span slot-scope="scope">{{ moment(scope.row.createDate).format(config.dateFormat) }}</span>
              </el-table-column>
            </el-table>
          </div>
        </el-table-column>
      </el-table>
      <p class="subsection-title">一周内过期开发者（{{tableData2.length}}位）</p>
      <el-table :data="tableData2">
        <el-table-column label="姓名" prop="name" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column label="手机号" prop="user.mobile"></el-table-column>
        <el-table-column label="邮箱" prop="email" show-overflow-tooltip width="170"></el-table-column>
        <el-table-column label="创建日期">
          <span slot-scope="scope">{{moment(scope.row.createDate).format(config.dateFormat)}}</span>
        </el-table-column>
        <el-table-column label="有效期">
          <span slot-scope="scope">{{moment(scope.row.expires).format(config.dateFormat)}}</span>
        </el-table-column>
        <el-table-column label="操作">
          <el-button @click="renew(scope.$index, scope.row)" slot-scope="scope" type="primary" plain>续费1年</el-button>
        </el-table-column>
        <el-table-column label="client个数" width="90">
          <span slot-scope="scope">{{ scope.row.clients.length }}</span>
        </el-table-column>
        <el-table-column type="expand">
          <div slot-scope="scope">
            <p style="font-size: 16px; color: #7f7f7f; margin-top: 0">client列表</p>
            <el-table :data="scope.row.clients" style="width: 420px">
              <el-table-column label="icon" width="100">
                <img :src="scope.row.iconUrl" slot-scope="scope" width="64"/>
              </el-table-column>
              <el-table-column label="名称" prop="name" width="100"></el-table-column>
              <el-table-column label="类型" prop="type" width="80"></el-table-column>
              <el-table-column label="创建日期" width="140">
                <span slot-scope="scope">{{ moment(scope.row.createDate).format(config.dateFormat) }}</span>
              </el-table-column>
            </el-table>
          </div>
        </el-table-column>
      </el-table>
      <p class="subsection-title">一周内新增client的已过期开发者（{{tableData3.length}}位）</p>
      <el-table :data="tableData3">
        <el-table-column label="姓名" prop="name" width="110" show-overflow-tooltip></el-table-column>
        <el-table-column label="手机号" prop="user.mobile"></el-table-column>
        <el-table-column label="邮箱" prop="email" show-overflow-tooltip width="170"></el-table-column>
        <el-table-column label="创建日期">
          <span slot-scope="scope">{{moment(scope.row.createDate).format(config.dateFormat)}}</span>
        </el-table-column>
        <el-table-column label="有效期">
          <span slot-scope="scope">{{moment(scope.row.expires).format(config.dateFormat)}}</span>
        </el-table-column>
        <el-table-column label="操作">
          <el-button @click="renew(scope.$index, scope.row)" slot-scope="scope" type="primary" plain>续费1年</el-button>
        </el-table-column>
        <el-table-column label="client个数" width="90">
          <span slot-scope="scope">{{ scope.row.clients.length }}</span>
        </el-table-column>
        <el-table-column type="expand">
          <div slot-scope="scope">
            <p style="font-size: 16px; color: #7f7f7f; margin-top: 0">client列表</p>
            <el-table :data="scope.row.clients" style="width: 420px">
              <el-table-column label="icon" width="100">
                <img :src="scope.row.iconUrl" slot-scope="scope" width="64"/>
              </el-table-column>
              <el-table-column label="名称" prop="name" width="100"></el-table-column>
              <el-table-column label="类型" prop="type" width="80"></el-table-column>
              <el-table-column label="创建日期" width="140">
                <span slot-scope="scope">{{ moment(scope.row.createDate).format(config.dateFormat) }}</span>
              </el-table-column>
            </el-table>
          </div>
        </el-table-column>
      </el-table>
      <p class="subsection-title">总体数据</p>
      <p style="text-align: center">
        client：<span class="count">{{clientCount}}</span> 个
        <span style="margin-left: 100px">开发者：<span class="count">{{developerCount}}</span> 位</span>
        <span style="margin-left: 100px">用户：<span class="count">{{userCount}}</span> 位</span>
      </p>
    </div>
  </div>
</template>

<script>
import config from '../config'
import moment from 'moment'

export default {
  data () {
    return {
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      moment,
      config,
      clientCount: '',
      developerCount: '',
      userCount: ''
    }
  },
  methods: {
    async updateReview (status, index, row) {
      try {
        await this.$axios.put('/admin/clients/' + row._id + '/reviews', {
          status
        })
        row.review.status = status
      } catch (err) {
        console.error(err)
      }
    },
    async renew (index, row) {
      try {
        await this.$axios.post('/admin/developers/' + row._id + '/renew')
        const newExpires = new Date(row.expires)
        newExpires.setFullYear(newExpires.getFullYear() + 1)
        row.expires = newExpires
      } catch (err) {
        console.error(err)
      }
    },
    appStore (value) {
      switch (value) {
        case 'apple':
          return 'App Store（iOS）'
        case 'mi':
          return '小米应用商店（Android）'
        case '360':
          return '360手机助手（Android）'
      }
    }
  },
  async created () {
    // 只允许管理员访问本页面
    const developer = sessionStorage.getObj('developer')
    const developerId = developer && developer._id
    if (developerId !== config.admin) {
      return this.$router.replace('/')
    }

    try {
      const res = await this.$axios.get('/admin/reviews/ongoing')
      this.tableData = res.data.clients

      const res1 = await this.$axios.get('/admin/stats/developers/new')
      this.tableData1 = res1.data.developers

      const res2 = await this.$axios.get('/admin/stats/developers/expiring')
      this.tableData2 = res2.data.developers

      const res3 = await this.$axios.get('/admin/stats/developers/expired-new-client')
      this.tableData3 = res3.data.developers

      const res4 = await this.$axios.get('/admin/stats/summary')
      console.log(res4.data)
      this.clientCount = res4.data.clientCount
      this.developerCount = res4.data.developerCount
      this.userCount = res4.data.userCount
    } catch (err) {
      console.error(err)
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .expand-column-item {
    margin-right: 50px;
  }
  .subsection-title {
    margin-top: 50px;
    font-size: 18px;
  }
  .section-title + .subsection-title {
    margin-top: 30px;
  }
  .count {
    color: #409EFF;
    font-size: 20px;
  }
  .section-title {
    font-size: 24px;
  }
</style>
