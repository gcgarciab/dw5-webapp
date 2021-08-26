<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="'/user/' + userId">Profile</router-link> |
    <router-link to="/user/transactions/history">History</router-link> |
    <router-link to="/user/transactions/create">Transactions</router-link> |
    <button class="nav-button" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",

  data() {
    return {
      userId: null
    }
  },

  methods: {
    logout() {
      localStorage.clear()
      this.$emit('logout')
      this.$router.push({ name: 'UserAuth' })
    }
  },

  created() {
    this.userId = localStorage.getItem('userId')
  }
}
</script>

<style scoped>

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
}

#nav button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0 0 0 15px;
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
