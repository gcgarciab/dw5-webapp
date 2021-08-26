<template>
  <h1>Hi {{ username }}, you last changes!</h1>
  <hr>
  <table v-if="transactionsByUserId.length > 0">
    <thead>
      <th>IdOrigin</th>
      <th>IdDestiny</th>
      <th>Date</th>
      <th>Hour</th>
      <th>Value</th>
    </thead>
    <tbody>
      <tr v-for="transaction in transactionsByUserId" :key="transaction.id">
        <td>{{ transaction.userIdOrigin }}</td>
        <td>{{ transaction.userIdDestiny }}</td>
        <td>{{ transaction.date.substring(0, 10) }}</td>
        <td>{{ transaction.date.substring(11, 19) }}</td>
        <td>${{ transaction.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "UserHistory",

  data() {
    return {
      username: null,
      transactionsByUserId: []
    }
  },

  created() {
    this.username = localStorage.getItem('username')
  },

  apollo: {
    transactionsByUserId: {
      query: gql`
        query ($userId: String!) {
          transactionsByUserId(userId: $userId) {
            id
            userIdOrigin
            userIdDestiny
            value
            date
          }
        }
      `,

      variables: {
        userId: localStorage.getItem('userId')
      }
    }
  }
}
</script>

<style scoped>

</style>
