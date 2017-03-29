<template>
  <div class="publish-view">
    <navgatorColumn>
    </navgatorcolumn>
    <div class="publish-view-container">
      <div class="title-submit-box">
        <input type="text" class="title-text"/>
        <input type="submit" value="Publish" class="publish-view-container-button publish-view-container-button-background-color"/>
      </div>
      <textarea class="text-box"></textarea>
      <div class="label-view">
        <template v-for="(label, index) in labels">
          <input @click="selectLabel(index)" :value="label.text" type="button" :class="['publish-view-container-button', 'label-selector', label.style]"/>
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

export default {
  components: {
    navgatorColumn
  },
  data () {
    return {
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
    selectLabel (index) {
      this.selectFlag = !this.selectFlag
    },
    checkLabel (label) {
      console.log(label)
      this.selectFlag = !this.selectFlag
    }
  }
}

</script>

<style lang="scss">
@import '../assets/styles/publish.scss';
</style>
