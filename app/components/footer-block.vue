<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="container">
        <div class="footer-content">
          <h1 class="slogan">
            I treat every project
            <div>with love</div>
          </h1>
          <h6 class="slogan-secondary">
            and incorporate your wishes into my work.
          </h6>

          <div class="footer-links">
            <icon-designer-long-logo />
            <div class="links">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/#resume">Resume</NuxtLink>
              <NuxtLink to="/#about-me">Contacts</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup></script>
<style scoped>
.footer {
  background-color: var(--primary-dark-color);
  height: 100vh;
  position: relative;
  z-index: 1001;
}

.footer-wrapper {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/icons/hero-background.svg");
  background-size: cover;
  background-position: center;
}

.container {
  height: 100%;
}

.footer-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
}

.slogan {
  color: var(--text-color);
  font-size: clamp(50px, 8vw, 100px);
  line-height: 100%;
}

.slogan-secondary {
  padding-top: 30px;
  color: var(--text-color);
  font-size: clamp(16px, 2.5vw, var(--regular-font-size));
  font-weight: 300;
}

.footer-links {
  position: absolute;
  bottom: 80px;
  display: flex;
  gap: clamp(50px, 10vw, 180px);
  width: 100%;
}

.footer-links .links {
  display: flex;
  gap: clamp(30px, 4vw, 100px);
  color: var(--text-color);
  font-size: clamp(16px, 2.5vw, var(--regular-font-size));
  font-weight: 700;
}

@media (max-width: 900px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
    bottom: 40px;
  }
}
</style>
