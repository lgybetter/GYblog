<template>
  <div class="child-view">
    <div class="text-view-container">
      <div class="head-picure-introduction-view">
        <div class="head-picture-box">
          <img :src="userMsg.icon"/>
          <file-upload @uploadSuccess="uploadSuccess" @uploadFail="uploadFail" class="file-upload"></file-upload>
        </div>
        <div>
          <textarea v-model="userMsg.introduction" class="textarea" placeholder="Introduce yourself here..."></textarea>
        </div>
      </div>
      <div class="information-setting-view">
        <div class="a-line-display">
          <div>
            <p>Nick Name:</p>
          </div>
          <input type="text" v-model="userMsg.name" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>Phone Number:</p>
          </div>
          <input type="text" v-model="userMsg.phone" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>GitHub:</p>
          </div>
          <input type="text" v-model="userMsg.github" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>Job Occupation:</p>
          </div>
          <input type="text" v-model="userMsg.job" class="text-box" />
        </div>
        <input class="action-button" type="submit" value="Save" @click="save"/>
        <input class="action-button" type="submit" value="Cancle" @click="cancle"/>        
      </div>
    </div>
  </div>
</template>

<script>
import navigatorColumn from '../components/navigator-column'
import fileUpload from '../components/file-upload'
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    navigatorColumn,
    fileUpload
  },
  created () {
    this.userInfo({ id: this.user._id }).then(data => {
      this.userMsg = data
    })
  },
  methods: {
    ...mapActions(['updateUser', 'userInfo']),
    cancle () {
      this.$router.push('/')
    },
    save () {
      this.updateUser({ user: this.userMsg }).then(res => {
      })
    },
    uploadFail () {
      console.log('upload fail')
    },
    async uploadSuccess (url) {
      this.userMsg.icon = url
      await this.updateUser({ user: this.userMsg })
    }
  },
  data () {
    return {
      userMsg: {
        name: '',
        phone: '',
        introduction: '',
        icon: '',
        job: '',
        github: ''
      }
    }
  }
}

</script>

<style lang="scss">
@import '../assets/styles/setting.scss';

.action-button {
  @extend .button;
  margin: 20px 20px 20px 0;
}

</style>
