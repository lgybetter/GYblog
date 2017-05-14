<template>
  <div class="container home-view">
    <div class="information-box" v-show="showInfo">
      <navigator :user="user"></navigator>
      <informationsContainer :infomation="user.user" @infoHandler="infoHandler"></informationsContainer>
    </div>
    <navigatorColumn v-show="!showInfo" @navColumnHandler="navColumnHandler"></navigatorcolumn>
    <div v-bind:class="{'content-layout': showInfo, 'content-bar-layout': !showInfo}">
      <router-view></router-view>
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
    ...mapGetters(['user', 'post'])
  },
  methods: {
    ...mapActions(['queryResource']),
    infoHandler () {
      this.showInfo = !this.showInfo
    },
    navColumnHandler () {
      this.showInfo = !this.showInfo
    }
  },
  created () {
    console.log(this.user)
    if (this.user.token) {
      this.queryResource({ url: 'post', args: {} }).then(body => {
        console.log(body)
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
      showInfo: true
    }
  }
}

</script>

<style>
@import '../assets/styles/home.scss';
</style>
