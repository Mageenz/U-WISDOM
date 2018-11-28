<template lang="pug">
  div(id='app')
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@c3: #909399;

body {
  color: #606266;
  font-size: 12px;
  overflow: hidden;
}
h2 {
  font-size: 16px;
  margin-bottom: 25px;
  color: #303133;
  font-weight: normal;
}
.c3 {
  color: @c3;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
a:active, a:visited, a:hover {
  color: #222;
}
.flex {
  display:  flex;

  .flex-1 {
    flex: 1;
  }
}
.width100 {
  width: 100% !important;
}
.ml15 {
  margin-left: 15px;
}
.mr15 {
  margin-right: 15px;
}

.el-form-item__label {
  // font-weight: bold;
}
.el-form-item__label, .el-form-item__content {
  font-size: 12px !important;
}
.page {
  .page-searchbar {
    margin-bottom: 30px;
  }
  .page-operatebar {
    margin-bottom: 15px;
  }
  .page-content {
    margin-bottom: 40px;
    .form-item {
      margin-bottom: 10px;
    }
  }
}
</style>
