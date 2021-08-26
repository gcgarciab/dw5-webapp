<template>
  <header>
    <h1>Banco UN</h1>
    <AppNavbar v-if="isAuth" @logout="isAuth = false"/>
  </header>

  <router-view @logged="isAuth = true"/>

  <footer>
    <h2>MissionTIC 2022</h2>
  </footer>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import gql from "graphql-tag";

export default {
  components: { AppNavbar },

  data() {
    return {
      isAuth: false
    }
  },

  created() {
    if (localStorage.getItem('access')) {
      this.isAuth = true
      this.refreshToken()
    } else {
      this.$router.push({ name: 'UserAuth' })
    }
  },

  methods: {
    async refreshToken() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ($refreshToken: String!) {
            refreshToken(refresh: $refreshToken) {
              access
            }
          }
        `,

        variables: {
          refreshToken: localStorage.getItem('refresh')
        }
      }).then(result => {
        console.log(result.data.refreshToken)
        this.isAuth = true
        localStorage.setItem('access', result.data.refreshToken.access)
      }).catch(() => {
        alert('ERROR: Invalid token!')
        this.isAuth = false
        localStorage.clear()
        this.$router.push({ name: 'UserAuth' })
      })
    },

    logged() {
      this.isAuth = true
      this.userId = localStorage.getItem('userId')
    },
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

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

header {
  background: #2c3e50;
  color: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
  font-size: 20px;
}
</style>
