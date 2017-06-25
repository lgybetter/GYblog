<template>
  <div class="information-box-container">
    <div class="information-picture-box" @click="routerChange('/setting')">
      <img src="http://os32fgzvj.bkt.clouddn.com/head-picture.jpg"/>
    </div>
    <div class="information-introduction">
      <div class="hide-info" @click="infoHandler">
        <img :src="hideInfo">
      </div>
      <h1>{{infomation.name}}</h1>
      <p>{{infomation.introduction || 'This user is lazy, nothing left'}}</p>
    </div>
    <div class="info-btn-container">
      <a class="go-home-btn" @click="routerChange('/')"/>
      <a class="go-github-btn" :href="infomation.github" target="_Blank"/>
    </div>
  </div>
</template>

<script>
import hideInfo from '../assets/images/ic_first_page_white_36dp_2x.png'

export default {
  props: {
    infomation: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    infoHandler () {
      this.$emit('infoHandler')
    },
    routerChange (router) {
      this.$router.push(router)
    }
  },
  data () {
    return {
      hideInfo: hideInfo
    }
  }
}
</script>

<style lang="scss">

.information-box-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .information-picture-box {
    width: 300px;
    height: 300px;
    margin: 100px auto 0 auto;
    background-color: #000;
    border: 10px solid #fff;
    box-shadow: 0 0 10px #000;
    img {
      width: 100%;
    }
  }
  .information-introduction {
    width: 320px;
    cursor: default;
    user-select: none;

    .hide-info {
      width: 72px;
      height: 72px;
      position: absolute;
      right: 0px;
      border-radius: 50%;
      &:hover {
        color: #008f5b;
        background-color: #3fff7a;
      }
    }
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  .info-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 250px 0 0 0;
    a {
      bottom: 0px;
      width: 60px;
      height: 60px;
      cursor: pointer;
      background: {
        repeat:  no-repeat;
        position:  center;
        size: 60% 60%;
      }
    }
    .go-home-btn {
      background-image:  url('../assets/images/home.png');
    }
    .go-github-btn {
      background-image:  url('../assets/images/github.png');
    }
  }
}
</style>
