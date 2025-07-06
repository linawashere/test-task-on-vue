<script lang="ts" setup>

interface Props {
    type:
    | 'primary-black'
    | 'primary-light'
    | 'secondary-black'
    | 'secondary-light'
    | 'phone-btn'
    | 'burger-btn',
    size?: 'sm' | 'lg',
    disabled?: boolean
}

const props = defineProps<Props>();
const {
    type = 'primary-black',
    disabled = false
} = props;

const buttonClasses = {
    [type]: true,
    'is-disabled': disabled
};
</script>

<template>
    <button :class="buttonClasses" class="button" :disabled="disabled">
        <slot></slot>
        <slot name="rightIcon"></slot>
    </button>
</template>

<style>
@import '@/assets/styles/button.scss';
</style>