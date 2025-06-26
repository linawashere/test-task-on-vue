<script lang="ts" setup>
import Container from '@/shared/container/index.vue'
import Logo from '@/shared/logo/index.vue'
import Typography from '@/shared/text/index.vue'
</script>
<template>
    <header class="header">
        <Container class="header__cotainer">
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

        </Container>
    </header>
</template>

<style scoped>
@import '@/assets/styles/header.scss';
</style>