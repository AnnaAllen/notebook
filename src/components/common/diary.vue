<template>
  <div class="diary">
    <!-- 这是一个日记板块 -->

  <el-timeline>

    <el-row class='e-row' 
            :gutter='5'
            v-for="item in diaryInfo">
      <el-col :span="5">
        <div  class="e-aside">
          <p style="margin-bottom: 5px;">31 {{item.week}} </p>
          <p>2021/5</p>
          
        </div>
      </el-col>

      <el-col :span="19" >
        <el-timeline-item :timestamp="item.min" 
                          placement="top" >
            <el-card class='time-item'>
              <p>{{item.content}}</p>
            </el-card>
        </el-timeline-item>
      </el-col>

    </el-row>
  </el-timeline>

  </div>
</template>

<script>
  export default{
    name:'diary',
    props:{
      diaryInfo: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>

<style scoped>

  .e-row {
    padding: 10px;
    
  }
  .e-aside {
    /*background-color: pink;*/
    /*height: 35px;*/
    /*line-height: 35px;*/
    padding: 5px;
    border-radius: 4px;
    /*border: 1px solid pink;*/
    text-align: center;
    font-size: 5px;
    background-color: white;
  }

  .e-content {
    /*background-color: pink;*/
    height: 100px;
    /*line-height: 100px;*/
    border-radius: 4px;
    /*border: 1px solid pink;*/
    padding: 5px;
    background-color: white;

  }
  .content-time {
    font-size: 10px;
    position: relative;
    top: 50px;
    left: 0;
  }
  .time-item {
    font-size: 14px;
  }
</style>