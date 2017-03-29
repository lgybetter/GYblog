<template>
  <div class="container home-view">
    <div class="information-box">
      <navigator :user="user"></navigator>
      <informationsContainer :infomation="user.user"></informationsContainer>
    </div>
    <div class="article-layout">
      <div class="article-stack-view">
        <template v-for="(post, index) in posts">
          <articleCard :article="post" :index="index"></articlecard>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import navigator from '../components/navigator'
import informationsContainer from '../components/information-container'
import articleCard from '../components/article-card'

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
    return {}
  }
}

</script>

<style>
@import '../assets/styles/home.scss';
</style>
