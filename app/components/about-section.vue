<template>
  <section class="about">
    <div class="container about-content">
      <article class="description">
        <h2 class="section-title">Hello!</h2>
        <p class="description-text">I’m Darina Yakimenko</p>
        <p class="description-text">
          A graphic designer specializing in branding and logo design with over
          4 years of experience in creating strong visual identities that
          balance aesthetics and functionality. Proficient in Adobe Illustrator,
          Photoshop, and InDesign, with a solid background in creative concept
          development, typography, and print production. I have worked on
          branding projects, advertising campaigns, and editorial design,
          delivering clear, impactful solutions that help businesses stand out
          and communicate effectively with their audience.
        </p>
        <div class="social-links">
          <a href="tel:+380960177259">+380960177259</a>
          <a href="mailto:darina@example.com">dahayakimenko@gmail.com</a>
          <a href="https://www.instagram.com/d.rrinnaaa/" target="_blank"
            >inst.d.rrinnaaa</a
          >
          <a
            href="https://www.linkedin.com/in/darina-yakimenko-5b07452aa/"
            target="_blank"
            >LinkedIn</a
          >
        </div>
      </article>
      <div class="photo">
        <img
          class="background-photo"
          src="~assets/icons/rectangle-under-photo.svg"
          alt=""
        />
        <img
          class="portrait-photo"
          src="~assets/images/designer.webp"
          loading="lazy"
          alt="A picture of Darina Yakimenko"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style scoped>
.about {
  background-color: var(--secondary-background-color);
  min-height: 100vh;
  padding-top: clamp(70px, 10vw, 164px);
}

.about-content {
  display: flex;
  gap: clamp(20px, 5vw, 100px);
}

.description {
  flex-basis: 65%;
}

p.description-text {
  font-size: clamp(20px, 3vw, var(--regular-font-size));
  line-height: 100%;
  color: var(--primary-dark-color);
  font-weight: 300;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: clamp(60px, 3vw, 122px);
  color: var(--primary-dark-color);
}

.social-links a {
  font-size: clamp(20px, 3vw, var(--regular-font-size));
  min-width: 305px;
  max-width: auto;
  text-align: center;
  font-weight: 300;
  padding: 3px 17px;
  border: 2px solid var(--primary-dark-color);
  border-radius: 30px;
}

.photo {
  position: relative;
  flex-basis: 40%;
  display: flex;
  align-items: flex-end;
}

.portrait-photo {
  position: absolute;
  bottom: 0;
  display: block;
  z-index: 2;
}

.background-photo {
  position: relative;
  display: block;
  bottom: 0;
  z-index: 1;
}

@media (max-width: 600px) {
  .about-content {
    flex-direction: column-reverse;
  }

  .photo {
    flex-basis: 100%;
  }
}
</style>
