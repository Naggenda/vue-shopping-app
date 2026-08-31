<template>
  <div class="products">
    <ProductCard
      v-for="product in productStore.filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { useProductStore } from "../store/productStore.js";
// import { computed } from "vue";

const productStore = useProductStore();

</script>
