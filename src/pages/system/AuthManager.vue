<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-select.width100(placeholder='操作员' filterable v-model='form.userId' @change='handleEditorChange')
            el-option(:value='item.id' :label='item.realName' :key='item.id' v-for='item in editors')
        el-col(:span='6')
          el-button(type='primary' @click='submit') 提交
    .page-content
      el-checkbox-group(v-model='form.menuIds')
        el-row(:gutter='30')
          el-col(:span='4' v-for='parent in totalMenus' :ke='parent.id').menus
            el-checkbox(:label='parent.id' :key='parent.id').parent {{parent.name}}
            .children
              el-checkbox.child(:label='child.id' :key='child.id' v-for='child in parent.children') {{child.name}}
</template>

<script>
export default {
  data() {
    return {
      form: {
        userId: '',
        menuIds: []
      },
      totalMenus: [],
      editors: []
    }
  },
  methods: {
    submit() {
      API.system.submitAuth(this.form).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
        }
      })
    },
    handleEditorChange(id) {
      this.getEditorInfo(id)
    },
    getEditorInfo(userId) {
      if(userId) {
        API.system.getEditorInfo({userId}).then(res => {
          const menus = res.data.data || []
          this.form.menuIds = menus.map(item => item.id)
        })
      }
    },
    getMenus() {
      API.common.menu().then(res => {
        let totalMenus = []
        res.data.data.forEach(item => {
          if(item.parentId == '0') {
            totalMenus.push(item)
          } else {
            totalMenus.forEach(parent => {
              if(item.parentId == parent.id) {
                if(!parent.children) {
                  parent.children = []
                }
                parent.children.push(item)
              }
            })
          }
        })

        this.totalMenus = totalMenus
      })
    },
    getEditorList() {
      API.system.getEditorList({
        isDelete: true
      }).then(res => {
        if(res.data.code === '0') {
          const data = res.data.data

          this.editors = data
          this.form.userId = data[0] ? data[0].id : ''
          this.getEditorInfo(this.form.userId)
        }
      })
    }
  },
  created() {
    this.getMenus()
    this.getEditorList()
  }
}
</script>

<style lang="less" scoped>
.page-content {
  background-color: rgba(241, 241, 241, 0.51);
  padding: 15px;
  border-radius: 3px;
}
.menus {
  border-right: 1px #e6e6e6 solid;
}
.parent {
  margin-bottom: 10px;
}
.children {
  padding-left: 15px;

  .child {
    display: block;
    margin-left: 0;
    margin-bottom: 5px;
  }
}
</style>
