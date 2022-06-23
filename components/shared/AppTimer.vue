<template>
  <div class="timer">
    <SvgSprite symbol="time" class="timer__icon" />

    <div class="timer__cells">
      <div class="timer__cell">Left</div>
      <span class="timer__cell">{{ timer.hours }}h</span>
      <span class="timer__cell">{{ timer.minutes }}m</span>
    </div>
  </div>
</template>

<script setup>
import { useTimer } from 'vue-timer-hook';
import { SvgSprite } from 'vue-svg-sprite';

const time = new Date();
time.setHours(time.getHours() + 3);
const timer = useTimer(time);

watchEffect(async () => {
  if (timer.isExpired.value) {
    console.warn('IsExpired');
  }
});
</script>

<style scoped lang="scss">
.timer {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  font-family: $golos-bold;
  padding: 6px 10px;
  box-sizing: border-box;

  &__icon {
    width: 13.33px;
    height: 13.33px;
    fill: $color-dark-green;
  }

  &__text {
    font-family: $golos-bold;
    color: $color-dark-green;
    letter-spacing: -0.01em;
    font-size: 12px;
    line-height: 16px;
  }

  &__cells {
    display: flex;
    margin: 0 0 -1px 7px;
  }

  &__cell {
    font-family: $golos-bold;
    color: $color-dark-green;
    letter-spacing: -0.01em;
    font-size: 12px;
    line-height: 16px;
    margin-left: 4px;
  }
}
</style>
