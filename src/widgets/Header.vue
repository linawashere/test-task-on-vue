<script lang="ts" setup>
import Container from '@/shared/container/index.vue'
import Logo from '@/shared/logo/index.vue'
import Typography from '@/shared/text/index.vue'
import NavMenu from '@/widgets/NavMenu.vue'
import Stats from '@/widgets/Stats.vue'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/btn-icon/index.vue'
import { reactive } from 'vue'

const navItems = reactive([
    { text: 'Модельный ряд', icon: 'fi-rr-angle-small-down' },
    { text: 'Покупка', icon: 'fi-rr-angle-small-down' },
    { text: 'Сервис', icon: 'fi-rr-angle-small-down' },
    { text: 'О нас', icon: 'fi-rr-angle-small-down' },
    { text: 'Еще', icon: 'fi-rr-angle-small-down' },
]);

const infoItems = reactive([
    { icon: 'fi-rr-heart', count: 22 },
    { icon: 'fi-rr-stats', count: 22 },
]);

</script>
<template>
    <header class="header">
        <Container class="header__container">
            <div class="header__logo-description">
                <div class="header__company-logo">
                    <Button type="burger-btn">
                        <template v-slot:rightIcon>
                            <Icon type="fi-rr-menu-burger" />
                        </template>
                    </Button>
                    <Typography tagName="p" class="text-company-logo header__logo-description__company-name">
                        Scamacca
                    </Typography>
                    <Logo />
                </div>

                <Typography tagName="p" class="text-logo-description header__logo-description__dealer-info">
                    Официальный дилер Scamacca в Москве
                </Typography>
            </div>

            <NavMenu :data="navItems" />
            <div class="header__info">
                <div class="header__info-contacts">
                    <Typography tagName="p" class="text-body-regular-m header__info-contacts__address">г. Москва, ул.
                        Космонавтиков,
                        д. 6</Typography>
                    <Typography tagName="p" class="text-body-medium-m header__info-contacts__tel">+7 (495) 434-03-26
                    </Typography>
                </div>
                <div class="header__info-stats">
                    <Stats :data="infoItems" />
                </div>
                <Button type="phone-btn">
                    <template v-slot:rightIcon>
                        <Icon type="fi-rr-call-outgoing" />
                    </template>
                </Button>
            </div>
        </Container>
    </header>
</template>

<style scoped>
@import '@/assets/styles/header.scss';
</style>