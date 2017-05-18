<template>
  <div class="child-view">
    <h1>{{post.title}}</h1>
    <vue-markdown class="markdown" :source="post.content">{{post.content}}</vue-markdown>
  </div>
</template>

<style scoped>
@import '../assets/styles/article.scss';
.child-view {
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;  
  justify-content: flex-start;
}
.markdown {
  width: 80%;
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
