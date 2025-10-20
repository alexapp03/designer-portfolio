<template>
  <NuxtPage />
  <div class="fixed-controls">
    <nuxt-link class="link-primary link" to="/#resume">Resume</nuxt-link>
    <nuxt-link class="link-secondary link" to="/#about-me">Contacts</nuxt-link>
  </div>
</template>

<style>
/* Import CSS Reset */
@import "~/assets/css/variables.css";
@import "~/assets/css/reset.css";
@import "~/assets/css/basic.css";
@import "~/assets/css/page.css";
@import "~/assets/css/brand-identity-section.css";
@import "~/assets/css/printing-section.css";
@import "~/assets/css/illustration-section.css";

.fixed-controls {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  z-index: 1000;

  display: flex;
  align-items: center;
}

.fixed-controls .link:first-child {
  border-radius: 10px 0 0 10px;
}
.fixed-controls .link:last-child {
  border-radius: 0 10px 10px 0;
}

.link-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
}

.link-secondary {
  background: var(--primary-dark-color);
  color: white;
  border: none;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
}
</style>
