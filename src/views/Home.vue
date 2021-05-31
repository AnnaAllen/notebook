<template>
  <div class="home">
    <nav-bar class='home-nav'>
      <div slot='left'>
        <i class="el-icon-date"
            @click="calendar"></i>
        <i class="el-icon-search"></i>
      </div>
      <div slot='center'>全部
        <i class="el-icon-arrow-down"></i>
      </div>
      <div slot='right'>
        <i class="el-icon-edit"></i>
      </div>
    </nav-bar>
    <diary-item :diaryInfo='diaryInfo'/>
    
    
    

  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '../components/common/navbar.vue'
import diaryItem from '../components/common/diary.vue'

export default {
  name: 'Home',
  components: {
    navBar,
    diaryItem
  },
  data() {
    return {
      diaryInfo: [
        {
          time: '2021/5/31',
          min: '19:11',
          week: '周一',
          content: '今天天气很好'
        },
        {
          time: '2021/5/31',
          min: '19:11',
          week: '周二',
          content: '心情非常愉悦,天气也不错，但是周二课程很多'
        },
        {
          time: 'xxxx',
          min: '19:11',
          week: '周三',
          content: '今天要上课'
        }
      ],
      isCaldenarLink: '/calendar'
    }
  },
  methods: {
    calendar() {
      
        this.$router.replace(this.isCaldenarLink)
      
    }
  }
  
}
</script>

<style scoped>
  .home {
    height: 100vh;
    background-color: rgba(0,0,0,.05);
    /*overflow: hidden;*/
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
