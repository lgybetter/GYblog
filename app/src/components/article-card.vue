<template>
  <div class="article-box">
    <div class="article-box-container">
      <div class="image-box">
        <img :src="articlePricture"/>
      </div>
      <div class="article-text-box">
        <h1>{{article.title}}</h1>
        <h2>{{article.createAt}}</h2>
        <p>{{article.content}}</p>
      </div>
    </div>
    <div class="article-box-navigation">
      <div><img :src="icons.thumb"><p>{{article.thumbUpCount}}</p></div>
      <div><img :src="icons.chat"><p>{{article.comments.length}}</p></div>
      <div><img :src="icons.star"><p>{{article.starCount}}</p></div>
      <div><img :src="icons.share"><p>{{article.shareCount}}</p></div>
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
  width: 68rem;
  height: 30rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  .article-box-container {
    width: 62rem;
    height: 30rem;
    background-color: rgb(0, 219, 139);
    display: flex;
    flex-direction: row;
    box-shadow: 1rem 1rem 2rem #000;
    cursor: pointer;
    user-select: none;
    .image-box {
      width: 30rem;
      height: 30rem;
      img {
        width: 100%;
      }
    }
    .article-text-box {
      width: 32rem;
      height: 30rem;
      h1 {
        font-size: 3.5rem;
        font-weight: bold;
        margin: 2rem 2rem 0 2rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: rgb(117, 117, 117);
        margin: 0.5rem 2rem 0 2rem;
      }
      p {
        font-size: 2rem;
        margin: 0.5rem 2rem 0 2rem;
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
      width: 5rem;
      height: 7.5rem;
      background-color: rgb(0, 219, 139);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    p {
      font-size: 1.5rem;
      margin: 0;
      cursor: default;
    }
    img:hover {
      cursor: pointer;
    }
  }
}
</style>
