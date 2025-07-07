<script setup lang="ts">
import Typography from '@/shared/text/index.vue'
import Header from '@/widgets/Header.vue'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/btn-icon/index.vue'
import Slider from '@/widgets/Slider.vue'
import Form from '@/widgets/Form.vue'
import CertificatesSection from '@/widgets/CertificatesSection.vue'
import { reactive } from 'vue'
</script>

<template>
  <div>
    <Header />
    <div class="slider-banner-container">
      <Slider :slides="[
        { image: 'slide1.jpg', alt: 'Slide 1' },
        { image: 'slide2.jpg', alt: 'Slide 2' },
        { image: 'slide3.jpg', alt: 'Slide 3' },
      ]" />

      <div class="main-banner">
        <div class="main-banner__info">
          <div class="main-banner__info-text">
            <Typography tagName="h1" class="main-banner__title">Любимый семейный кроссовер уже в продаже!</Typography>
            <Typography tagName="p" class=" main-banner__description text-body-regular-l">Первый взнос составит 12% от
              стоимости машины, без изменения за использование кредита.
            </Typography>
          </div>
          <div class="main-banner__info-btn">
            <Button type="secondary-light">
              <template v-slot:rightIcon>
                <Icon type="rightIcon" />
              </template>
              Подробнее
            </Button>
            <Button type="primary-light">
              <template v-slot:rightIcon>
                <Icon type="rightIcon" />
              </template>
              Тест-драйв
            </Button>
          </div>
        </div>
        <div class="main-banner__form">
          <Typography tagName="p" class="text-title-m">Получить индивидуальное предложение на покупку в кредит от 4.9%
          </Typography>
          <div>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
    <div class="empty"></div>
    <CertificatesSection></CertificatesSection>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.empty {
    height: 92.8rem;

    @include desktop {
        height: 68.5rem;
    }

    @include tablet {
      height: 58.6rem;
      margin-top: 27.5rem;
    }

    @include mobile {
      height: 111rem;
    }
}
</style>