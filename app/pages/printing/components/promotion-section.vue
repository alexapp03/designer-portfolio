<template>
  <section class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Promotion campain “VIYAR”</h2>
      <div class="printing-section-content">
        <div class="printing-grid">
          <div class="grid-item">
            <img
              src="~assets/images/printing/promotion/image1.png"
              alt="Image 1"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/promotion/image2.png"
              alt="Image 2"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/promotion/image3.png"
              alt="Image 3"
              loading="lazy"
            />
          </div>
          <div class="right-grid">
            <div class="grid-item">
              <img
                src="~assets/images/printing/promotion/image4.png"
                alt="Image 4"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/promotion/image4.png"
                alt="Image 4"
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
  grid-template-columns: 22% 22% 22% 1fr;
}

.right-grid {
  display: grid;
  gap: 21px;
}

@media (max-width: 900px) {
  .printing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
