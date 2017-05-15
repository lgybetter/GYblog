<template>
  <div class="article-stack-view">
    <template v-for="(post, index) in post.objects">
      <articleCard :article="post" :index="index"></articlecard>
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
