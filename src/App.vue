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
  font-size: 15px;
  margin-bottom: 25px;
  color: #303133;
  font-weight: bold;
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
    margin-bottom: 15px;
  }
  .page-operatebar {
    margin-bottom: 15px;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 3px;
  }
  .page-content {
    margin-bottom: 40px;
    .form-item {
      margin-bottom: 10px;
    }
  }
  .page-pagination {
    text-align: center;
    margin-top: 30px;
  }
}
.table {
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
  th,td {
    padding: 8px 10px;
    line-height: 23px;
    border: 1px solid #ebeef5;
  }
  th {
    background: #f8fbfd;
    text-align: left;
    color: #909399;
    font-weight: 700;
  }
  td {
    white-space: normal;
    word-break: break-all;
    color: #606266;
  } 
}
.table-layout-main {
  font-size: 12px;
  line-height: 23px;

  th {
    width: 16%;
  }
  td {
    width: 34%;
  }
}
  
  
  
</style>
