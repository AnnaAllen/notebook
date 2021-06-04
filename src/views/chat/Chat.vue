<template>
  <div>
    <chat-nav-bar></chat-nav-bar>
    <chat-item-all class='chat-item-style' v-for='item in chatInfo' :chatInfo='item' />
  </div>
</template>

<script>
  
  
  import chatNavBar from './childChat/chatNavBar.vue'
  import chatItemAll from './childChat/chatItem.vue'
  export default{
    name:'Chat',
    components: {
      chatNavBar,
      chatItemAll
    },
    data() {
      return  {
        chatInfo: [
          {
            userName:'Anna',
            userImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            content: '今天天气真好,光遇bug真多,串得我人都傻掉了',
            like: 64,
            time:'17:33'
          },
          {
            userName:'戴羽',
            userImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            content: '今天天气真好,光遇bug真多,串得我人都傻了',
            like: 100,
            time: '15:33'
          }
        ]
      }
    }
}
</script>

<style scoped>
  .chat-item-style {
    margin: 4px 6px;
  }
  .middle {
    display: flex;
  }
  .middle > p{
    flex: 1;
  }
</style>