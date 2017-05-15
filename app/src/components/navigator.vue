<template>
  <div class="navigation">
    <template v-if="!token">
      <template v-for="item in navUnSignIn">
        <div @click="clickHandler(item)">
          <p>{{item.label}}</p>
        </div>
      </template>
    </template>
    <template v-else>
      <template v-for="item in navSignIn">
        <div @click="clickHandler(item)">
          <p>{{item.label}}</p>
        </div>
      </template>
    </template>
    <slot></slot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data () {
    return {
      navUnSignIn: [
        {
          label: 'Sign In',
          router: '/auth'
        }
      ],
      navSignIn: [
        {
          label: 'Publish',
          router: '/publish'
        },
        {
          label: 'Personal',
          router: '/personal'
        },
        {
          label: 'Stars',
          router: '/stars'
        },
        {
          label: 'Followers',
          router: '/followers'
        },
        {
          label: 'Setting',
          router: '/setting'
        },
        {
          label: 'Sign Out',
          router: '/sign-out'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['signOut']),
    clickHandler (value) {
      switch (value.label) {
        case 'Sign Out':
          this.signOut()
          break
        case 'Personal':
          this.$router.push(`${value.router}/${this.user._id}`)
          break
        default:
          this.$router.push(value.router)
      }
    }
  },
  props: {
    token: {
      type: String,
      default () {
        return ''
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
