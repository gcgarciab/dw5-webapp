<template>
  <h1>Create Transaction</h1>

  <form class="login-form" @submit.prevent="createTransaction()">
    <input
      type="text"
      class="form-control"
      placeholder="ID Destiny"
      v-model="userIdDestiny"
    ><br>
    <input
      type="number"
      class="form-control"
      placeholder="Value"
      v-model="value"
    ><br>
    <button type="submit" class="form-button">Create</button>
  </form>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "UserTransactions",

  data() {
    return {
      userIdDestiny: '',
      value: 0
    }
  },

  methods: {
    async createTransaction() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ($transaction: TransactionInput!) {
            createTransaction(transaction: $transaction) {
              id
              userIdDestiny
              userIdOrigin
              date
              value
            }
          }
        `,

        variables: {
          transaction: {
            userIdDestiny: this.userIdDestiny,
            userIdOrigin: localStorage.getItem('userId') || '',
            value: this.value
          }
        }
      })
      .then(result => {
        alert('Transaction successful, check your history!')
        // this.$router.push({ name: 'UserHistory' })
        console.log(result)
      })
      .catch(() => {
        alert('Insufficient balance, try again!')
      })
    }
  }
}
</script>

<style scoped>

</style>
