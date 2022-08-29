<template>
  <div class="component-container">
    <section class="bg-dark-blue-100 rounded-tr-[110px] rounded-xl p-4 mb-5 sm:mb-0 sm:mr-5 sm:pr-20">
      <div class="flex flex-col px-6">
        <div class="py-6 mt-5 mb-2">
          <img src="../assets/logo.svg" alt="icon-logo">
        </div>
        <div class="flex flex-row py-2 flex-auto h-full mb-5 mb-0">
          <div class="icon-item shrink-0">
            <div class="icon-block">
              <img class="icon-item-img" src="../assets/icon-document.svg" alt="icon-document">
            </div>
          </div>
          <div class="icon-item">
            <div class="icon-block">
              <img class="icon-item-img" src="../assets/icon-folder.svg" alt="icon-folder">
            </div>
          </div>
          <div class="icon-item">
            <div class="icon-block">
              <img class="icon-item-img" src="../assets/icon-upload.svg" alt="icon-upload">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="info-container">
      <div class="px-6 py-5 h-fit w-full">
        <div class="relative">
          <div class="left-space-block-desktop relative">
            <p class="text-dark-blue-200 font-bold text-5xl">185<sup class="text-lg mx-2 text-blue-grayish uppercase">GB left</sup></p>
            <svg class="absolute -bottom-6 right-0" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53 53L0.5 0.5H53V53Z" fill="#FFFFFF"/>
            </svg>
          </div>
        </div>
        <div class="text-center sm:text-start mb-4">
          <p>You've used <span class="font-bold">815 GB</span> of your storage</p>
        </div>
        <div class="my-1">
          <SliderComponent/>
        </div>
        <div class="flex flex-row justify-between text-sm">
          <p class="font-bold">0 GB</p>
          <p class="font-bold">1000 GB</p>
        </div>
        <div class="relative px-4 h-[24px] sm:h-0">
          <div class="left-space-block">
            <p class="text-dark-blue-200 font-bold text-5xl">185<sup class="text-lg mx-2 text-blue-grayish uppercase">GB left</sup></p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="bg-image">
  </div>
</template>

<script>
import SliderComponent from "@/components/Slider";
export default {
  name: "StorageComponent",
  components: {SliderComponent}
}
</script>

<style scoped>
.icon-item{
  @apply inline-flex flex-col items-center justify-center
  bg-dark-blue-200 rounded-lg mr-3 last:mr-0 ;
  transition: background-color 80ms ease-in-out;
}
.icon-item:hover{
  @apply opacity-70 cursor-pointer;
}
.icon-item:active{
  @apply opacity-50;
}
.icon-block{
  @apply container block relative overflow-hidden w-[52px] h-[52px];
}
.icon-item-img{
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full;
}
.left-space-block{
  @apply absolute p-4 px-6 bg-white rounded-xl w-fit
  left-1/2 -translate-x-1/2 top-4;
}
.left-space-block-desktop{
  @apply hidden sm:block;
}
@media screen(sm) {
  .left-space-block-desktop{
    @apply absolute p-4 px-6 bg-white rounded-xl w-fit
    bottom-5 right-0;
  }
  .left-space-block{
    @apply hidden;
  }
}
.component-container{
  @apply inline-flex flex-col sm:flex-row mx-8 sm:items-end sm:w-[90%] sm:max-w-[860px];
}
.info-container{
  @apply  bg-dark-blue-100 rounded-xl p-4 flex sm:flex-row flex-col h-[172px] sm:w-full;
}
.bg-image{
  @apply fixed bottom-0 left-0 right-0 -z-10 bg-cover h-[50%]
  bg-gradient-to-r
  sm:bg-[url('/src/assets/bg-desktop.png')];
}
</style>