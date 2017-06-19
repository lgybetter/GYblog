<template>
  <div class="container home-view">
    <div class="information-box" v-show="showInfo">
      <navigator :token="token"></navigator>
      <informations-container :infomation="user" @infoHandler="infoHandler"></informations-container>
    </div>
    <navigator-column v-show="!showInfo" @navColumnHandler="navColumnHandler"></navigator-column>
    <div v-bind:class="{'content-layout': showInfo, 'content-bar-layout': !showInfo}">
      <div class="article-stack-view">
        <template v-for="(post, index) in post.objects">
          <article-card :article="post" :index="index"></article-card>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import navigator from '../components/navigator'
import navigatorColumn from '../components/navigator-column'
import informationsContainer from '../components/information-container'
import articleCard from '../components/article-card'

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    ...mapActions(['queryResource', 'userInfo']),
    infoHandler () {
      this.showInfo = !this.showInfo
    },
    navColumnHandler () {
      this.showInfo = !this.showInfo
    }
  },
  created () {
    if (this.token) {
      this.userInfo({ id: this.$route.params.id }).then(body => {
        this.user = body
      })
      this.queryResource({ url: 'post', args: { _filters: { createBy: this.$route.params.id } } }).then(body => {
        this.post = body
      })
    } else {
      this.$router.push('/auth')
    }
  },
  components: {
    navigator,
    informationsContainer,
    navigatorColumn,
    articleCard
  },
  data () {
    return {
      user: {},
      post: {
        objects: [],
        count: 0
      },
      showInfo: true
    }
  }
}

</script>

<style>
@import '../assets/styles/home.scss';
</style>
