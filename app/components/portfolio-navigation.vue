<template>
  <div class="navigation">
    <span class="section-number">{{ sectionNumber }}</span>
    <nav class="nav-links">
      <NuxtLink to="/logofolio" :class="{ active: activePage === 'logofolio' }"
        >Logofolio</NuxtLink
      >
      <NuxtLink
        to="/brand-identity"
        :class="{ active: activePage === 'brand-identity' }"
        >Brand identity</NuxtLink
      >
      <NuxtLink to="/printing" :class="{ active: activePage === 'printing' }"
        >Printing</NuxtLink
      >
      <NuxtLink
        to="/illustration"
        :class="{ active: activePage === 'illustration' }"
        >Illustration</NuxtLink
      >
    </nav>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  sectionNumber: string;
  activePage: "logofolio" | "brand-identity" | "printing" | "illustration";
}
defineProps<Props>();
</script>
<style scoped>
.navigation {
  display: flex;
  align-items: flex-start;
  padding-top: 90px;
  margin-bottom: 30px;
}

.section-number {
  color: var(--primary-dark-color);
  font-size: clamp(120px, 15vw, 350px);
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  text-shadow: -1px -1px 0 var(--primary-color), 1px -1px 0 var(--primary-color),
    -1px 1px 0 var(--primary-color), 1px 1px 0 var(--primary-color);
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  margin-top: 34px;
  margin-left: 48px;
}

.nav-links a {
  color: var(--text-color);
  font-size: clamp(18px, 2.5vw, var(--regular-font-size));
  text-decoration: none;
  font-weight: 300;
  transition: all 0.3s ease;
}

.nav-links a.active {
  color: var(--text-color);
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 900px) {
  .navigation {
    margin-bottom: 50px;
  }

  .nav-links {
    margin-left: 10px;
  }
}

@media (max-width: 600px) {
  .navigation {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .nav-links {
    gap: 12px;
    margin-top: 18px;
  }
}
</style>
