<template>
  <div class="child-view">
    <h1 class="article-title">{{post.title}}</h1>
    <div class="article-info-container">
      <label-card @clickEvent="changeRouter(`/personal/${post.createBy._id}`)" :tip="post.createBy.name" :icon="author"></label-card>            
      <label-card :tip="post.starCount" :icon="star"></label-card>
      <label-card :tip="post.thumbUpCount" :icon="thumbUp"></label-card>      
      <label-card :tip="post.shareCount" :icon="share"></label-card>      
      <label-card :tip="post.commentCount" :icon="comment"></label-card>      
      <label-card :tip="post.date" :icon="date"></label-card>           
      <template v-if="post.isSelf">
        <label-card @clickEvent="changeRouter(`/article/edit/${$route.params.id}`)" :action="true" tip="Edit" :icon="edit"></label-card>     
        <label-card :action="true" tip="Delete" :icon="del"></label-card>         
      </template>
    </div>
    <vue-markdown class="markdown" :source="post.content">{{post.content}}</vue-markdown>
    <article-menu @actionHandler="actionHandler" :state="state"></article-menu>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/article.scss';
.child-view {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .article-info-container {
    display: flex;
    justify-content: center;
    width: 78%;
    height: 40px;
    margin: 10px 0 10px 0;
  }

  .article-title {
    color: white;
    font-size: 35px;
  }

  .markdown {
    width: 80%;
    color: #ccc;
    font-size: 20px;
  }
}

</style>

<script>
import { mapActions, mapGetters } from 'vuex'
import VueMarkdown from 'vue-markdown'
import articleMenu from '../components/article-menu'
import labelCard from '../components/label-card'
import starIcon from '../assets/images/star-active.png'
import thumbUpIcon from '../assets/images/thump-up-active.png'
import shareIcon from '../assets/images/share-active.png'
import commentIcon from '../assets/images/comment-active.png'
import authorIcon from '../assets/images/author-active.png'
import dateIcon from '../assets/images/date-active.png'
import editIcon from '../assets/images/edit-active.png'
import deleteIcon from '../assets/images/delete-active.png'

export default {
  async created () {
    await this.getResource({ url: 'post', id: this.$route.params.id })
    this.state.star = this.post.isCollected
    this.state.thumpUp = this.post.isThumbUped
  },
  computed: {
    ...mapGetters(['post'])
  },
  data () {
    return {
      state: {
        star: false,
        thumpUp: false,
        comment: false,
        share: false
      },
      star: starIcon,
      thumbUp: thumbUpIcon,
      share: shareIcon,
      comment: commentIcon,
      author: authorIcon,
      date: dateIcon,
      del: deleteIcon,
      edit: editIcon
    }
  },
  components: {
    VueMarkdown,
    articleMenu,
    labelCard
  },
  methods: {
    ...mapActions(['getResource', 'postResource', 'deleteResource']),
    changeRouter (path) {
      this.$router.push(path)
    },
    actionStart (url, stateName, preState, target) {
      if (!preState) {
        this.postResource({
          url,
          data: {
            postId: target
          }
        }).then(data => {
          if (data.id) {
            this.state[stateName] = true
          } else {
            console.log('收藏失败')
          }
        }).then(() => {
          this.getResource({ url: 'post', id: target })
        })
      } else {
        this.deleteResource({
          url,
          id: target
        }).then(data => {
          if (data.id) {
            this.state[stateName] = false
          } else {
            console.log('取消收藏失败')
          }
        }).then(() => {
          this.getResource({ url: 'post', id: target })
        })
      }
    },
    actionHandler (action) {
      switch (action) {
        case 'thumb-up-action':
          this.actionStart('thumb-up', 'thumpUp', this.state.thumpUp, this.post.id)
          break
        case 'comment-action':
          break
        case 'star-action':
          this.actionStart('collection', 'star', this.state.star, this.post.id)
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
