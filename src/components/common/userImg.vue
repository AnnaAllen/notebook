<template>
  <div class="user-img">
    <div class="left"></div>
    <div class="center">
      <div>
        <el-avatar :size="70" 
                    :src="circleUrl"
                    class='e-avatar'></el-avatar>
        <p>{{userName}}</p>

      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default{
    name:'userImg',
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        userName: 'Anna'
      }
    }
}
</script>

<style scoped>
  .user-img {
    height: 200px;
    background-color: pink;
    display: flex;
    text-align: center;
    padding-top: 15%;
    /*line-height: 200px;*/
  }
  .left, .right, .center {
    flex: 1;
  }
  .e-avatar {
    border: 2px solid white;
    margin-bottom: 5px;
  }
  
</style>