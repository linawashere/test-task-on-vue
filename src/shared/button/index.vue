<script lang="ts" setup>
interface Props {
    type:
    | 'primary-black'
    | 'primary-light'
    | 'secondary-black'
    | 'secondary-light',
    size?: 'sm' | 'lg',
    disabled?: boolean,
    rightIcon?: HTNlElement
}

const props = defineProps<Props>();
const {
    type = 'primary-black',
    size = 'lg',
    disabled = false
} = props;

const buttonClasses = {
    [type]: true,
    [`size-${size}`]: true,
    'is-disabled': disabled
};

</script>
<template>
    <button :class="buttonClasses" class="button" :disabled="disabled">
        <slot></slot>
        <slot name="rightIcon"></slot>
    </button>
</template>

<style scoped>
@import '@/assets/styles/button.scss';
</style>