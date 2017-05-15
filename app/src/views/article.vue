<template>
  <div class="child-view">
    
  </div>
</template>

<style>
@import '../assets/styles/article.scss';

</style>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.getResource({ url: 'post', id: this.$route.params.id }).then(data => {
      console.log(data)
    })
  },
  methods: {
    ...mapActions(['getResource'])
  }
}
</script>
