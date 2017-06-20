<template>
  <div>
    <div class="event-menu" @click="showMenu"></div>
    <div :class="[show ? 'event-item-visiable' : 'event-item-hidden', 'event-item']" @click="menuHandler">
      <div id="thumb-up-action" :class="[state.thumpUp ? 'thump-up-item-active' : 'thump-up-item']"></div>
      <div id="comment-action" :class="[state.comment ? 'comment-item-active' : 'comment-item']"></div>
      <div id="star-action" :class="[state.star ? 'star-item-active' : 'star-item']"></div>
      <div id="share-action" :class="[state.share ? 'share-item-active' : 'share-item']"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-menu {
  width: 70px;
  height: 70px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 100px;
  top: 50px;
  z-index: 2;
  border-radius: 50%;
  background: {
    color: rgb(0, 219, 139);
    image:  url('../assets/images/menu.png');
    repeat:  no-repeat;
    position:  center;
    size: 60% 60%;
  }
  &:active {
    background-color: #008f5b;
  }
  img {
    width: 60%;
    height: 60%;
  }
}

.event-item {
  position: fixed;
  height: 400px;
  width: 50px;
  right: 110px;
  top: 60px;  
  div {
    position: absolute;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    background: {
      color: rgb(0, 219, 139);
      repeat:  no-repeat;
      position:  center;
      size: 60% 60%;
    }
  }
  .thump-up-item {
    background-image:  url('../assets/images/thump-up.png');
  }
  .comment-item {
    background-image:  url('../assets/images/comment.png');
  }
  .star-item {
    background-image:  url('../assets/images/star.png'); 
  }
  .share-item {
    background-image:  url('../assets/images/share.png');
  }
  .thump-up-item-active {
    background-image:  url('../assets/images/thump-up-active.png');
  }
  .comment-item-active {
    background-image:  url('../assets/images/comment-active.png');
  }
  .star-item-active {
    background-image:  url('../assets/images/star-active.png'); 
  }
  .share-item-active {
    background-image:  url('../assets/images/share-active.png');
  }
}

.event-item-visiable {
  & div:nth-child(1) {
    top: 80px;
    -webkit-transition: top 0.5s ease-in 0.1s;
  }
  & div:nth-child(2) {
    top: 150px;
    -webkit-transition: top 0.5s ease-in 0.2s;
  }
  & div:nth-child(3) {
    top: 220px;
    -webkit-transition: top 0.5s ease-in 0.3s;
  }
  & div:nth-child(4) {
    top: 290px;
    -webkit-transition: top 0.5s ease-in 0.4s;
  }
}

.event-item-hidden {
  div {
    top: 0;
  }
  & div:nth-child(1) {
    -webkit-transition: top 0.5s ease-out 0.4s;
  }
  & div:nth-child(2) {
    -webkit-transition: top 0.5s ease-out 0.3s;
  }
  & div:nth-child(3) {
    -webkit-transition: top 0.5s ease-out 0.2s;
  }
  & div:nth-child(4) {
    -webkit-transition: top 0.5s ease-out 0.1s;
  }
}

</style>

<script>
import menu from '../assets/images/menu.png'
export default {
  props: {
    state: {
      type: Object,
      default () {
        return {
          star: false,
          thumpUp: false,
          comment: false,
          share: false
        }
      }
    }
  },
  data () {
    return {
      menu: menu,
      show: false
    }
  },
  methods: {
    showMenu () {
      this.show = !this.show
    },
    menuHandler (event) {
      this.$emit('actionHandler', event.path[0].id)
    }
  }
}
</script>

