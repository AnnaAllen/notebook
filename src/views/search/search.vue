<template>
  <div class="search">
    <nav-bar>
      <div slot='left'>
        <i class='el-icon-arrow-left'
            @click='back'>返回</i>
      </div>
      <div slot='center'>搜索</div>
    </nav-bar>
    <el-input type="text"
              placeholder="请输入关键字"
              prefix-icon="el-icon-search"
              v-model="text"
              maxlength="10"
              show-word-limit>
    </el-input>
  </div>
</template>

<script>
  import navBar from '../../components/common/navbar.vue'
  export default{
    name:'search',
    components: {
      navBar
    },
    data() {
      return {
        text: ''
      }
    },
    methods: {
      back() {
        this.$router.replace('/home')
      }
    }
}
</script>

<style scoped>
  .nav-bar {
    background-color: pink;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
  }
</style>