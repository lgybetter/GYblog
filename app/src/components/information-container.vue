<template>
  <div class="information-box-container">
    <div class="information-picture-box">
      <img :src="icon"/>
    </div>
    <div class="information-introduction">
      <h1>{{infomation.name}}</h1>
      <p>{{infomation.introduction || 'This user is lazy, nothing left'}}</p>
    </div>
  </div>
</template>

<script>
import headPicture from '../assets/images/head-picture.jpg'

export default {
  props: {
    infomation: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      icon: headPicture
    }
  }
}
</script>

<style lang="scss">

.information-box-container {
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
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
}
</style>
