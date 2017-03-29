<template>
  <div class="publish-view">
    <navgatorColumn>
    </navgatorcolumn>
    <div class="publish-view-container">
      <div class="title-submit-box">
        <input type="text" class="title-text" />
        <input type="submit" value="Publish" class="publish-view-container-button publish-view-container-button-background-color"/>
      </div>
      <textarea class="text-box"></textarea>
      <div class="label-view">
        <input id="first-label" type="button" class="publish-view-container-button label-selector label-first-box" value="First label"/>
        <input id="second-label" type="button" class="publish-view-container-button label-selector label-second-box" value="Second label"/>
        <input id="third-label" type="button" class="publish-view-container-button label-selector label-third-box" value="Third label"/>
      </div>
    </div>
    <div id="alert-box" class="alert-box">
      <div class="label-topic"></div>
      <div class="label-box-container">
        <div class="label-option">
          <p>JavaScript</p>
        </div>
        <div class="label-option">
          <p>PHP</p>
        </div>
        <div class="label-option">
          <p>C++</p>
        </div>
        <div class="label-option">
          <p>Java</p>
        </div>
      </div>
    </div>
    <div class="shelter-box"></div>
  </div>
</template>

<script>
import navgatorColumn from '../components/navigator-column'

export default {
  components: {
    navgatorColumn
  }
}

</script>

<style lang="scss">
@import '../assets/styles/publish.scss';
</style>
