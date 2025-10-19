<template>
  <section id="bussiness-cards" class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Business cards</h2>
      <div class="printing-section-content">
        <div class="printing-grid">
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image1.png"
              alt="Image 1"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image2.png"
              alt="Image 2"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image3.png"
              alt="Image 3"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image4.png"
              alt="Image 4"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image5.png"
              alt="Image 5"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image6.png"
              alt="Image 6"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image7.png"
              alt="Image 7"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image8.png"
              alt="Image 8"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/business-cards/image9.png"
              alt="Image 9"
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
  grid-template-rows: repeat(3, 1fr);
}

@media (max-width: 900px) {
  .printing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
