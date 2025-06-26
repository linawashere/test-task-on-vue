<template>
    <div class="container"><slot></slot></div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/breakpoints.scss';

.container {
    max-width: 1720px;
    margin: 0 auto;

    @include desktop-only {
        max-width: 1280px;
    }

    @include tablet-only {
        max-width: 688px;
    }

    @include mobile-only {
        max-width: 290px;
    }
}
</style>
