<template>
    <div class="navigation-column">
      <template v-for="menu in menus">
        <div @click="menuClick(menu.name, menu.router)"><img :src="menu.icon"></div>
      </template>
    </div>
</template>

<script>
import turnBackIcon from '../assets/images/ic_arrow_back_white_36dp_1x.png'
import publishIcon from '../assets/images/ic_mode_edit_white_36dp_1x.png'
import personalIcon from '../assets/images/ic_person_white_36dp_1x.png'
import showInfoIcon from '../assets/images/ic_last_page_white_36dp_1x.png'
import turnStarIcon from '../assets/images/ic_star_white_36dp_1x.png'
import turnFavoriteIcon from '../assets/images/ic_favorite_white_36dp_1x.png'
import turnSettingIcon from '../assets/images/ic_settings_white_36dp_1x.png'

export default {
  methods: {
    menuClick (name, router) {
      switch (name) {
        case 'showInfo':
          this.$emit('navColumnHandler')
          break
        case 'turnBack':
          this.$router.back()
      }
    }
  },
  data () {
    return {
      menus: [
        {
          icon: turnBackIcon,
          name: 'turnBack',
          router: ''
        },
        {
          icon: publishIcon,
          name: 'publish',
          router: ''
        },
        {
          icon: personalIcon,
          name: 'personal',
          router: ''
        },
        {
          icon: showInfoIcon,
          name: 'showInfo',
          router: ''
        },
        {
          icon: turnStarIcon,
          name: 'turnStar',
          router: ''
        },
        {
          icon: turnFavoriteIcon,
          name: 'turnFavorite',
          router: ''
        },
        {
          icon: turnSettingIcon,
          name: 'turnSetting',
          router: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.navigation-column {
  width: 3%;
  min-width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(0, 219, 139);
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  z-index: 4;
  box-shadow: 10px 0 20px #000;
  div {
    width: 60px;
    height: 100px;
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #008f5b;
      background-color: #3fff7a;
    }
  }
}
</style>
