<template>
  <div class="child-view">
    <div class="publish-view-container">
      <div class="title-submit-box">
        <input type="text" class="title-text" v-model="post.title"/>
        <input type="submit"  @click="publish" value="Publish" class="button"/>
      </div>
      <textarea class="text-box" v-model="post.content"></textarea>
      <div class="label-view">
        <template v-for="(label, index) in labels">
          <input @click="selectLabel(index)" :value="label.text" type="button" :class="['button', 'label-selector', label.style]"/>
        </template>
      </div>
    </div>
    <div class="alert-box" v-show="selectFlag">
      <div class="label-topic"></div>
      <div class="label-box-container">
        <template v-for="labelOption in labelOptions">
          <div class="label-option" @click="checkLabel(labelOption)">
            <p>{{labelOption}}</p>
          </div>
        </template>
      </div>
    </div>
    <div class="shelter-box" v-show="selectFlag" @click="selectLabel"></div>
  </div>
</template>

<script>
import navgatorColumn from '../components/navigator-column'
import { mapActions } from 'vuex'

export default {
  components: {
    navgatorColumn
  },
  data () {
    return {
      post: {
        title: '',
        content: '',
        open: true
      },
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
      selectFlag: false,
      labelOptions: [
        'JavaScript',
        'PHP',
        'C++',
        'Java'
      ]
    }
  },
  methods: {
    ...mapActions(['postResource']),
    selectLabel (index) {
      this.selectFlag = !this.selectFlag
    },
    checkLabel (label) {
      this.selectFlag = !this.selectFlag
    },
    publish () {
      this.postResource({ url: 'post', data: this.post }).then(data => {
        if (data.id) {
          this.$router.push('/')
        }
      })
    }
  }
}

</script>

<style lang="scss">
@import '../assets/styles/publish.scss';
</style>
