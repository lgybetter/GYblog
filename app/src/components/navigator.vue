<template>
  <div class="navigation">
    <template v-for="item in navigations">
      <div>
        <p>{{item}}</p>
      </div>
    </template>
    <slot></slot>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  props: {
    navigations: {
      type: Array,
      default () {
        return []
      }
    }
  }
}

</script>

<style lang="scss">

.navigation {
  width: 40%;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 219, 139);
  div {
    width: 10rem;
    height: 5.5rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5rem solid transparent;
  }
  div:hover {
    color: #008f5b;
    border-bottom: 0.5rem solid #008f5b;
  }
}

</style>
