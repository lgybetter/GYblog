<template>
  <div class="event-menu" @click="showMenu">
    <img :src="menu"></img>
    <div class="event-item" v-show="show">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
  border-radius: 50%;
  background: rgb(0, 219, 139);
  &:active {
    background: #008f5b;
  }
  img {
    width: 60%;
    height: 60%;
  }
}

.event-item {
  position: absolute;
  top: 80px;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    margin: 20px 0 20px 0;
  }
}

</style>

<script>
import menu from '../assets/images/menu.png'
export default {
  data () {
    return {
      menu: menu,
      show: false
    }
  },
  methods: {
    showMenu () {
      this.show = !this.show
    }
  }
}
</script>

