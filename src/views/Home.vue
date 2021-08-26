<template>
  <div class="home">
    <h1>Products</h1>
    <section v-if="products.length > 0" class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="addToCart($event)"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard'
export default {
  name: 'Home',

  components: { ProductCard },

  data () {
    return {
      products: [
        {
          id: 'fasdfasdf',
          name: 'Producto 1',
          price: 25000,
          imageSrc: 'https://i.imgur.com/6MuObMP.jpg',
          limit: 40
        },
        {
          id: 't34t4rgr',
          name: 'Producto 2',
          price: 75000,
          imageSrc: 'https://i.imgur.com/6MuObMP.jpg',
          limit: 4
        },
        {
          id: 'jghj67jg',
          name: 'Producto 3',
          price: 215000,
          imageSrc: 'https://i.imgur.com/6MuObMP.jpg',
          limit: 10
        },
        {
          id: '65thfghfgh',
          name: 'Producto 4',
          price: 15000,
          imageSrc: 'https://i.imgur.com/6MuObMP.jpg',
          limit: 20
        },
        {
          id: 'lkd45t4oi5',
          name: 'Producto 5',
          price: 5000,
          imageSrc: 'https://i.imgur.com/6MuObMP.jpg',
          limit: 3
        },
        {
          id: 'gsdfigsoij43',
          name: 'Producto 6',
          price: 35000,
          imageSrc: 'https://i.imgur.com/6MuObMP.jpg',
          limit: 8
        }
      ],
      cart: []
    }
  },

  beforeCreate() {
    console.log(2)
  },

  created() {
    console.log('Hola')
  },

  methods: {
    addToCart(data) {
      console.log(data)
      this.cart.push(data)
    }
  }
}
</script>

<style>
.products-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding: 40px 10%;
  width: 100%;
  box-sizing: border-box;
}
</style>
