<!--suppress JSUnresolvedVariable -->
<template>
  <section class="login">
    <h1>Login</h1>

    <form
      class="login-form"
      @submit.prevent="authenticate"
    >
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        v-model="username"
      ><br>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      ><br>
      <button type="submit" class="form-button">Submit</button>
    </form>
  </section>
</template>

<script>
import gql from "graphql-tag";
import jwtDecode from 'jwt-decode'

export default {
  name: "UserAuth",

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async authenticate() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ($authenticateCredentials: CredentialsInput) {
            authenticate(credentials: $authenticateCredentials) {
              access
              refresh
            }
          }
        `,

        variables: {
          authenticateCredentials: {
            username: this.username,
            password: this.password
          }
        }
      })
      .then(result => {
        let data = result.data.authenticate
        data.userId = jwtDecode(data.access).user_id.toString().padStart(3, "0")

        this.setUserData(data)
      })
      .catch(() => {
        alert('ERROR: Invalid credentials !!')
      })

      console.log(this.username, this.password)
    },

    setUserData(data) {
      console.log(data)
      localStorage.setItem('access', data.access)
      localStorage.setItem('refresh', data.refresh)
      localStorage.setItem('userId', data.userId)
      localStorage.setItem('username', this.username)

      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

</style>
