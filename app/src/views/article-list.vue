<template>
  <div class="article-stack-view">
    <template v-for="(post, index) in post.objects">
      <article-card :article="post" :index="index"></article-card>
    </template>
  </div>
</template>

<script>
import articleCard from '../components/article-card'

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user', 'post', 'token'])
  },
  methods: {
    ...mapActions(['queryResource'])
  },
  created () {
    if (this.token) {
      this.queryResource({ url: 'post', args: {} }).then(body => {
      })
    } else {
      this.$router.push('/auth')
    }
  },
  components: {
    articleCard
  }
}

</script>

<style>
@import '../assets/styles/home.scss';
</style>
