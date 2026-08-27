<template>
  <div class="products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
  {
    id: 1,
    name: 'Laptop',
    desc: 'This is German made',
    price: 100000,
    image: '💻'
  },
  {
    id: 2,
    name: 'Charger',
    desc: 'High quality excellent charge',
    price: 120000
  },
  {
    id: 3,
    name: 'Headphones',
    desc: 'this produces 12sph',
    price: 80000
  }
]
</script>