<script lang="ts" setup>
import Container from '@/shared/container/index.vue'
import Logo from '@/shared/logo/index.vue'
import Typography from '@/shared/text/index.vue'
import NavMenu from '@/widgets/NavMenu.vue'
import { reactive } from 'vue'

const navItems = reactive([
    { text: 'Модельный ряд', icon: 'fi-rr-angle-small-down' },
    { text: 'Покупка', icon: 'fi-rr-angle-small-down' },
    { text: 'Сервис', icon: 'fi-rr-angle-small-down' },
    { text: 'О нас', icon: 'fi-rr-angle-small-down' },
    { text: 'Еще', icon: 'fi-rr-angle-small-down' },
])
</script>
<template>
    <header class="header">
        <Container class="header__container">
            <div class="header__logo-description">
                <div class="header__company-logo">
                    <Typography tagName="p" class="text-company-logo">
                        Scamacca
                    </Typography>
                    <Logo />
                </div>

                <Typography tagName="p" class="text-logo-description">
                    Официальный дилер Scamacca в Москве
                </Typography>
            </div>

                <NavMenu :data="navItems" />

        </Container>
    </header>
</template>

<style scoped>
@import '@/assets/styles/header.scss';
</style>