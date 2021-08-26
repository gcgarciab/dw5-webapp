<template>
  <div class="card">
    <img :src="product.imageSrc" :alt="product.name">
    <h4>{{ product.name }}</h4>
    <p>{{ productPrice }}</p>

    <input type="number" v-model="quantity" disabled>
    <button v-if="product.limit > quantity" @click="quantity += 1">+</button>
    <button v-if="quantity > 0" @click="quantity -= 1">-</button>
    <hr>
    <button @click="addToCart()" :disabled="quantity === 0">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
      // :to="{ name: 'Product', params: { id: product.id } }"
    }
  },

  data () {
    return {
      quantity: 0
    }
  },

  created() {
    console.log(this.product)
  },

  computed: {
    productPrice() {
      return this.product.price + ' COP'
    }
  },

  methods: {
    addToCart() {
      this.$emit('add', {
        quantity: this.quantity,
        id: this.product.id,
        total: this.quantity * this.product.price
      })
      this.quantity = 0
    }
  }
}
</script>

<style scoped>
.card:nth-child(3n + 2) {
  margin: 0 5% 10%;
}

.card {
  width: calc(30% - 2px);
  margin-bottom: 10%;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  max-width: 100%;
  height: auto;
}
</style>
