<template>
  <div class="stars-view">
    <template v-for="item in collections.objects">
      <star-card :information="item"></star-card>
    </template>
  </div>
</template>

<script>
import starCard from '../components/star-card'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    starCard
  },
  computed: {
    ...mapGetters(['collections'])
  },
  methods: {
    ...mapActions(['queryResource'])
  },
  created () {
    this.queryResource({
      url: 'collection',
      args: {}
    }).then(res => {
      console.log(res)
    })
  }
}

</script>

<style lang="scss" scoped>

.stars-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

