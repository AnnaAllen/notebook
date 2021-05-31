<template>
  <div>
    <el-calendar v-model="value"
                  >
    </el-calendar>
  </div>
</template>

<script>
  export default{
    name:'calendarItem',
    data() {
      return {
        value: new Date()
      }
    },
}
</script>

<style>
  .el-calendar-table .el-calendar-day {
        height: 45px;
  }
  .el-calendar-table td.is-today {
    color: deeppink;
    
  }
  .el-calendar-table td.is-selected {
    background-color: pink;
  }
  .el-calendar-table .el-calendar-day:hover{
    background-color: pink;
  }
</style>