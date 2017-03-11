<template>
  <div class="article-box">
    <div class="article-box-container">
      <div class="image-box">
        <img :src="article.picture"/>
      </div>
      <div class="article-text-box">
        <h1>{{article.title}}</h1>
        <h2>{{article.date}}</h2>
        <p>{{article.content}}</p>
      </div>
    </div>
    <div class="article-box-navigation">
      <template v-for="icon in article.icons">
        <div><img :src="icon.src"><p>{{icon.text}}</p></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default () {
        return {}
      }
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
