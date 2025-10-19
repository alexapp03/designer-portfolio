<template>
  <section class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Other products</h2>
      <div class="printing-section-content">
        <div class="printing-grid">
          <div class="left-grid">
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image1.png"
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image2.png"
                alt="Image 2"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image3.png"
                alt="Image 3"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image4.png"
                alt="Image 4"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image5.png"
                alt="Image 5"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image6.png"
                alt="Image 6"
                loading="lazy"
              />
            </div>
          </div>
          <div class="right-grid">
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image7.png"
                alt="Image 7"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/other-products/image8.png"
                alt="Image 7"
                loading="lazy"
              />
            </div>
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
  grid-template-columns: 2fr 1fr;
}

.left-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 21px;
}

.right-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 21px;
}

@media (max-width: 900px) {
  .printing-grid,
  .left-grid {
    grid-template-columns: 1fr;
  }
}
</style>
