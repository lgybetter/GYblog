<template>
  <div class="information-box-container">
    <div class="information-picture-box">
      <img :src="information || icon"/>
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
    width: 30rem;
    height: 30rem;
    margin: 10rem auto 0 auto;
    background-color: #000;
    border: 1rem solid #fff;
    box-shadow: 0 0 1rem #000;
    img {
      width: 100%;
    }
  }
  .information-introduction {
    width: 32rem;
    cursor: default;
    user-select: none;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
}
</style>
