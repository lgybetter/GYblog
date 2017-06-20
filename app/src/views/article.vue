<template>
  <div class="child-view">
    <h1 class="article-title">{{post.title}}</h1>
    <vue-markdown class="markdown" :source="post.content">{{post.content}}</vue-markdown>
    <article-menu @actionHandler="test" :state="state"></article-menu>
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
import articleMenu from '../components/article-menu'

export default {
  created () {
    this.getResource({ url: 'post', id: this.$route.params.id }).then(data => {
      this.post = data
      this.state.star = this.post.isCollected
    })
  },
  data () {
    return {
      post: {},
      state: {
        star: false,
        thumpUp: false,
        comment: false,
        share: false
      }
    }
  },
  components: {
    VueMarkdown,
    articleMenu
  },
  methods: {
    ...mapActions(['getResource', 'postResource', 'deleteResource']),
    test (action) {
      switch (action) {
        case 'thumb-up-action':
          break
        case 'comment-action':
          break
        case 'star-action':
          if (!this.state.star) {
            this.postResource({
              url: 'collection',
              data: {
                postId: this.post.id
              }
            }).then(data => {
              if (data.id) {
                this.state.star = true
              } else {
                console.log('收藏失败')
              }
            })
          } else {
            this.deleteResource({
              url: 'collection',
              id: this.post.id
            }).then(data => {
              if (data.id) {
                this.state.star = false
              } else {
                console.log('取消收藏失败')
              }
            })
          }
          break
        case 'share-action':
          break
        default:
          break
      }
    }
  }
}
</script>
