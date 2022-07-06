<template>
  <div class="layout layout--horizontal-dt">
    <div class="footer-container container">
      <div class="logo"></div>

      <div class="group">
        <div
          class="group__item"
          v-for="section in footer.sections"
          :key="section"
        >
          <app-footer-section :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dataFooter from '@/data/footer'
import AppFooterSection from '@/components/footer/AppFooterSection.vue'

const footer = ref(dataFooter)
</script>

<style scoped lang="scss">
.footer-container {
  @include gt-sm {
    display: flex;
    justify-content: space-between;
  }

  @include sm {
  }
}

.logo {
  width: 252px;
  height: 260px;
  background: #000;

  @include sm {
    margin: 0 auto;
  }
}

.group {
  display: flex;
  justify-content: space-between;

  @include gt-sm {
    flex-basis: 482px;
  }

  @include sm {
    max-width: 482px;
    margin: 0 auto;
  }
}
</style>
