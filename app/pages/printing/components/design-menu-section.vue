<template>
  <section class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Design Menu for “Alina’s Coffee”</h2>
      <div class="printing-section-content">
        <div class="printing-grid">
          <div class="grid-item">
            <img
              src="~assets/images/printing/design-menu/image1.png"
              alt="Image 1"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/design-menu/image2.png"
              alt="Image 2"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/design-menu/image3.png"
              alt="Image 3"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/design-menu/image4.png"
              alt="Image 4"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/design-menu/image5.png"
              alt="Image 5"
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
  grid-template-columns: 320px 640px 1fr;
  grid-template-rows: 2fr auto;
}

.grid-item:nth-child(4) {
  grid-column: 1 / 3;
}

.grid-item img {
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1700px) {
  .printing-grid {
    grid-template-columns: 1fr 2fr;
  }

  .grid-item:nth-child(3) {
    order: 5;
  }
}

@media (max-width: 900px) {
  .printing-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .grid-item:nth-child(4) {
    grid-column: 1;
  }

  .grid-item img {
    object-fit: contain;
  }
}
</style>
