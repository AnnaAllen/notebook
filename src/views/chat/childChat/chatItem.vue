<template>
  <div class='chat-item'>
    <div class='item-top'>
      <chat-item-top>
        <div slot='left'>
          <el-avatar :size="30" :src="chatInfo.userImg" class='user-img'></el-avatar>
        </div>
        <div slot='center'>
          <p>{{chatInfo.userName}}</p>
        </div>
      </chat-item-top>
    </div>
    <div class='item-content'>
      <p>{{chatInfo.content}}</p>
    </div>
    <div class="item-foot">
      <div class="left">
        <p>{{chatInfo.time}}</p>
      </div>
      <div class="right">
        <i class="el-icon-star-off"></i>
        <span>{{chatInfo.like}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import chatItemTop from '../../../components/content/aboutItem.vue'
  export default{
    name:'chatItem',
    props: {
      chatInfo: {
        type: Object,
        default() {
          return []
        }
      }
    },
    data() {
      return {
      }
    },
    components: {
      chatItemTop
    }
}
</script>

<style scoped>
  .chat-item {
    height: 180px;
    background-color: rgba(255,192,203,.5);
    color: rgba(0,0,0,.8);
    border-radius: 4px;
    padding: 5px;
  }
  .user-img {
    margin: 5px;
  }
  .item-top {
    color: rgba(0,0,0,.8);
    border-bottom: 1px solid rgba(250,250,250,.5)
  }
  .item-content {
    margin: 10px;
    font-size: 15px;
    letter-spacing: 1px;
  }
  .item-foot {
    position: relative;
    bottom: -40px;
    right: 0;
    left: 0;
    /*background-color: yellow;*/
    height: 35px;
    display: flex;
    line-height: 35px;
    color: rgba(0,0,0,.8);
    font-size: 12px;
  }
  .left,.right {
    flex: 1;
  }
  .right {
    text-align: right;
  }
  .right i {
    margin-right: 5px;
    font-size: 18px;
  }
</style>