<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import '@formkit/themes/genesis'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/btn-icon/index.vue'
import Typography from '@/shared/text/index.vue'

interface FormData {
    name: string;
    phone: string;
    acceptTerms: boolean;
}

const handleSubmit = (formData: FormData) => {
    if (!formData.acceptTerms) {
        return;
    }
};
</script>

<template>
    <FormKit type="form" :actions="false" @submit="handleSubmit">
        <div class="form__top">
            <FormKit type="text" name="name" label="Имя" validation="required" placeholder="Введите ваше имя" />

            <FormKit type="tel" name="phone" label="Телефон" validation="required|length:10"
                placeholder="+7 (___) ___-__-__" />
        </div>

        <FormKit type="checkbox" name="acceptTerms" label="Я принимаю условия" validation="required">
            <span class="text-body-regular-s"> передачи информации</span>
        </FormKit>

        <Button type="primary-black">
            <template v-slot:rightIcon>
                <Icon type="rightIcon" />
            </template>
            Оставить заявку
        </Button>
    </FormKit>
</template>
