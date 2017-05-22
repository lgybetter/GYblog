<template>
  <div class="child-view">
    <h1 class="article-title">{{post.title}}</h1>
    <vue-markdown class="markdown" :source="post.content">{{post.content}}</vue-markdown>
  </div>
</template>

<style scoped>
@import '../assets/styles/article.scss';
.child-view {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.article-title {
  color: white;
  font-size: 35px;
}

.markdown {
  width: 85%;
  color: whitesmoke;
  font-size: 14px;
}
</style>

<script>
import { mapActions } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  created () {
    this.getResource({ url: 'post', id: this.$route.params.id }).then(data => {
      this.post = data
      console.log(this.post)
    })
  },
  data () {
    return {
      post: {}
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
    ...mapActions(['getResource'])
  }
}
</script>
