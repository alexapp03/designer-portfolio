<template>
  <section id="banners" class="printing-section">
    <div class="container">
      <h2 class="printing-section-title">Other products</h2>
      <div class="printing-section-content">
        <div class="printing-grid printing-grid1">
          <div class="left-grid">
            <div class="grid-item">
              <img
                src="~assets/images/printing/banners/image1.png"
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div class="grid-item">
              <img
                src="~assets/images/printing/banners/image2.png"
                alt="Image 2"
                loading="lazy"
              />
            </div>
          </div>
          <div class="right-grid">
            <div class="grid-item">
              <img
                src="~assets/images/printing/banners/image3.png"
                alt="Image 3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="printing-grid printing-grid2">
          <div class="grid-item">
            <img
              src="~assets/images/printing/banners/image4.png"
              alt="Image 4"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/banners/image5.png"
              alt="Image 5"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/banners/image6.png"
              alt="Image 6"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/banners/image7.png"
              alt="Image 7"
              loading="lazy"
            />
          </div>
        </div>
        <div class="printing-grid printing-grid3">
          <div class="grid-item">
            <img
              src="~assets/images/printing/banners/image8.png"
              alt="Image 8"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/printing/banners/image9.png"
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
.printing-grid1 {
  grid-template-columns: 3fr 2fr;
}

.printing-grid2 {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
}
.printing-grid3 {
  grid-template-columns: 44% 1fr;
}

.left-grid,
.right-grid {
  display: grid;
  gap: 21px;
}

/* @media (max-width: 1700px) {
  .printing-grid3 {
    grid-template-columns: 45% 1fr;
  }
} */

@media (max-width: 900px) {
  .printing-grid,
  .printing-grid1,
  .printing-grid2 {
    grid-template-columns: 1fr;
  }
}
</style>
