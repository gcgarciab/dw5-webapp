<template>
  <h1>{{ user.toUpperCase() }}</h1>
</template>

<script>
export default {
  name: "User",

  data() {
    return {
      user: ''
    }
  },

  created() {
    this.user = this.$route.params.username
  }
}
</script>

<style scoped>

</style>
