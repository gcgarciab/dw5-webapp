<template>
  <div v-if="accountByUserId.balance">
    <h1>{{ username }}</h1>
    <hr>
    <h2>Balance: $ {{ accountByUserId.balance }}</h2>
    <hr>
    <h2>Date last change: {{ accountByUserId.lastChange.substring(0, 10) }}</h2>
    <hr>
    <h2>Hour last change: {{ accountByUserId.lastChange.substring(11, 19) }}</h2>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "User",

  data() {
    return {
      username: '',
      accountByUserId: {
        balance: null,
        lastChange: null
      }
    }
  },

  async created() {
    this.username = localStorage.getItem('username')

    await this.$apollo.query({
      query: gql`
        query ($userId: String!) {
          accountByUserId(userId: $userId) {
            balance
            lastChange
          }
        }
      `,

      variables: {
        userId: localStorage.getItem('userId')
      }
    })
    .then(result => {
      this.accountByUserId = result.data.accountByUserId
      console.log(result)
    })
    .catch(() => {
      alert('User with no account')
      localStorage.clear()
      this.$router.push({ name: 'UserAuth' })
    })
  },

  // apollo: {
  //   accountByUserId: {
  //     query: gql`
  //       query ($userId: String!) {
  //         accountByUserId(userId: $userId) {
  //           balance
  //           lastChange
  //         }
  //       }
  //     `,
  //
  //     variables: {
  //       userId: localStorage.getItem('userId') || ''
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>
