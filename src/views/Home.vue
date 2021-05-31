<template>
  <div class="home">
    <nav-bar class='home-nav'>
      <div slot='left'>
        <i class="el-icon-date"></i>
        <i class="el-icon-search"></i>
      </div>
      <div slot='center'>全部
        <i class="el-icon-arrow-down"></i>
      </div>
      <div slot='right'>
        <i class="el-icon-edit"></i>
      </div>
    </nav-bar>
    
    

  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '../components/common/navbar.vue'

export default {
  name: 'Home',
  components: {
    navBar,
    
  }
}
</script>

<style scoped>
  .home {
    height: 100vh;
  }
  .home-nav {
    background-color: pink;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .el-icon-edit {
    font-size: 18px;
  }
  .el-icon-date {
    margin: 10px;
  }
  
</style>
