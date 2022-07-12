<template>
  <div :class="classNames">
    <a
      v-for="item in props.list"
      :key="item.title"
      :href="item.href"
      target="_blank"
      class="navigation-list__item"
    >
      <div class="content">
        <div class="content__figure">
          <SvgSprite
            v-if="item.icon"
            :symbol="item.icon"
            v-bind:="item.style"
            :class="classes(item.icon)"
          />
        </div>
        <div class="content__text">
          {{ item.title }}
        </div>
        <div v-if="item.count" class="content__count">
          {{ item.count }}
        </div>
      </div>
    </a>

    <template v-if="loading">
      <teleport
        v-if="isMobile && isWhatsApp"
        to=".drawer__content"
      >
        <a class="card">
          <SvgSprite
            symbol="call-outline"
            class="card__icon card__icon--call"
          />
        </a>
      </teleport>
    </template>
  </div>
</template>

<script setup>
import { useMq } from 'vue3-mq'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const classNames = computed(() => useClassName(props.options, 'navigation-list'))
const classes = value => ([`content__icon ${value}`])
const mq = useMq()
const isMobile = computed(() => mq.current === 'xs')
const isWhatsApp = computed(() => (props.list.find(item => item.icon === 'whatsapp')))

const loading = ref(false)
onMounted(() => (loading.value = true))
</script>

<style lang="scss" scoped>
.navigation-list {
  @include gt-xs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -12px;
  }

  @include xs {
    margin: 0;
  }

  &--full {
    .navigation-list__item {
      &:first-child {
        position: relative;

        &:not(:hover) {
          color: #009959;
        }

        &:hover {
          color: lighten(#009959, 5%);
        }

        @include gt-xs {
          &:after {
            content: '';
            display: block;
            width: 1px;
            height: 20px;
            background: #e5e5e5;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }

      &:last-child {
        &:not(:hover) {
          color: #f1ae01;
        }

        &:hover {
          color: lighten(#f1ae01, 5%);
        }
      }
    }

    .content {
      &__figure {
        @include xs {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          margin-right: 7px;
        }
      }
    }
  }

  &--mixed {
    &:last-child {
      @include xs {
        display: none;
      }
    }
  }

  &__item {
    display: block;
    margin: 0;
    color: $color-dark-grey;

    @include gt-xs {
      font-size: 14px;
      line-height: 24px;
    }

    @include xs {
      font-size: 12px;
      line-height: 16px;
    }

    &:hover {
      color: lighten($color-dark-grey, 20%);
    }

    @include gt-xs {
      padding: 10px 12px;
    }

    @include xs {
      padding: 8px 6px;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @include xs {
    margin: 0;
  }

  &__icon {
    display: block;
    width: 16px;
    height: 16px;
    color: inherit;
    fill: currentColor;

    @include gt-xs {
      margin-right: 7px;
    }
  }

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white-grey;

    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 50%;
      margin: 0 4px;
    }
  }
}

.card {
  @include xs {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 1;
  }

  &__icon {
    &--call {
      @include xs {
        width: 20px;
        height: 20px;
        fill: $color-dark-grey;
        padding: 8px;
      }
    }
  }
}

.whatsapp {
  @include xs {
    display: none;
  }
}

.tile {
  @include gt-xs {
    width: 20px;
    height: 20px;
  }

  @include xs {
    width: 16px;
    height: 16px;
  }
}
</style>
