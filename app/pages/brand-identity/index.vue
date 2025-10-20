<template>
  <section class="page">
    <div class="hero-wrapper">
      <div class="container">
        <div class="hero-content">
          <portfolio-navigation
            section-number="02"
            active-page="brand-identity"
          />

          <h1 class="page-title">Brand Identity</h1>
        </div>
      </div>

      <div class="divider-line"></div>
    </div>
    <div class="brand-identity-content">
      <godna-section />
      <edu-art-section />
      <la-femme-fatale-section />
    </div>
  </section>
</template>

<script lang="ts" setup>
import godnaSection from "./components/godna-section.vue";
import eduArtSection from "./components/edu-art-section.vue";
import laFemmeFataleSection from "./components/la-femme-fatale-section.vue";

// Set page title
useHead({
  title: "Brand Identity - Portfolio",
});
</script>

<style scoped></style>
