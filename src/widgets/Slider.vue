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
    <Swiper
      :modules="modules"
      :navigation="true"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="slider__image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
@import 'swiper/swiper-bundle.css';
@import '@/assets/styles/slider.scss';
</style>