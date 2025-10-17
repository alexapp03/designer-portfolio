<template>
  <section class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Advertising</h2>
      <div class="printing-section-content">
        <div class="printing-grid">
          <div class="grid-item">
            <img
              src="~assets/images/printing/advertising1/image1.png"
              alt="Image 1"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/advertising1/image2.png"
              alt="Image 2"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/advertising1/image3.png"
              alt="Image 3"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="divider-line-with-text thin">
        <span class="divider-title">Printing</span>
        <div class="divider" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.printing-grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 900px) {
  .printing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
