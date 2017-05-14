<template>
  <div class="personal-view">
    <navigatorColumn></navigatorcolumn>
    <div class="text-view-container">
      <div class="head-picure-introduction-view">
        <div class="head-picture-box">
          <!--<img src="image/head-picture.jpg" />-->
        </div>
        <div>
          <textarea class="textarea" placeholder="Introduce yourself here..."></textarea>
        </div>
      </div>
      <div class="information-setting-view">
        <div class="a-line-display">
          <div>
            <p>Nick Name:</p>
          </div>
          <input type="text" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>Phone Number:</p>
          </div>
          <input type="text" class="text-box" />
        </div>
        <div class="a-line-display">
          <div>
            <p>Job Occupation:</p>
          </div>
          <input type="text" class="text-box" />
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import navigatorColumn from '../components/navigator-column'

export default {
  components: {
    navigatorColumn
  }
}

</script>

<style lang="scss">
@import '../assets/styles/personal.scss';
</style>
