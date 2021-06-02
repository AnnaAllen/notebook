<template>
  <div class="edit-item">
    <div class="ed-font">
      <p>Aa</p>
    </div>
    <div class="ed-background">
      <i class="el-icon-reading"></i>
    </div>
    <div class="ed-picture">
      <i class="el-icon-picture-outline"></i>
    </div>
    <div class="ed-local">
      <i class="el-icon-location-information"></i>
    </div>
    <div class="ed-time">
      <i class="el-icon-time"></i>
    </div>
  </div>
</template>

<script>
  export default{
    name:'editItem',
}
</script>

<style >
  .edit-item {
    height: 44px;
    display: flex;
    /*background-color: pink;*/
    text-align: center;
    line-height: 44px;
    border-top: 1px solid pink;
    border-bottom: 1px solid pink;
    font-size: 18px;
  }
  .edit-item > div {
    flex: 1;
  }
</style>