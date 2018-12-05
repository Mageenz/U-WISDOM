<template lang="pug">
  .page
    .page-content
      h2 发布消息：
      el-form(label-width='100px' ref='form' :model='form')
        el-form-item(label='发布对象：' prop='type')
          el-checkbox-group(v-model='form.type')
            el-checkbox(border label='1') 所有用户
            el-checkbox(border label='2') 会员
            el-checkbox(border label='3') VIP
            el-checkbox(border label='4') 区县代理
            el-checkbox(border label='5') 市级代理
            el-checkbox(border label='6') 商家
        el-form-item(label='发布区域：' prop='address')
          el-cascader(v-model='form.address' :options='areasSpec' change-on-select clearable)
        el-form-item(label='发布标题：' style='width:600px' prop='name')
          el-input(placeholder='发布标题' v-model='form.name' clearable)
        el-form-item(label='发布内容：' style='width:600px' prop='description')
          el-input(type='textarea' v-model='form.description' clearable)
        el-form-item(label='发布时间类型：' prop='dateType')
          el-radio(label='1' v-model='form.dateType') 立即发布
          el-radio(label='2' v-model='form.dateType') 定时发布
        el-form-item(label='发布时间：' v-if='form.dateType == 2' prop='date')
          el-date-picker(placeholder='发布时间' v-model='form.date' type='datetime' value-format='timestamp')
        el-form-item
          el-button(type='primary' @click='sendMessage') 提交
          el-button(@click='reset') 重置
</template>

<script>
import areas from '../../assets/common/areas'
const areasSpec = JSON.parse(JSON.stringify(areas))
areasSpec.unshift({
  value: 0,
  label: '全国'
})
areasSpec.forEach(item => {
  if(item.children) {
    item.children.unshift({
      value: 0,
      label: '全市'
    })
  }
})

export default {
  data() {
    return {
      form: {
        address: [],
        name: '',
        description: '',
        type: ['1'],
        dateType: '1',
        date: ''
      },
      areasSpec
    }
  },
  methods: {
    reset() {
      this.$refs.form.resetFields()
    },
    sendMessage() {
      const address = this.form.address
      const data = {
        provId: address[0],
        cityId: address[0] == 0 ? 0 : address[1],
        areaId: (address[0] == 0 || address[1] == 0) ? 0 : address[2],

        name: this.form.name,
        description: this.form.description,
        type: this.form.type.join(','),
        dateType: +this.form.dateType,
        date: this.form.dateType == 2 ? this.form.date : undefined
      }

      API.message.sendMessage(data).then(res => {
        this.$message.success('操作成功')
        this.reset()
      })
    }
  }
}
</script>

