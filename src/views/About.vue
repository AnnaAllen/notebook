<template>
  <div class="about">
    <user-img></user-img>
    <about-item class='top'>
      <div slot='left'>
        <i class="el-icon-edit"></i>
      </div>
      <div slot='center' class="about-center">资料修改</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>
    <about-item class='normal'>
      <div slot='left'>
        <i class="el-icon-lollipop"></i>
      </div>
      <div slot='center'>升级为高级用户</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>
    <about-item class='top'>
      <div slot='left'>
        <i class="el-icon-bell"></i>
      </div>
      <div slot='center' class="about-center">系统通知</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>
    <about-item class='top'>
      <div slot='left'>
        <i class="el-icon-sunny"></i>
      </div>
      <div slot='center' class="about-center">好评鼓励</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>
    <about-item class='normal'>
      <div slot='left'>
        <i class="el-icon-more-outline"></i>
      </div>
      <div slot='center' class='about-center'>更多功能</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>
    <about-item class='normal'>
      <div slot='left'>
        <i class="el-icon-s-tools"></i>
      </div>
      <div slot='center' class="about-center">设置</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>
    <about-item class='normal'>
      <div slot='left'>
        <i class="el-icon-share"></i>
      </div>
      <div slot='center'>分享给你的朋友</div>
      <div slot='right'>
        <i class="el-icon-arrow-right"></i>
      </div>
    </about-item>

    <about-buttom></about-buttom>

    
  </div>
</template>

<script>
  import userImg from '../components/common/userImg.vue'
  import aboutItem from '../components/content/aboutItem.vue'
  import aboutButtom from '../components/content/aboutButtom.vue'

  export default {
    name: 'about',
    components :{
      userImg,
      aboutItem,
      aboutButtom
    }
  }
</script>

<style scoped>
  .about {
    background-color: rgba(0,0,0,.1);
  }
  .top {
    margin-top: 15px;
    background-color: white;
  }
  .normal {
    background-color: white;
  }
  .about-center {
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
</style>