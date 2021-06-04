<template>
  <div class="filtrate">
    <el-radio-group v-model="radio">
    <el-radio :label="1" class='e-radio'>全部</el-radio>
    <el-radio :label="3" class='e-radio'>日记</el-radio>
    <el-radio :label="6" class='e-radio'>事物</el-radio>
    <el-radio :label="9" class='e-radio'>工作笔记</el-radio>
  </el-radio-group>
  </div>
</template>

<script>
  export default{
    name:'filtrate',
    data () {
      return {
        radio: 3
      }
    }
}
</script>

<style scoped>
  .e-radio {
    /*margin: 5px 0;*/
    padding: 0 10px;
    height: 40px;
    text-align: left;
    line-height: 40px;
    width: 100%;
    color: white;
    font-size: 20px;
    border-bottom: 1px solid rgba(0,0,0,.3);
    background-color: rgba(0,0,0,.5);
  }
  .filtrate {
    position: absolute;
    top: 44px;
    left: 25%;
    width: 50%;
    
  }
</style>
<style>
  .el-radio__input.is-checked+.el-radio__label {
    color: pink;
  }
  .el-radio__input.is-checked .el-radio__inner {
    background-color: pink;
    color: pink;
    border-color: pink;
  }
</style>