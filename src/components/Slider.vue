<template>
  <div class="slider-container relative">
    <input class="slider w-full" type="range" v-model="sliderValue" min="0" max="1000" step="1">
    <div class="absolute slider-bg"></div>
    <div class="absolute slider-fill"></div>
    <div class="absolute slider-thumb" v-on:drag="changeValue"></div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  data(){
    return{
      sliderValue: 815,
      maxValue: 815,
      minValue: 815,
    }
  },
  methods: {
    changeValue: function (){

    }
  }
}
</script>

<style scoped>
.slider-container{
  @apply relative w-full my-4 flex flex-col justify-center;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  overflow: hidden;
  @apply bg-blue-grayish rounded-full w-full h-[30px] ;
}

.slider-bg {
  @apply bg-blue-grayish;
}

.slider-fill {
  @apply from-amber-50 to-amber-500;
}

.slider-thumb {
  @apply bg-white h-[10px] w-[10px] rounded-full;
}

</style>