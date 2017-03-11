<template>
  <div class="home-view">
    <div class="information-box">
      <navigator :navigations="navigations"></navigator>
      <informationsContainer :infomation="infomation"></informationsContainer>
    </div>
    <div class="article-stack-view">
      <template v-for="article in articles">
        <articleCard :article="article"></articlecard>
      </template>
    </div>
  </div>
</template>

<script>
import navigator from '../components/navigator'
import informationsContainer from '../components/information-container'
import articleCard from '../components/article-card'
import articlePricture from '../assets/images/article-image.jpg'
import headPicture from '../assets/images/head-picture.jpg'
import thumbUpIcon from '../assets/images/ic_thumb_up_black_24dp_1x.png'
import chatIcon from '../assets/images/ic_chat_black_24dp_1x.png'
import starIcon from '../assets/images/ic_star_black_24dp_1x.png'
import shareIcon from '../assets/images/ic_share_black_24dp_1x.png'

export default {
  components: {
    navigator,
    informationsContainer,
    articleCard
  },
  data () {
    return {
      navigations: ['Setting', 'Followers', 'Likes', 'Personal', 'Publish', 'Sign In'],
      infomation: {
        picture: headPicture,
        title: 'Fucking Man',
        content: 'My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.'
      },
      articles: [
        {
          title: 'Adult Video',
          date: 'by Fon on Mar 9.2017',
          picture: articlePricture,
          content: 'My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.',
          icons: [
            {
              text: 345,
              src: thumbUpIcon
            },
            {
              text: 21,
              src: chatIcon
            },
            {
              text: 121,
              src: starIcon
            },
            {
              text: 34,
              src: shareIcon
            }
          ]
        },
        {
          title: 'Adult Video',
          date: 'by Fon on Mar 9.2017',
          picture: articlePricture,
          content: 'My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.',
          icons: [
            {
              text: 345,
              src: thumbUpIcon
            },
            {
              text: 21,
              src: chatIcon
            },
            {
              text: 121,
              src: starIcon
            },
            {
              text: 34,
              src: shareIcon
            }
          ]
        },
        {
          title: 'Adult Video',
          date: 'by Fon on Mar 9.2017',
          picture: articlePricture,
          content: 'My son, when he was 4 years old began to show great interest in the English word ‘audlt video’ after he had watched the public-interest advertisement of on CCTV1.',
          icons: [
            {
              text: 345,
              src: thumbUpIcon
            },
            {
              text: 21,
              src: chatIcon
            },
            {
              text: 121,
              src: starIcon
            },
            {
              text: 34,
              src: shareIcon
            }
          ]
        }
      ]
    }
  }
}

</script>

<style>
@import '../assets/styles/home.scss';
</style>
