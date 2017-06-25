<template>
  <div class="article-box">
    <div class="article-box-container" @click="showArticle(article.id)">
      <div class="image-box">
        <img :src="articlePricture"/>
      </div>
      <div class="article-text-box">
        <h1>{{article.title}}</h1>
        <h2>{{article.date}}</h2>
        <p>{{article.subTitle}}</p>
      </div>
    </div>
    <div class="article-box-navigation">
      <div @click="postEvents('thumbUp')"><img :src="icons.thumb"><p>{{article.thumbUpCount}}</p></div>
      <div @click="postEvents('comments')"><img :src="icons.chat"><p>{{article.commentCount}}</p></div>
      <div @click="postEvents('star')"><img :src="icons.star"><p>{{article.starCount}}</p></div>
      <div @click="postEvents('share')"><img :src="icons.share"><p>{{article.shareCount}}</p></div>
    </div>
  </div>
</template>

<script>
import articlePricture from '../assets/images/article-image.jpg'
import thumbUpIcon from '../assets/images/ic_thumb_up_black_24dp_1x.png'
import chatIcon from '../assets/images/ic_chat_black_24dp_1x.png'
import starIcon from '../assets/images/ic_star_black_24dp_1x.png'
import shareIcon from '../assets/images/ic_share_black_24dp_1x.png'

export default {
  props: {
    article: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  methods: {
    postEvents (event) {
    },
    showArticle (id) {
      this.$router.push(`/article/${id}`)
    }
  },
  data () {
    return {
      icons: {
        thumb: thumbUpIcon,
        chat: chatIcon,
        star: starIcon,
        share: shareIcon
      },
      articlePricture: articlePricture
    }
  }
}
</script>

<style lang="scss">

.article-box {
  width: 680px;
  height: 300px;
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  .article-box-container {
    width: 620px;
    height: 300px;
    background-color: rgb(0, 219, 139);
    display: flex;
    flex-direction: row;
    box-shadow: 10px 10px 20px #000;
    cursor: pointer;
    user-select: none;
    .image-box {
      width: 300px;
      height: 300px;
      img {
        width: 100%;
      }
    }
    .article-text-box {
      width: 320px;
      height: 300px;
      h1 {
        font-size: 3.6rem;
        font-weight: bold;
        width: 280px;
        height: 60px;
        line-height: 60px;
        margin: 10px 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h2 {
        font-size: 1.6rem;
        font-weight: bold;
        color: rgb(117, 117, 117);
        width: 280px;
        height: 30px;
        line-height: 30px;
        margin: 10px 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 1.6rem;
        width: 280px;
        height: 150px;
        line-height: 25px;
        margin: 10px 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .article-box-navigation {
    width: 50px;
    max-height: 100%;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1rem 1rem 2rem #000;
    div {
      width: 50px;
      height: 75px;
      background-color: rgb(0, 219, 139);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    p {
      font-size: 1.6rem;
      margin: 0;
      cursor: default;
    }
    img:hover {
      cursor: pointer;
    }
  }
}
</style>
