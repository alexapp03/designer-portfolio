<template>
  <section class="resume">
    <div class="container">
      <h2 class="section-title">Resume</h2>
      <div class="resume-content">
        <div class="resume-content-left">
          <div class="resume-block experience">
            <div class="resume-block-header">
              <div class="resume-icon-wrapper"><icon-bag></icon-bag></div>
              <h3 class="resume-block-title">Experience</h3>
            </div>
            <div class="resume-block-content line-with-dots">
              <div class="resume-content-item">
                <h6>Freelancer (2020-2022)</h6>
                <p>
                  Creation of graphic materials, visual identity, product
                  design, logos, development of printed products and
                  illustrations
                </p>
              </div>
              <div class="resume-content-item">
                <h6>SALES MASTER LLC (2022-2023)</h6>
                <p>
                  Branding and corporate identity: presentations design,
                  rebranding, brand books, print and advertising materials.
                </p>
              </div>
              <div class="resume-content-item">
                <h6>
                  Practima (Freelance project)
                  <div>Vocational Training Center in Warsaw</div>
                </h6>
                <p>
                  Educational presentations for new and ongoing courses, webinar
                  materials, marketing decks for sales department, social media
                  design.
                </p>
              </div>
              <div class="resume-content-item">
                <h6>Viyar Company (2024 – now)</h6>
                <p>
                  Catalog and print design, packaging concepts for promo
                  samples, brand identity and showroom infographics.
                </p>
              </div>
            </div>
          </div>
          <div class="resume-block achievements">
            <div class="resume-block-header">
              <div class="resume-icon-wrapper"><icon-key></icon-key></div>
              <h3 class="resume-block-title achievements">Key Achievements</h3>
            </div>
            <div class="resume-block-content line-with-dots">
              <div class="resume-content-item">
                <p>
                  Designed a logo for the
                  <strong>international children’s organization “ELA”</strong>
                </p>
              </div>
              <div class="resume-content-item">
                <p>
                  Created advertising and social posters for the luxury
                  <strong> floristry brand “FIORI”</strong>
                </p>
              </div>
              <div class="resume-content-item">
                <p>
                  Developed infographics for official presentations and
                  communications of the <strong>Parliament of Ukraine.</strong>
                </p>
              </div>
              <div class="resume-content-item">
                <p>
                  Designed GIF animations for the English-language website
                  <strong>www.anic.world.</strong>
                </p>
              </div>
              <div class="resume-content-item">
                <p>
                  Produced printed materials for the
                  <strong>“Brocard”</strong> perfume and cosmetics retail chain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-content-right">
          <div class="resume-block education">
            <div class="resume-block-header">
              <div class="resume-icon-wrapper"><icon-book></icon-book></div>
              <h3 class="resume-block-title">Education</h3>
            </div>
            <div class="resume-block-content">
              <div class="resume-content-item">
                <h6>Junior specialist</h6>
                <p>KNUTD Professional College of Arts and Design</p>
                <strong>Graphic design</strong>
              </div>
              <div class="resume-content-item">
                <h6>Bachelor</h6>
                <p>Kyiv National University of Technology and Design</p>
                <strong>Graphic design</strong>
              </div>
              <div class="resume-content-item">
                <h6>Magistracy</h6>
                <p>Kyiv National University of Technology and Design</p>
                <strong>Multimedia design</strong>
              </div>
            </div>
          </div>
          <div class="resume-block abilities">
            <div class="resume-block-header">
              <div class="resume-icon-wrapper"><icon-pen></icon-pen></div>
              <h3 class="resume-block-title">Abilities</h3>
            </div>
            <div class="resume-block-content">
              <div class="resume-content-item">
                <p>Creative thinking;</p>
                <p>Sociability;</p>
                <p>Ability to learn quickly;</p>
                <p>Willingness to self-improvement;</p>
                <p>Ability to work in a team;</p>
                <p>Ambition.</p>
              </div>
            </div>
          </div>
          <div class="resume-block languages">
            <div class="resume-block-header">
              <div class="resume-icon-wrapper">
                <icon-language></icon-language>
              </div>
              <h3 class="resume-block-title">Languages</h3>
            </div>
            <div class="resume-block-content">
              <div class="resume-content-item">
                <strong>English</strong> - B2
              </div>
              <div class="resume-content-item">
                <strong>Ukrainian</strong> - native
              </div>
              <div class="resume-content-item">
                <strong>Spanish</strong> - A2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.resume {
  background-color: var(--secondary-background-color);
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: clamp(50px, 6vw, 164px);
}

.resume-content {
  display: flex;
  justify-content: space-between;
  gap: 70px;
}

.resume-content-left {
  flex-basis: 60%;
}

.resume-content-right {
  flex-basis: 40%;
}

.resume-block-content {
  position: relative;
  padding-left: 45px;
  margin-left: 28px;
}

.resume-block-content.line-with-dots {
  border-left: 2px solid var(--primary-dark-color);
}

.resume-icon-wrapper {
  width: fit-content;
  border: 2px solid var(--primary-dark-color);
  border-radius: 50%;
  padding: 9px;
  margin-right: 14px;
}

.resume-block.achievements,
.resume-block.abilities,
.resume-block.languages {
  margin-top: 80px;
}

.resume-icon-wrapper svg {
  width: 39px;
  height: 39px;
}

.resume-block-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.resume-block-title {
  width: 305px;
  color: var(--primary-dark-color);
  font-size: clamp(18px, 2.5vw, var(--regular-font-size));
  font-weight: 300;
  padding: 5px 0;
  text-align: center;
  border: 2px solid var(--primary-dark-color);
  border-radius: 30px;
  line-height: 100%;
}

.resume-block-title.achievements {
  width: 349px;
}

.resume-block-content.resume-block-content.line-with-dots
  .resume-content-item::before {
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  background-color: var(--primary-dark-color);
  margin-left: -54px;
}

.resume-block-content.line-with-dots
  .resume-content-item:not(:first-child)::before {
  margin-top: 4px;
}
.resume-block-content.line-with-dots .resume-content-item:last-child::before {
  margin-top: 0;
  bottom: 0;
}

.resume-content-item {
  font-size: clamp(18px, 2.5vw, var(--regular-font-size));
  line-height: 100%;
  font-weight: 300;
  margin-top: 40px;
}

.resume-content-item h6,
.resume-content-item strong {
  font-size: clamp(18px, 2.5vw, var(--regular-font-size));
  font-weight: 500;
}

@media (max-width: 900px) {
  .resume-content {
    flex-direction: column;
  }

  .resume-content-left,
  .resume-content-right {
    flex-basis: 100%;
  }

  .resume-icon-wrapper svg {
    width: 30px;
    height: 30px;
  }
  .resume-block-content {
    padding-left: 38px;
    margin-left: 25px;
  }

  .resume-block-content.resume-block-content.line-with-dots
    .resume-content-item::before {
    margin-left: -47px;
  }
}

@media (max-width: 600px) {
  .resume-block-title {
    width: 250px !important;
  }

  .resume-icon-wrapper {
    padding: 7px;
    margin-right: 10px;
  }

  .resume-icon-wrapper svg {
    width: 25px;
    height: 25px;
  }

  .resume-block-content {
    padding-left: 30px;
    margin-left: 20px;
  }

  .resume-block-content.resume-block-content.line-with-dots
    .resume-content-item::before {
    margin-left: -36px;
    width: 12px;
    height: 12px;
  }
}
</style>
