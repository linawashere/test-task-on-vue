<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { reactive } from 'vue'
import 'swiper/scss'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ref } from 'vue'

interface Props {
  slides: { image: string; alt: string }[];
}

const props = defineProps<Props>();
const modules = [Navigation, Pagination, Autoplay];
</script>

<template>
  <div class="slider">
    <Swiper :modules="modules" :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }" :pagination="{
      clickable: true,
      el: '.swiper-pagination',
      type: 'bullets'
    }" :loop="true" :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }">
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="slider__image" />
      </SwiperSlide>

      <div class="controls-container">
        <div class="swiper-pagination"></div>

        <div class="navigation-buttons">
          <button class="custom-prev">❮</button>
          <button class="custom-next">❯</button>
        </div>
      </div>
    </Swiper>
  </div>
</template>

<style lang="scss">
@import 'swiper/swiper-bundle.css';
@import '@/assets/styles/slider.scss';
</style>