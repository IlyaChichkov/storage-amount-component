<template>
  <div class="slider-container relative">
    <div class="absolute slider-bg"></div>
    <div class="absolute slider-fill"  v-bind:style="{right: getSliderWidth}"></div>
    <div class="absolute slider-thumb-container" v-bind:style="{right: getSliderWidth}" v-on:drag="changeValue">
      <div class="absolute slider-thumb" v-on:drag="changeValue"></div>
    </div>
    <input class="z-40 ml-2 mr-2 opacity-0" type="range" v-model="sliderValue" :max="maxValue" :min="minValue" disabled>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  data(){
    return{
      sliderValue: 725,
      maxValue: 1000,
      minValue: 0,
    }
  },
  methods: {
    changeValue: function (){

    }
  },
  computed: {
    getSliderWidth: function () {
      return ((this.maxValue - this.sliderValue) /  50.4 + 0.35) + 'rem';
    }
  }
}
</script>

<style scoped>
.slider-container{
  @apply relative w-full h-[24px] my-4 flex flex-col justify-center;
}

.slider-bg {
  @apply bg-dark-blue-200 w-full h-full rounded-full ;
}

.slider-fill {
  @apply bg-gradient-to-r from-gd-main to-gd-sec rounded-full
  top-1 bottom-1 left-1 right-1;
}

.slider-thumb-container{
  @apply top-1 bottom-1;
}

.slider-thumb {
  @apply bg-white w-[11px] h-[11px] right-1 top-1/2 rounded-full ;
  transform: translateY(-50%);
}

</style>