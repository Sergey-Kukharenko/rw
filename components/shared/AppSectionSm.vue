<template>
  <div class="layout">
    <section :class="classNames">
      <div class="header">
        <h2 class="title">{{ props.section.title }}</h2>
        <p class="subtitle" v-if="props.section.subTitle">{{ props.section.subTitle }}</p>
      </div>

      <app-section-grid-sm
        v-slot="slotProps"
        :slides="props.section.list"
        :theme="props.theme"
      >
        <app-card-sm :slide="{ ...slotProps }"/>
      </app-section-grid-sm>
    </section>
  </div>
</template>

<script setup>
import AppSectionGridSm from '@/components/shared/AppSectionGridSm.vue';
import AppCardSm from '@/components/shared/AppCardSm.vue';
import {useClassNameProp} from '../../composables/useClassNameProp';

const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },

  theme: {
    type: String,
    default: ''
  }
});

const classNames = computed(() => useClassNameProp(props.theme, 'section'));
</script>

<style lang="scss" scoped>
.header {
  @include gt-sm {
    margin-bottom: 24px;
  }

  @include lt-md {
    margin-bottom: 16px;
  }
}

.title {
  font-family: $Literata;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin: 0;

  @include gt-sm {
    font-size: 28px;
    line-height: 32px;
  }

  @include lt-md {
    font-size: 20px;
    line-height: 24px;
  }
}

.subtitle {
  font-family: $golos-regular;

  @include gt-sm {
    font-size: 12px;
    line-height: 16px;
    margin: 8px 0 0;
  }

  @include lt-md {
    font-size: 12px;
    line-height: 16px;
    margin: 8px 0 0;
  }
}

.section {
  &--custom {
    .header {
      @include lt-md {
        background: #f7f7f7;
        border-radius: 12px;
        margin-bottom: 12px;
        padding: 14px 6px 14px;
        text-align: center;
      }
    }

    .title{
      @include lt-md {
        letter-spacing: -0.01em;
      }
    }

    .subtitle {
      @include lt-md {
        margin: 4px 0 0;
      }
    }
  }
}
</style>
