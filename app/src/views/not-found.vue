<template>
  <h1>404 not found</h1>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$router.back()
    }, 1000)
  }
}
</script>

