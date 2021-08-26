import { setContext } from 'apollo-link-context'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'


// HTTP connection to the API
const httpLink = createHttpLink({
    uri: 'https://dw5-api-gateway.herokuapp.com/',
})

const authLink = setContext((request, { headers }) => {
    return {
        headers: {
            ...headers,
            'Authorization': localStorage.getItem('access') || ''
        }
    }
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

createApp(App)
    .use(router)
    .use(apolloProvider)
    .mount('#app')
