<template>
  <div class="navbar">
    <div class="logo">
      <RouterLink to="/">Logo</RouterLink>
    </div>
    <div class="navbar-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/categories">Categories</RouterLink>
    </div>
    <div class="actions">
      <button><Search /></button>
      <button><ShoppingCart /></button>
      <button><User /></button>
    </div>
  </div>
</template>

<script setup>
import { Search, ShoppingCart, User } from "lucide-vue-next";
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  font-weight: bold;
  box-shadow: 0 0 10px 0 #f8f8f8;
}
.navbar-links {
  display: flex;
  gap: 15px;
}
.actions{
    display: flex;
    gap: 15px;
}

.actions button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}   

.actions button:hover {
  color: tomato;
  border-radius: 5px;
  background-color: white;
  transform: scale(1.1);
  transition: 0.2s ease;
}   
</style>
