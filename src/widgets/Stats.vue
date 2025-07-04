<script lang="ts" setup>
import Icon from '@/shared/btn-icon/index.vue'

interface Props {
    data: {
        icon: 
        | "fi-rr-heart"
        | "fi-rr-stats";
        count: number;
    }[];
}

const { data } = defineProps<Props>();
</script>

<template>
    <div class="header__stats-item" v-for="item in data" :key="item.icon">
        <Icon :type="item.icon" />
        <span>{{ item.count }}</span>
    </div>

</template>

<style scoped>
@import '@/assets/styles/header.scss';
</style>