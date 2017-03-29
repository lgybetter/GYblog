<template>
  <div class="navigation">
    <template v-if="!user.token">
      <template v-for="item in navUnSignIn">
        <div @click="clickHandler(item)">
          <p>{{item}}</p>
        </div>
      </template>
    </template>
    <template v-else>
      <template v-for="item in navSignIn">
        <div @click="clickHandler(item)">
          <p>{{item}}</p>
        </div>
      </template>
    </template>
    <slot></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  created () {
    this.navUnSignIn.concat(this.navSignIn).forEach((value, index) => {
      this.eventMap.set(value, this.routers[index])
    })
  },
  data () {
    return {
      navUnSignIn: ['Sign In'],
      navSignIn: ['Publish', 'Personal', 'Likes', 'Followers', 'Setting', 'Sign Out'],
      routers: ['/auth', '/publish', '/personal', '/likes', '/followers', '/setting', '/sign-out'],
      eventMap: new Map()
    }
  },
  methods: {
    ...mapActions([types.SIGN_OUT]),
    clickHandler (event) {
      if (event === 'Sign Out') {
        this[types.SIGN_OUT]()
      } else {
        this.$router.replace({path: this.eventMap.get(event)})
      }
    }
  },
  props: {
    user: {
      type: Object,
      default () {
        return {
          token: ''
        }
      }
    }
  }
}

</script>

<style lang="scss">

.navigation {
  width: 30%;
  min-width: 400px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 219, 139);
  div {
    width: 100px;
    height: 55px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid transparent;
  }
  div:hover {
    color: #008f5b;
    border-bottom: 5px solid #008f5b;
  }
}

</style>
