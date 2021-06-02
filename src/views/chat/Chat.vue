<template>
  <div>
    <chat-nav-bar></chat-nav-bar>
    
    <nav-bar-down/>
  </div>
</template>

<script>
  import navBarDown from '../../components/common/navBarDown.vue'
  
  import chatNavBar from './childChat/chatNavBar.vue'

  export default{
    name:'Chat',
    components: {
      chatNavBar,
      navBarDown
    }
}
</script>

<style scoped>
  .middle {
    display: flex;
  }
  .middle > p{
    flex: 1;
  }
</style>