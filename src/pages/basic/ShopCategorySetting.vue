<template lang="pug">
  .page
    .page-operatebar
      el-button(type='primary' icon='el-icon-plus' @click='isDialogShow=true') 新增
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-select.width100(placeholder='请选择分类级别' v-model='searchForm.catClass' clearable)
            el-option(:value='item.value' :label='item.label' :key='item.value' v-for='item in level')
        el-col(:span='4')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='分类名称' prop='name')
          el-table-column(label='分类级别' prop='catClass')
            template(slot-scope='{row}')
              span(v-if='row.catClass == 1') 一级分类
              span(v-if='row.catClass == 2') 二级分类
          el-table-column(label='图标' prop='wapBannerUrl')
          el-table-column(label='排序' prop='showIndex')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text' @click='editCategory(row)') 编辑
              el-button(type='text' @click='deleteCategory(row.id)') 删除
    el-dialog(:visible.sync='isDialogShow' title='新增分类' width='30%')
      el-form(label-position='top')
        el-form-item(label='菜单名称：')
          el-input(placeholder='请输入菜单名称' v-model='form.name' clearable)
        el-form-item(label='排序')
          el-input(placeholder='请输入排序' v-model='form.showIndex' clearable)
        el-form-item(label='前置说明：')
          el-input(placeholder='前置说明：' v-model='form.frontDesc' clearable)
        el-form-item(label='前置名称：')
          el-input(placeholder='前置名称：' v-model='form.frontName' clearable)
        el-form-item(label='是否有效：')
          el-radio(:label='1' v-model='form.state') 有效
          el-radio(:label='0' v-model='form.state') 无效
        el-form-item(label='菜单级别：')
          el-select.width100(placeholder='请选择菜单级别' v-model='form.catClass' clearable)
            el-option(:value='item.value' :label='item.label' :key='item.value' v-for='item in level')
        el-form-item(label='上级菜单：')
          el-select.width100(placeholder='请选择上级菜单' v-model='form.parentId' clearable)
            el-option(value='0' label='无')
            el-option(:value='item.id' :label='item.name' v-for='item in categorys')
      .foot(slot='footer')   
        el-button(type='primary' @click='addCategory') 提交
        el-button(@click='isDialogShow=false') 取消
</template>

<script>
export default {
  data() {
    return {
      records: [],
      searchForm: {
        catClass: ''
      },
      isDialogShow: false,
      form: {
        name: '',
        frontDesc: '',
        frontName: '',
        catClass: 1,
        showIndex: 1,
        state: 1,
        wapBannerUrl: 'xxx',
        parentId: '0'
      },
      categorys: [],
      level: [
        {value: 1, label: '一级分类'},
        {value: 2, label: '二级分类'},
      ]
    }
  },
  methods: {
    editCategory(row) {
      this.form = row
      this.isDialogShow = true
    },
    deleteCategory(id) {
      API.basic.deleteCategory({id}).then(res => {
        this.getCategory()
      })
    },
    addCategory() {
      if(this.form.id) {
        API.basic.editCategory(this.form).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getCategory()
          }
        })
      } else {
        API.basic.addCategory(this.form).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getCategory()
          }
        })
      }
    },
    search() {
      this.getCategory()
    },
    getCategory() {
      API.basic.getCategoryList(this.searchForm).then(res => {
        this.records = res.data.data
      })
    },
    getCategoryAll() {
      API.basic.getCategoryList().then(res => {
        this.categorys = res.data.data
      })
    }
  },
  created() {
    this.getCategory()
    this.getCategoryAll()
  }
}
</script>

