<template>
  <header>
    <h1>Banco UN</h1>

    <div id="nav" v-if="isAuth">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/auth">Login</router-link> |
      <router-link to="/user/pedro">Profile</router-link>
    </div>
  </header>

  <router-view @user-auth="login"/>

  <footer>
    <h2>MissionTIC 2022</h2>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isAuth: true
    }
  },

  created() {
    if (localStorage.getItem('access')) {
      this.isAuth = true
    } else {
      this.$router.push({ name: 'UserAuth' })
    }
  },

  methods: {
    login(data, username) {
      console.log(data, username)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
