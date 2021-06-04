<template>
  <div class="about-buttom">
    <el-button type="danger" class='e-but'>退出登录</el-button>
  </div>
</template>

<script>
  export default{
    name:'aboutButtom',
}
</script>

<style scoped>
  .about-buttom {
    height: 130px;
    text-align: center;
    padding-top: 6%;
  }
  .e-but {
    width: 70%;
    background-color: pink;
    border-color: white;
    font-size: 16px;
    letter-spacing: 2px;
  }
</style>