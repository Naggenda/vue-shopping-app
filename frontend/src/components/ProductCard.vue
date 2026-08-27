<template>
  <div class="product-card">
    <div class="product-image">
      <span>{{ props.product.image }}</span>
    </div>
    <div class="product-info">
      <h5>{{ props.product.name }}</h5>
      <p>{{ props.product.desc }}</p>
      <div class="product-bottom">
        <strong>{{props.product.price}} ugx</strong>

        <button>Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>
