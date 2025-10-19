<template>
  <section class="page">
    <div class="hero-wrapper">
      <div class="container">
        <div class="hero-content">
          <portfolio-navigation section-number="03" active-page="printing" />

          <h1 class="page-title">Printing</h1>
        </div>
      </div>

      <div class="divider-line"></div>
    </div>
    <div class="printing-content">
      <svoya-section />
      <hugelab-section />
      <advertising-menu-holders-section />
      <advertising1-section />
      <advertising2-section />
      <advertising3-section />
      <advertising4-section />
      <posters-for-exhibition-section />
      <promotion-section />
      <business-cards-section />
      <other-products-section />
      <banners-section />
      <design-menu-section />
      <practima-section />
    </div>
  </section>
</template>

<script lang="ts" setup>
import svoyaSection from "./components/svoya-section.vue";
import hugelabSection from "./components/hugelab-section.vue";
import advertisingMenuHoldersSection from "./components/advertising-menu-holders-section.vue";
import advertising1Section from "./components/advertising1-section.vue";
import advertising2Section from "./components/advertising2-section.vue";
import advertising3Section from "./components/advertising3-section.vue";
import advertising4Section from "./components/advertising4-section.vue";
import businessCardsSection from "./components/business-cards-section.vue";
import designMenuSection from "./components/design-menu-section.vue";
import postersForExhibitionSection from "./components/posters-for-exhibition-section.vue";
import promotionSection from "./components/promotion-section.vue";
import otherProductsSection from "./components/other-products-section.vue";
import bannersSection from "./components/banners-section.vue";
import practimaSection from "./components/practima-section.vue";

// Set page title
useHead({
  title: "Printing - Portfolio",
});
</script>

<style scoped></style>
