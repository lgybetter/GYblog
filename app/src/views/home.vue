<template>
  <div class="home-view">
    <div class="information-box">
      <navigator :user="user"></navigator>
      <informationsContainer :infomation="user.user"></informationsContainer>
    </div>
    <div class="article-stack-view">
      <template v-for="post in posts">
        <articleCard :article="post"></articlecard>
      </template>
    </div>
  </div>
</template>

<script>
import navigator from '../components/navigator'
import informationsContainer from '../components/information-container'
import articleCard from '../components/article-card'
import headPicture from '../assets/images/head-picture.jpg'

import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  computed: {
    ...mapGetters(['user', 'posts'])
  },
  methods: {
    ...mapActions([types.QUERY_POSTS])
  },
  created () {
    if (this.user.token) {
      this[types.QUERY_POSTS]({user: this.user}).then(body => {
        console.log(body)
      })
    }
  },
  components: {
    navigator,
    informationsContainer,
    articleCard
  },
  data () {
    return {
      infomation: {
        picture: headPicture,
        title: 'Fucking Man',
        content: 'My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.'
      }
    }
  }
}

</script>

<style>
@import '../assets/styles/home.scss';
</style>
