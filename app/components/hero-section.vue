<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">Portfolio</h1>
      <div class="links">
        <NuxtLink to="/logofolio">Logofolio</NuxtLink>
        <NuxtLink to="/brand-identity">Brand identity</NuxtLink>
        <NuxtLink to="/printing">Printing</NuxtLink>
        <NuxtLink to="/illustration">Illustration</NuxtLink>
      </div>
      <h2 class="subtitle">Graphic Designer</h2>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style scoped>
.hero {
  background-color: var(--primary-dark-color);
  height: 100vh;
}

.hero-content {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/icons/hero-background.svg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1.title {
  color: var(--primary-color);
  font-size: clamp(60px, 15vw, 240px);
  text-align: center;
  text-transform: uppercase;
  line-height: 100%;
}

h2.subtitle {
  display: block;
  margin-top: clamp(50px, 15vh, 206px);
  color: var(--text-color);
  font-size: clamp(24px, 4vw, 55px);
  text-align: center;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 41px;
  gap: 64px;
}

.links a {
  color: var(--text-color);
  min-width: clamp(180px, 20vw, 265px);
  font-size: clamp(18px, 2.5vw, var(--regular-font-size));
  text-decoration: none;
  padding: 5px 0;
  border: 2px solid var(--text-color);
  transition: all 0.3s ease;
  font-weight: 300;
  text-align: center;
  border-radius: 30px;
}

.links a:hover {
  color: var(--text-color);
  border-color: var(--primary-color);
}

@media (max-width: 900px) {
  .links {
    gap: 25px;
  }
}
</style>
