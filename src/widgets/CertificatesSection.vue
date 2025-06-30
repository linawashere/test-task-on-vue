<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import CertificateCard from './CertificateCard.vue'
import Container from '@/shared/container/index.vue'
import Typography from '@/shared/text/index.vue'
import NavigationButtons from '@/shared/nav-btn/index.vue'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/btn-icon/index.vue'

const certificates = [
    {
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
    {
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
    {
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
    {
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
    {
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
];
</script>
<template>
    <section class="certificates-section">
        <Container>
            <div class="certificates-section__title">
                <Typography tagName="h2">Сертификаты</Typography>
                <div class="certificates-section__title-btns">
                    <NavigationButtons></NavigationButtons>
                    <Button type="secondary-black">
                        <template v-slot:rightIcon>
                            <Icon type="rightIcon" />
                        </template>
                        Все услуги
                    </Button>
                </div>
            </div>

            <Swiper :modules="[EffectFade, Pagination, Navigation]" :slides-per-view="3" :space-between="20"
                :breakpoints="{
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    }
                }">
                <SwiperSlide v-for="(certificate, index) in certificates" :key="index">
                    <CertificateCard :certificate="certificate" />
                </SwiperSlide>
            </Swiper>
        </Container>
    </section>
</template>

<style>
@import '@/assets/styles/certificates.scss';
</style>