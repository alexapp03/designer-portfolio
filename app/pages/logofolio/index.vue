<template>
  <section class="page">
    <div class="hero-wrapper">
      <div class="container">
        <div class="hero-content">
          <portfolio-navigation section-number="01" active-page="logofolio" />

          <h1 class="page-title">Logofolio</h1>
        </div>
      </div>

      <div class="divider-line"></div>
    </div>
    <div class="logo-grid-wrapper">
      <div class="container">
        <div class="logo-grid">
          <logo1 />
          <logo2 />
          <logo3 />
          <logo4 />
          <logo5 />
          <logo6 />
          <logo7 />
          <logo8 />
          <logo9 />
          <logo10 />
          <logo11 />
          <logo12 />
        </div>
        <div class="divider-line-with-text">
          <span class="divider-title">Logofolio</span>
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import logo1 from "./components/logo/logo-1.vue";
import logo2 from "./components/logo/logo-2.vue";
import logo3 from "./components/logo/logo-3.vue";
import logo4 from "./components/logo/logo-4.vue";
import logo5 from "./components/logo/logo-5.vue";
import logo6 from "./components/logo/logo-6.vue";
import logo7 from "./components/logo/logo-7.vue";
import logo8 from "./components/logo/logo-8.vue";
import logo9 from "./components/logo/logo-9.vue";
import logo10 from "./components/logo/logo-10.vue";
import logo11 from "./components/logo/logo-11.vue";
import logo12 from "./components/logo/logo-12.vue";

// Set page title
useHead({
  title: "Logofolio - Portfolio",
});
</script>

<style scoped>
.logo-grid-wrapper {
  background: url(~/assets/images/logo-background.jpg);
  background-size: cover;
  min-height: 100vh;
}

.logo-grid {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px 50px;
  padding-top: 150px;
  margin: 0 auto;
}

.logo-grid svg {
  transition: transform 0.3s ease;
}

.logo-grid svg:hover {
  transform: scale(1.05);
}

/* Tablet adaptation */
@media (max-width: 900px) {
  .logo-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 60px 0;
  }

  .logo-grid svg {
    max-width: 250px;
  }
}

/* Mobile adaptation */
@media (max-width: 600px) {
  .logo-grid {
    gap: 70px;
  }

  .logo-grid svg {
    max-width: 200px;
  }
}

/* Extra small mobile adaptation */
@media (max-width: 480px) {
  .logo-grid {
    grid-template-columns: 1fr;
    max-width: 300px;
    gap: 100px;
  }

  .logo-grid svg {
    max-width: 250px;
  }
}
</style>
