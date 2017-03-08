<template>
  <div class="auth-view">
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
      this.signIn({ user: this.user })
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
@import '../assets/sass/animation';

.auth-view {
  width: 100%;
  height: 100%;
  margin: 0;
}

.half-view {
  @extend .auth-view;
  display: flex;
  flex-direction: row;
}

.sign-container {
  @extend .auth-view;
  display: flex;
  align-items: center;
  justify-content: center;
  .text-container {
    text-align: center;
    margin: 30% 20%;
    -webkit-animation: alphaChange 2.5s;
    h1 {
      font-size: 40px;
      cursor: default;
    }
    p {
      font-size: 25px;
      cursor: default;
    }
  }
}

.sign-up-container {
  @extend .sign-container;
  background-color: rgb(0, 219, 139);
  h1 {
    color: #000000;
    font-size: 40px;
    cursor: default;
  }
  p {
    color: #000000;
    font-size: 25px;
    cursor: default;
  }
}

.sign-in-container {
  @extend .sign-container;
  background-color: rgb(22, 22, 22);
  h1 {
    color: #ffffff;
    font-size: 40px;
    cursor: default;
  }
  p {
    color: #ffffff;
    font-size: 25px;
    cursor: default;
  }
}

.form-container {
  text-align: center;
  width: 400px;
  -webkit-animation: alphaChange 2.5s;
  .text-box {
    width: 300px;
    height: 50px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    outline: none;
    text-indent: 10px;
  }
  p {
    font-size: 20px;
    cursor: default;
  }
  .sign-button {
    width: 300px;
    height: 50px;
    margin-top: 50px;
    border-radius: 5px;
    border: 0;
    outline: none;
    font-size: 25px;
  }
}

.sign-up-form-container {
  @extend .form-container;
  p {
    color: #000000;
  }
  .sign-button {
    background-color: rgb(22, 22, 22);
    color: #ffffff;
    &:active {
       background-color: #000000;
    }
  }
}

.sign-in-form-container {
  @extend .form-container;
  p {
    color: #ffffff;
  }
  .sign-button {
    background-color: rgb(0, 219, 139);
    color: #000000;
    &:active {
      background-color: #008f5b;
    }
  }
}

.change-button {
  text-align: center;
  line-height: 75px;
  width: 150px;
  height: 150px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  margin: auto;
  -webkit-transform: rotate(45deg);
  overflow: hidden;
  cursor: pointer;
  p {
    font-size: 35px;
    color: #ffffff;
    -webkit-transform: rotate(-45deg);
    -webkit-animation: alphaChange 2.5s;
  }
}

.change-button-sign-in {
  @extend .change-button;
  background-color: rgb(0, 219, 139);
}

.change-button-sign-up {
  @extend .change-button;
  background-color: rgb(22, 22, 22);
}

@-webkit-keyframes alphaChange {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
</style>
