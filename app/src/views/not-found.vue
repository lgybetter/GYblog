<template>
  <h1>404 not found</h1>
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

