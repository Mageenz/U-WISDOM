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
body {
  color: #606266;
  font-size: 14px;
  overflow: hidden;
}
h2 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #303133;
  font-weight: normal;
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
  width: 100%;
}
.page-searchbar {
    margin-bottom: 30px;
}
</style>
