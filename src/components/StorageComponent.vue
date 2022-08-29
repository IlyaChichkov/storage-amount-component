<template>
  <div class="component-container">
    <section class="bg-dark-blue-100 rounded-tr-[110px] rounded-xl p-4 mb-5">
      <div class="flex flex-col px-6">
        <div class="py-6 mt-5 mb-2">
          <img src="../assets/logo.svg">
        </div>
        <div class="flex flex-row py-2 flex-auto h-full mb-5">
          <div class="icon-item shrink-0">
            <div class="icon-block">
              <img class="icon-item-img" src="../assets/icon-document.svg">
            </div>
          </div>
          <div class="icon-item">
            <div class="icon-block">
              <img class="icon-item-img" src="../assets/icon-folder.svg">
            </div>
          </div>
          <div class="icon-item">
            <div class="icon-block">
              <img class="icon-item-img" src="../assets/icon-upload.svg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-dark-blue-100 rounded-xl p-4">
      <div class="px-6 py-5">
        <div class="text-center mb-4">
          <p>You've used <span class="font-bold">815 GB</span> of your storage</p>
        </div>
        <div class="my-1"><SliderComponent/></div>
        <div class="flex flex-row justify-between text-sm">
          <p class="font-bold">0 GB</p>
          <p class="font-bold">1000 GB</p>
        </div>
        <div class="relative px-4 h-[24px]">
          <div class="left-space-block">
            <p class="text-dark-blue-200 font-bold text-5xl">185<sup class="text-lg mx-2 text-blue-grayish uppercase">GB left</sup></p>
          </div>
        </div>
      </div>
    </section>
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
.component-container{
  @apply flex flex-col mx-8;
}
</style>