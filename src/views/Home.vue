<template>
  <div class="home">
    <nav-bar class='home-nav'>
      <div slot='left'>
        <i class="el-icon-date"
            @click="calendar"></i>
        <i class="el-icon-search"
            @click='search'></i>
      </div>
      <div slot='center' @click='filtrate'>全部
        <i class="el-icon-arrow-down" v-if='!isFiltrate'></i>
        <i class="el-icon-arrow-up" v-else></i>
      </div>
      <div slot='right'>
        <i class="el-icon-edit"
            @click='publish'></i>
      </div>
    </nav-bar>
    <diary-item :diaryInfo='diaryInfo'/>
    <home-filtrate v-show='isFiltrate'/>
    

  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '../components/common/navbar.vue'
import diaryItem from '../components/common/diary.vue'

import homeFiltrate from './HomeChild/filtrate.vue'

export default {
  name: 'Home',
  components: {
    navBar,
    diaryItem,
    homeFiltrate
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
      isCaldenarLink: '/calendar',
      isPublishLink: '/publish',
      isSearch: '/search',
      isFiltrate: false
    }
  },
  methods: {
    calendar() {
        this.$router.replace(this.isCaldenarLink)  
    },
    publish() {
      this.$router.replace(this.isPublishLink)
    },
    search() {
      this.$router.replace(this.isSearch)
    },
    filtrate() {
      this.isFiltrate = !this.isFiltrate
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
