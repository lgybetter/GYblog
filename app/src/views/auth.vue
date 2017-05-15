<template>
  <div class="container">
    <div class="half-view">
      <div class="sign-in-container">
        <div class="sign-in-form-container" v-show="state">
          <p>User Email</p>
          <input type="email" class="text-box" v-model="userForm.email"/>
          <p>Password</p>
          <input type="password" class="text-box" v-model="userForm.password"/>
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
          <input type="email" class="text-box" v-model="userForm.email"/>
          <p>Nick Name</p>
          <input type="text" class="text-box" v-model="userForm.name"/>
          <p>Password</p>
          <input type="password" class="text-box" v-model="userForm.password"/>
          <p>Confirm Password</p>
          <input type="password" class="text-box" v-model="userForm.confirmPassword"/>
          <input type="button" class="sign-button" value="Sign Up" @click="userSignUp()"/>
        </div>
        <div class="text-container" v-show="state">
          <h1>GY BLOG</h1>
          <p>My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.
          </p>
        </div>
      </div>
      <div @click=changeState v-bind:class="{'change-button-sign-in': !state, 'change-button-sign-up': state}">
        <p id="change-button-text">{{{'true':'Sign Up', 'false':'Sing In'}[state.toString()]}}</p>
      </div>
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
      userForm: {
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
      this.signIn({ user: this.userForm }).then(res => {
        if (res.status === 200) {
          this.$router.push('/')
        } else {
          this.state = !this.state
        }
      })
    },
    userSignUp () {
      if (this.userForm.confirmPassword === this.userForm.password) {
        this.signUp({ user: this.userForm }).then(res => {
          if (res.status === 200) {
            this.state = !this.state
          }
        })
      } else {
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/auth.scss';
</style>
