<template>
  <div class="about-item">
    <div class='left'><slot name='left'></slot></div>
    <div class='center'><slot name='center'></slot></div>
    <div class='right'><slot name='right'></slot></div>
  </div>
</template>

<script>
  export default{
    name:'aboutItem',
}
</script>

<style scoped>
  .about-item {
    height: 40px;
    display: flex;
    line-height: 40px;
    /*background-color: pink;*/
  }
  .left, .right {
    width: 50px;
    text-align: center;
    font-size: 20px;
  }
  .left {
    color: pink;
  }
  .right {
    color: rgba(0,0,0,.5);
  }
  .center {
    flex: 1;
  }
</style>