<template>
  <div class="publish">
    <nav-bar class='publish-nav'>
      <div slot='left' 
            @click='cancel'>取消</div>
      <div slot='center'>
        <p>分类<i class="el-icon-arrow-down"></i></p>
      </div>
      <div slot='right'>
        <i class="el-icon-check"></i>
      </div>
    </nav-bar>
    <el-input type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="textarea">
    </el-input>
    <edit-item></edit-item>
  </div>
</template>

<script>
  import navBar from '../../components/common/navbar.vue'
  import editItem from '../../components/common/editItem.vue'
  export default{
    name:'publish',
    components: {
      navBar,
      editItem
    },
    data() {
      return {
        isCancel: '/home',
        textarea: ''
      }
    },
    methods: {
      cancel() {
        this.$router.replace(this.isCancel)
      }
    }
}
</script>

<style scoped>
  .publish-nav {
    background-color: pink;
    color: white;
    font-size: 17px;
    letter-spacing: 2px;
  }
  .el-icon-arrow-down {
    font-size: 18px;
  }
  .el-icon-check {
    font-size: 20px;
  }
</style>