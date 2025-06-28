<script lang="ts" setup>
// import { gsap } from 'gsap';
// import { ref, onMounted } from 'vue';

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
    size = 'lg',
    disabled = false
} = props;

const buttonClasses = {
    [type]: true,
    [`size-${size}`]: true,
    'is-disabled': disabled
};

// const buttonRef = ref(null);

// const handleMouseEnter = () => {
//     gsap.to(buttonRef.value, {
//         duration: 0.3,
//         ease: 'powerInOut',
//         mass: 1,
//         backgroundColor: '#CCB076',
//         stiffnes: 711,
//         damping: 40,
//     });
// };

// const handleMouseLeave = () => {
//     gsap.to(buttonRef.value, {
//         duration: 0.3,
//         ease: 'powerInOut',
//         backgroundColor: '#0A0A0A',
//     });
// };
// onMounted(() => {
//   if (buttonRef.value) {
//     buttonRef.value.addEventListener('mouseenter', handleMouseEnter);
//     buttonRef.value.addEventListener('mouseleave', handleMouseLeave);
//   }
// });
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