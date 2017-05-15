<template>
  <div class="child-view">
    <div class="text-view-container">
      <div class="head-picure-introduction-view">
        <div class="head-picture-box">
        </div>
        <div>
          <textarea v-model="user.introduction" class="textarea" placeholder="Introduce yourself here..."></textarea>
        </div>
      </div>
      <div class="information-setting-view">
        <div class="a-line-display">
          <div>
            <p>Nick Name:</p>
          </div>
          <input type="text" v-model="user.name" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>Phone Number:</p>
          </div>
          <input type="text" v-model="user.phone" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>Job Occupation:</p>
          </div>
          <input type="text" v-model="user.job" class="text-box" />
        </div>
        <input class="action-button" type="submit" value="Save" @click="save"/>
        <input class="action-button" type="submit" value="Cancle" @click="cancle"/>        
      </div>
    </div>
  </div>
</template>

<script>
import navigatorColumn from '../components/navigator-column'
import { mapActions } from 'vuex'

export default {
  components: {
    navigatorColumn
  },
  methods: {
    ...mapActions(['updateUser']),
    cancle () {
      this.$router.push('/')
    },
    save () {
      this.updateUser({ user: this.user }).then(res => {
      })
    }
  },
  data () {
    return {
      user: {
        name: '',
        phone: '',
        introduction: '',
        icon: '',
        job: ''
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
