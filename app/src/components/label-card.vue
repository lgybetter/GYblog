<template>
  <div :class="[{'action-label': action},'label']" @click="emitClick">
    <img :src="icon"></img>
    <span>{{tip}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {},
      tip: {},
      action: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    methods: {
      emitClick () {
        this.$emit('clickEvent')
      }
    }
  }
</script>

<style scoped lang="scss">

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px 0 15px;
  cursor: pointer;
  span {
    padding: 3px;
    text-align: center;
    min-width: 35px;
    color: white;
    font-size: 16px;
    border-radius: 3px;
    white-space:nowrap;
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
}

.action-label {
  span {
    background: rgb(0, 219, 139);    
  }
}

</style>

