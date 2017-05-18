<template>
  <div class="child-view">
    <h1>asdfas</h1>
    <vue-markdown class="markdown">this is the default slot</vue-markdown>
  </div>
</template>

<style scoped>
@import '../assets/styles/article.scss';
.child-view {
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.markdown {
  width: 80%;
}
</style>

<script>
import { mapActions } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  created () {
    this.getResource({ url: 'post', id: this.$route.params.id }).then(data => {
      console.log(data)
    })
  },
  data () {
    return {}
  },
  components: {
    VueMarkdown
  },
  methods: {
    ...mapActions(['getResource'])
  }
}
</script>
