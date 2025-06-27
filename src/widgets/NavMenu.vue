<script lang="ts" setup>
import Typography from '@/shared/text/index.vue'
import Icon from '@/shared/btn-icon/index.vue'

interface Props {
    data: {
        text: string;
        icon: string;
    }[]
}

const { data } = defineProps<Props>();
</script>

<template>
    <nav class="header__nav">
        <ul class="header__nav-list">
            <li class="header__nav-item" v-for="item in data" :key="item.text">
                <Typography tagName="p" class="text-body-regular-m">{{ item.text }}</Typography>
                <Icon :type="item.icon" />
            </li>
        </ul>
    </nav>
</template>

<style scoped>
@import '@/assets/styles/nav-menu.scss';
</style>