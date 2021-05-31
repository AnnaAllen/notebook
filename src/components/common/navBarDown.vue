<template>
  <div id="nav-bar-down">
    
        <div class="left" >
          <i class="el-icon-s-management"></i>
          <p>日记</p>
        </div>
        <div class="middle" >
          <i class="el-icon-chat-line-square"></i>
          <p>闲聊</p>
        </div>
        <div class="right" >
          <i class="el-icon-s-custom"></i>
          <p>我的</p>
        </div>
      
  </div>
</template>

<script>
  export default{
    name:'navBarDown',
}
</script>

<style scoped>
  #nav-bar-down {
    height: 49px;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    z-index: 9;
    text-align: center;
  }
  .left, .middle, .right {
    flex: 1;
  }
  i {
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 2px;
    color: rgba(0,0,0,0.5);
  }
  p {
    font-size: 10px;
  }
</style>