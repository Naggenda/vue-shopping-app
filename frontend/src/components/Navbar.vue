<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">Logo</RouterLink>
    </div>

    <div class="navbar-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/categories">Categories</RouterLink>
    </div>

    <div class="actions">
      <button @click="openSearch" aria-label="Search">
        <Search :size="20" />
      </button>

      <RouterLink to="/cart" aria-label="Shopping Cart" class="icon-link">
        <ShoppingCart :size="20" />
      </RouterLink>

      <button aria-label="User Account">
        <User :size="20" />
      </button>
    </div>
  </nav>

  <!-- Search Overlay -->
  <div v-if="isSearchOpen" class="search-overlay">
    <div class="search-box">
      <Search :size="22" />

      <input
        v-model="productStore.searchQuery"
        type="text"
        placeholder="Search products..."
        autofocus
      />
      <button @click="openSearch" class="close-search" aria-label="Close Search">
        <X :size="22" />
      </button>
    </div>

    <div v-if="productStore.searchQuery" class="search-results">
      <ProductCard
        v-for="product in productStore.filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { Search, ShoppingCart, User, X } from "lucide-vue-next";
import { ref } from "vue";
import { useProductStore } from "../store/productStore.js";
import ProductCard from "../components/ProductCard.vue";

const productStore = useProductStore();
const isSearchOpen = ref(false);

const openSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 40px;

  background-color: #ffffff;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo */

.logo a {
  text-decoration: none;
  color: #111827;

  font-size: 24px;
  font-weight: 800;
}

/* Navigation */

.navbar-links {
  display: flex;
  gap: 30px;
}

.navbar-links a {
  text-decoration: none;
  color: #374151;

  font-size: 15px;
  font-weight: 600;

  transition: 0.2s ease;
}

.navbar-links a:hover {
  color: tomato;
}

.navbar-links a.router-link-active {
  color: tomato;
}

/* Actions */

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.actions button,
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  color: #374151;

  cursor: pointer;

  padding: 8px;

  border-radius: 6px;

  transition: 0.2s ease;
}

.actions button:hover,
.icon-link:hover {
  color: tomato;
  background-color: #f8f8f8;
  transform: scale(1.1);
}

/* Search Overlay */

.search-overlay {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.45);

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  z-index: 2000;
}

/* Search Box */

.search-results {
  width: min(600px, 90%);
  max-height: 500px;

  margin-top: 15px;

  padding: 15px;

  background: white;

  border-radius: 10px;

  overflow-y: auto;

  display: grid;
  gap: 15px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.search-box {
  width: min(600px, 90%);

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 15px 20px;

  background-color: white;

  border-radius: 10px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.search-box > svg {
  color: #6b7280;
}

.search-box input {
  flex: 1;

  border: none;
  outline: none;

  font-size: 17px;

  color: #111827;
}

.search-box input::placeholder {
  color: #9ca3af;
}

/* Close Button */

.close-search {
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background: none;

  color: #6b7280;

  cursor: pointer;

  padding: 5px;

  border-radius: 5px;

  transition: 0.2s ease;
}

.close-search:hover {
  color: tomato;
  background-color: #f3f4f6;
}

/* Mobile */

@media (max-width: 768px) {
  .navbar {
    padding: 15px 20px;
  }

  .navbar-links {
    gap: 15px;
  }

  .navbar-links a {
    font-size: 14px;
  }

  .logo a {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .navbar-links {
    display: none;
  }

  .search-box {
    width: 85%;
  }
}
</style>
