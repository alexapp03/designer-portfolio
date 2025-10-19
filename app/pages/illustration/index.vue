app/pages/printing/components/hugelab-section.vue
<template>
  <section class="page">
    <div class="hero-wrapper">
      <div class="container">
        <div class="hero-content">
          <portfolio-navigation
            section-number="04"
            active-page="illustration"
          />

          <h1 class="page-title">Illustration</h1>
        </div>
      </div>

      <div class="divider-line"></div>
    </div>
    <div class="illustration-content">
      <illustration-section />
    </div>
  </section>
</template>
<script lang="ts" setup>
import illustrationSection from "./components/illustration-section.vue";
// Set page title
useHead({
  title: "Illustration - Portfolio",
});
</script>

<style scoped></style>
