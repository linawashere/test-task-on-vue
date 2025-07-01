<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
    tagName: 'p' | 'h1' | 'h2' | 'span';
}

const props = defineProps<Props>();

</script>

<template>
    <component :is="props.tagName" :class="[props.variant && `text-${props.variant}`]"><slot></slot></component>
</template>