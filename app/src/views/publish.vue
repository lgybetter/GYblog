<template>
  <div class="child-view">
    <div class="publish-view-container">
      <div class="article-header">
        <div class="article-icon">
          <img :src="post.icon"/>
          <file-upload @uploadSuccess="uploadSuccess" @uploadFail="uploadFail" class="file-upload"></file-upload>
        </div>
        <div class="article-title">
          <div class="title-submit-box">
            <input type="text" class="title-text" v-model="post.title" placeholder="input the title"/>
            <checkbox :checked="post.open" @change="handleCheck"></checkbox>
            <input type="submit"  @click="publish" :value="$route.name === 'editArticle' ? 'Save' : 'Publish'" class="button"/>
          </div>
          <input type="text" class="subtitle-text" v-model="post.subTitle" placeholder="input the sub title"/>        
        </div>
      </div>
      <textarea class="text-box" @keydown="keyDown" v-model="post.content" placeholder="write the aritcle with markdown and check the toggle button to select whether to open this article"></textarea>
      <div class="label-view">
        <template v-for="(label, index) in labels">
          <input @click="selectLabel(index)" :value="label.text" type="button" :class="['button', 'label-selector', label.style]"/>
        </template>
      </div>
    </div>
    <div class="alert-box" v-show="selectFlag">
      <div class="label-topic">Choose Label</div>
      <div class="label-box-container">
        <template v-for="(labelOption, index) in labelOptions">
          <template v-if="labelOption !== ''">
            <div class="label-option" @click="checkLabel(labelOption, index)">
              <p>{{labelOption}}</p>
            </div>
          </template>
          <template v-else>
            <div class="label-option" @click="checkLabel(labelOption, index)">
              <p>✖</p>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div class="shelter-box" v-show="selectFlag" @click="selectLabel"></div>
  </div>
</template>

<script>
import navgatorColumn from '../components/navigator-column'
import fileUpload from '../components/file-upload'
import checkbox from '../components/checkbox'
import { mapActions } from 'vuex'

export default {
  components: {
    navgatorColumn,
    checkbox,
    fileUpload
  },
  created () {
    if (this.$route.name === 'editArticle') {
      this.getResource({
        url: 'post',
        id: this.$route.params.id
      }).then(res => {
        this.post = res
      })
    }
  },
  data () {
    return {
      post: {
        title: '',
        subTitle: '',
        content: '',
        open: false,
        icon: 'http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg'
      },
      currentIndex: 0,
      labels: [
        {
          text: 'First label',
          style: 'label-first-box'
        },
        {
          text: 'Second label',
          style: 'label-second-box'
        },
        {
          text: 'Third label',
          style: 'label-third-box'
        }
      ],
      defaultLabels: ['First label', 'Second label', 'Third label'],
      selectFlag: false,
      labelOptions: [
        'JavaScript',
        'PHP',
        'C++',
        'Java',
        ''
      ]
    }
  },
  methods: {
    ...mapActions(['postResource', 'getResource', 'putResource']),
    selectLabel (index) {
      this.currentIndex = index
      this.selectFlag = !this.selectFlag
    },
    checkLabel (label, index) {
      this.selectFlag = !this.selectFlag
      for (let _index in this.labels) {
        if ((this.labels[_index].text === label) && (parseInt(_index) !== parseInt(this.currentIndex))) {
          this.labels[this.currentIndex].text = this.defaultLabels[this.currentIndex]
          return
        }
      }
      this.labels[this.currentIndex].text = label || this.defaultLabels[this.currentIndex]
    },
    publish () {
      if (this.$route.name === 'editArticle') {
        this.putResource({ url: 'post', data: this.post, id: this.$route.params.id }).then(data => {
          if (data.id) {
            this.$router.push('/')
          }
        })
      } else {
        this.postResource({ url: 'post', data: this.post }).then(data => {
          if (data.id) {
            this.$router.push('/')
          }
        })
      }
    },
    handleCheck (val) {
      this.post.open = val
    },
    keyDown (event) {
      if (event.keyCode === 9) {
      }
    },
    uploadSuccess (url) {
      this.post.icon = url
    },
    uploadFail () {
      console.log('upload fail')
    }
  }
}

</script>

<style lang="scss">
@import '../assets/styles/publish.scss';
</style>
