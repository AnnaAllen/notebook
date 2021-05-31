<template>
  <div>
    <nav-bar class='calendar-nav'>
      <div slot='left'>
        <i class="el-icon-arrow-left"
            @click="butBack"></i>
      </div>
      <div slot='center'>日历</div>
    </nav-bar>
    <calendar-item/> 
    
  </div>
</template>

<script>
  import navBar from '../../components/common/navbar.vue'
  import calendarItem from './calendarChild/calendarItem.vue'

  export default{
    name:'calendar',
    components: {
      navBar,
      calendarItem
    },
    
    methods: {
      butBack() {
        this.$router.replace('/home')
      }
    }
}
</script>

<style scoped>
  
  .calendar-nav {
    background-color: pink;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .el-icon-arrow-left {
    font-size: 20px;
    font-weight: 1000;
  }
</style>
