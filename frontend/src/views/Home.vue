<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">WELCOME TO OUR STORE</p>

        <h1>
          Discover Products
          <span>You'll Love.</span>
        </h1>

        <p class="hero-text">
          Find quality products at great prices. Browse our collection
          and discover something perfect for you.
        </p>

        <div class="hero-buttons">
          <RouterLink to="/products" class="primary-btn">
            Shop Now
          </RouterLink>

          <RouterLink to="/categories" class="secondary-btn">
            Explore Categories
          </RouterLink>
        </div>
      </div>

      <div class="hero-image">
        <div class="image-placeholder">
          <span>🛍️</span>
          <p>Featured Products</p>
        </div>
      </div>
    </section>


    <!-- Categories -->
    <section class="section">
      <div class="section-header">
        <div>
          <p class="section-label">EXPLORE</p>
          <h2>Shop by Category</h2>
        </div>

        <RouterLink to="/categories" class="view-link">
          View All →
        </RouterLink>
      </div>

      <div class="categories">

        <RouterLink to="/categories" class="category-card">
          <div class="category-icon">👕</div>
          <h3>Fashion</h3>
          <p>Explore fashion products</p>
        </RouterLink>

        <RouterLink to="/categories" class="category-card">
          <div class="category-icon">💻</div>
          <h3>Electronics</h3>
          <p>Latest electronic gadgets</p>
        </RouterLink>

        <RouterLink to="/categories" class="category-card">
          <div class="category-icon">🏠</div>
          <h3>Home</h3>
          <p>Everything for your home</p>
        </RouterLink>

        <RouterLink to="/categories" class="category-card">
          <div class="category-icon">🎒</div>
          <h3>Accessories</h3>
          <p>Complete your style</p>
        </RouterLink>

      </div>
    </section>


    <!-- Featured Products -->
    <section class="section products-section">

      <div class="section-header">
        <div>
          <p class="section-label">OUR COLLECTION</p>
          <h2>Featured Products</h2>
        </div>

        <RouterLink to="/products" class="view-link">
          View All →
        </RouterLink>
      </div>

      <div class="products">

        <div class="product-card">
          <div class="product-image">
            <span>👟</span>
          </div>

          <div class="product-info">
            <p class="product-category">Fashion</p>
            <h3>Classic Sneakers</h3>

            <div class="product-bottom">
              <strong>$49.99</strong>

              <button>
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div class="product-card">
          <div class="product-image">
            <span>🎧</span>
          </div>

          <div class="product-info">
            <p class="product-category">Electronics</p>
            <h3>Wireless Headphones</h3>

            <div class="product-bottom">
              <strong>$79.99</strong>

              <button>
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div class="product-card">
          <div class="product-image">
            <span>⌚</span>
          </div>

          <div class="product-info">
            <p class="product-category">Accessories</p>
            <h3>Smart Watch</h3>

            <div class="product-bottom">
              <strong>$99.99</strong>

              <button>
                Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div class="product-card">
          <div class="product-image">
            <span>🎒</span>
          </div>

          <div class="product-info">
            <p class="product-category">Accessories</p>
            <h3>Travel Backpack</h3>

            <div class="product-bottom">
              <strong>$59.99</strong>

              <button>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- Call To Action -->
    <section class="cta">
      <div>
        <p class="section-label">START SHOPPING</p>

        <h2>Ready to find something amazing?</h2>

        <p>
          Browse our complete collection and discover products
          selected just for you.
        </p>
      </div>

      <RouterLink to="/products" class="cta-button">
        Browse Products
      </RouterLink>
    </section>


    <!-- Footer -->
    <footer class="footer">

      <div class="footer-brand">
        <h2>Logo</h2>
        <p>
          Quality products. Great prices.
          Simple shopping.
        </p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/categories">Categories</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </div>

      <div class="footer-links">
        <h3>Support</h3>

        <a href="#">Contact Us</a>
        <a href="#">Help Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
      </div>

    </footer>

  </div>
</template>
