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
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image7.png"
              alt="Image 7"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image8.png"
              alt="Image 8"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image9.png"
              alt="Image 9"
              loading="lazy"
            />
          </div>
        </div>
        <div class="illustration-grid illustration-grid1">
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image10.png"
              alt="Image 10"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image11.png"
              alt="Image 11"
              loading="lazy"
            />
          </div>
        </div>
        <div class="illustration-grid">
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image12.png"
              alt="Image 12"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image13.png"
              alt="Image 13"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image14.png"
              alt="Image 14"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image15.png"
              alt="Image 15"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image16.png"
              alt="Image 16"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image17.png"
              alt="Image 17"
              loading="lazy"
            />
          </div>
        </div>
        <div class="illustration-grid illustration-grid2">
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image18.png"
              alt="Image 18"
              loading="lazy"
            />
          </div>
          <div class="grid-item">
            <img
              src="~assets/images/illustration/illustration/image19.png"
              alt="Image 19"
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

.illustration-grid.illustration-grid1 {
  grid-template-columns: 44.64% 1fr;
}

.illustration-grid.illustration-grid2 {
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 900px) {
  .illustration-grid {
    grid-template-columns: 1fr;
  }
}
</style>
