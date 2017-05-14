<template>
  <div class="container home-view">
    <div class="information-box">
      <navigator :user="user"></navigator>
      <informationsContainer :infomation="user.user"></informationsContainer>
    </div>
    <div class="article-layout">
      <div class="article-stack-view">
        <template v-for="(post, index) in post.objects">
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

export default {
  computed: {
    ...mapGetters(['user', 'post'])
  },
  methods: {
    ...mapActions(['queryResource'])
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
