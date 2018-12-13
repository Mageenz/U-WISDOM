<template lang="pug">
  .page
    .page-operatebar
      el-button(type='primary' icon='el-icon-plus' @click='isDialogShow=true') 新增
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='会员卡名称' prop='name')
          el-table-column(label='面值' prop='price')
          el-table-column(label='优惠金金额' prop='coupons')
          el-table-column(label='积分额' prop='points')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text' @click='editVipCard(row)') 编辑
              el-button(type='text' @click='deleteVipCard(row.id)') 删除
    el-dialog(:visible.sync='isDialogShow' title='新增会员卡' width='30%')
      el-form(label-position='top')
        el-form-item(label='编号：')
          el-input(placeholder='编号' v-model='form.code' clearable)
        el-form-item(label='会员卡名称：')
          el-input(placeholder='会员卡名称' v-model='form.name' clearable)
        el-form-item(label='优惠金：')
          el-input(placeholder='优惠金' v-model='form.coupons' clearable)
        el-form-item(label='积分额：')
          el-input(placeholder='积分额' v-model='form.points' clearable)
        el-form-item(label='面值：')
          el-input(placeholder='面值' v-model='form.price' clearable)
      .p-foot(slot='footer')
        el-button(type='primary' @click='submit') 提交
        el-button(@click='isDialogShow=false') 取消
</template>

<script>
export default {
  data() {
    return {
      isDialogShow: false,
      records: [],
      form: {
        code: '',
        name: '',
        coupons: '',
        points: '',
        price: ''
      }
    }
  },
  methods: {
    editVipCard(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.isDialogShow = true
    },
    deleteVipCard(id) {
      API.basic.deleteVipCard({id}).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
          this.getVipCardList()
        }
      })
    },
    getVipCardList() {
      API.basic.getVipCardList().then(res => {
        if(res.data.code === '0') {
          this.records = res.data.data
        }
      })
    },
    submit() {
      if(this.form.id) {
        API.basic.editVipCard(this.form).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getVipCardList()
          }
        })
      } else {
        API.basic.addVipCard(this.form).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getVipCardList()
          }
        })
      }
      
    }
  },
  mounted() {
    this.getVipCardList()
  }
}
</script>

