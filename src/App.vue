<template>
  <div id="app">
    
    <router-view/>
    <main-nav-bar-down/>
  </div>
</template>

<script>
import mainNavBarDown from './components/content/mainNavBarDown.vue'

export default {
  name: 'app',
  components: {
    mainNavBarDown
  }
}
</script>

<style>
  @import 'assets/css/base.css'
</style>
