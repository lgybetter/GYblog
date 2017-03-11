<template>
  <div class="container">
    <div class="half-view">
      <div class="sign-in-container">
        <div class="sign-in-form-container" v-show="state">
          <p>User Email</p>
          <input type="email" class="text-box" v-model="user.email"/>
          <p>Password</p>
          <input type="password" class="text-box" v-model="user.password"/>
          <input type="button" class="sign-button" value="Sign In" @click="userSignIn()"/>
        </div>
        <div class="text-container" v-show="!state">
          <h1>GY BLOG</h1>
          <p>My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.
          </p>
        </div>
      </div>
      <div class="sign-up-container">
        <div class="sign-up-form-container" v-show="!state">
          <p>E-mail Address</p>
          <input type="email" class="text-box" v-model="user.email"/>
          <p>Nick Name</p>
          <input type="text" class="text-box" v-model="user.name"/>
          <p>Password</p>
          <input type="password" class="text-box" v-model="user.password"/>
          <p>Confirm Password</p>
          <input type="password" class="text-box" v-model="user.confirmPassword"/>
          <input type="button" class="sign-button" value="Sign Up" @click="userSignUp()"/>
        </div>
        <div class="text-container" v-show="state">
          <h1>GY BLOG</h1>
          <p>My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.
          </p>
        </div>
      </div>
    </div>
    <div @click=changeState v-bind:class="{'change-button-sign-in': !state, 'change-button-sign-up': state}">
        <p id="change-button-text">{{{'true':'Sign Up', 'false':'Sing In'}[state.toString()]}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'auth',
  data () {
    return {
      state: true,
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['signIn', 'signUp']),
    changeState () {
      this.state = !this.state
    },
    userSignIn () {
      this.signIn({ user: this.user }).then(body => {
        if (body.status.code === 200) {
          this.$router.replace({ path: '/home' })
        } else {
          console.log('登录失败')
        }
      })
    },
    userSignUp () {
      if (this.user.confirmPassword === this.user.password) {
        this.signUp({ user: this.user })
      } else {
        console.log('请确认密码')
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/auth.scss';
</style>
