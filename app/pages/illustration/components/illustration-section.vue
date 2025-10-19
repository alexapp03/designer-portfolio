<template>
  <section class="illustration-section">
    <div class="container">
      <h2 class="illustration-section-title">Illustration</h2>
      <div class="illustration-section-content">
        <div class="illustration-grid">
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image1.png"
              alt="Image 1"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image2.png"
              alt="Image 2"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image3.png"
              alt="Image 3"
              loading="lazy"
            />
          </div>
        </div>
        <div class="illustration-grid">
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image4.png"
              alt="Image 4"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image5.png"
              alt="Image 5"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image6.png"
              alt="Image 6"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="divider-line-with-text thin">
        <span class="divider-title">Illustration</span>
        <div class="divider" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.illustration-grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 900px) {
  .illustration-grid {
    grid-template-columns: 1fr;
  }
}
</style>
