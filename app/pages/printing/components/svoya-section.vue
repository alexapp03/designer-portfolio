<template>
  <section class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Catalog wardrobe system SVOYA</h2>
      <div class="printing-section-content">
        <div class="printing-grid">
          <div class="grid-left">
            <div class="grid-item">
              <img
                src="~assets/images/printing/svoya/image1.png"
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/svoya/image2.png"
                alt="Image 2"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/svoya/image3.png"
                alt="Image 3"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/svoya/image4.png"
                alt="Image 4"
                loading="lazy"
              />
            </div>
          </div>
          <div class="grid-right">
            <div class="grid-item">
              <img
                src="~assets/images/printing/svoya/image5.png"
                alt="Image 5"
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
  grid-template-columns: repeat(3, 1fr);
}
.grid-left {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column: 1 / 3;
  gap: 21px;
}
.grid-right {
  grid-column: 3 / 5;
}

@media (max-width: 900px) {
  .printing-grid {
    grid-template-columns: 1fr;
  }
  .grid-left {
    grid-column: 1 / 2;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
  .grid-right {
    grid-column: 1 / 2;
    margin-top: 21px;
  }
}
</style>
