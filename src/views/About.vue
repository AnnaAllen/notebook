<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nav-bar-down/>
  </div>
</template>

<script>
  import navBarDown from '../components/common/navBarDown.vue'

  export default {
    name: 'about',
    components :{
      navBarDown
    }
  }
</script>