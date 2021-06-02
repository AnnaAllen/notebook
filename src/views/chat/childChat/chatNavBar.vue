<template>
  <div class="chat-nav-bar">
    <div class="left"></div>
    <div class="center">
      <div @click='butAcitve1'>
        <p>最新</p>
      </div>
      <div @click='butAcitve2'>
        <p>热门</p>
      </div>
      <div @click='butAcitve3'>
        <p>我的</p>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default{
    name:'chatNavBar',
    data() {
      return {
        isAcitve1: true,
        isAcitve2: false,
        isAcitve3: false
      }
    },
    methods: {
      butAcitve1() {
        this.isAcitve1 = true
        this.isAcitve2 = false
        this.isAcitve3 = false
      },
      butAcitve1() {
        this.isAcitve1 = false
        this.isAcitve2 = true
        this.isAcitve3 = false
      },
      butAcitve1() {
        this.isAcitve1 = false
        this.isAcitve2 = false
        this.isAcitve3 = true
      }
    }
}
</script>

<style scoped>
  .chat-nav-bar {
    display: flex;
    height: 44px;
    background-color: pink;
    text-align: center;
    line-height: 44px;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .left , .right {
    
    width: 80px;
  }
  .center {
    display: flex;
    flex: 1;
    
  }
  .center > div {
    flex: 1;
  }
</style>