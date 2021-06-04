<template>
  <div id="nav-bar-down">
    
        <div class="left" @click='changePath1' 
                          :style='isStyleAcitve1'>
          <i class="el-icon-s-management" :style='isStyleAcitve1'></i>
          <p>日记</p>
        </div>
        <div class="middle" @click='changePath2' 
                            :style='isStyleAcitve2'>
          <i class="el-icon-chat-line-square" :style='isStyleAcitve2'></i>
          <p>闲聊</p>
        </div>
        <div class="right" @click='changePath3' 
                            :style='isStyleAcitve3'>
          <i class="el-icon-s-custom" :style='isStyleAcitve3'></i>
          <p>我的</p>
        </div>
      
  </div>
</template>

<script>
  export default{
    name:'navBarDown',
    data() {
      return {
        path1: '/home',
        path2: '/chat',
        path3: '/about',
        isActive1: true,
        isActive2: false,
        isActive3: false,
        styleColor: 'pink'
      }
    },
    methods: {
      changePath1() {
        if(this.$route.path != this.path1)
        {
          this.isActive1 = true
          this.isActive2 = false
          this.isActive3 = false
          this.$router.replace(this.path1)
        }
      },
      changePath2() {
        if(this.$route.path != this.path2)
        {
          this.isActive1 = false
          this.isActive2 = true
          this.isActive3 = false
          this.$router.replace(this.path2)
        }
      },
      changePath3() {
        if(this.$route.path != this.path3)
        {
          this.isActive1 = false
          this.isActive2 = false
          this.isActive3 = true
          this.$router.replace(this.path3)
        }
      }
    },
    computed: {
      isStyleAcitve1() {
        return this.isActive1 ? {color: this.styleColor} : {}
      },
      isStyleAcitve2() {
        return this.isActive2 ? {color: this.styleColor} : {}
      },
      isStyleAcitve3() {
        return this.isActive3 ? {color: this.styleColor} : {}
      }
    }
}
</script>

<style scoped>
  #nav-bar-down {
    height: 49px;
    display: flex;
    background-color: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid rgba(0,0,0,.1);
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