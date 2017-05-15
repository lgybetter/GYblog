<template>
  <div>404 not found</div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$router.replace({path: '/'})
    }, 1000)
  }
}
</script>

