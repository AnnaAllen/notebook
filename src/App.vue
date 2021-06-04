<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
     <nav-bar-down/>
    
   
  </div>
</template>

<script>
import navBarDown from './components/common/navBarDown.vue'


export default {
  name: 'app',
  components: {
    navBarDown
    
  }
}
</script>

<style>
  @import 'assets/css/base.css'
</style>
