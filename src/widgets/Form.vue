<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import '@formkit/themes/genesis'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/btn-icon/index.vue'
import Typography from '@/shared/text/index.vue'
import { vMaska } from "maska/vue"
import { ref } from 'vue'

const isSubmitted = ref(false)
const formRef = ref()

const handleSubmit = async (formData: FormData) => {

    try {
        console.log('Form submitted:', formData);
        isSubmitted.value = true;
        formRef.value.reset();
    } catch (error) {
        console.error('Submission error:', error);
    }
};

interface FormData {
    name: string;
    phone: string;
    acceptTerms: boolean;
}

</script>

<template>
    <FormKit ref="formRef" type="form" :actions="false" @submit="handleSubmit"
        :form-class="isSubmitted ? 'form-submitted' : ''">
        <div class="form__top">
            <FormKit type="text" name="name" label="Имя" validation="required" placeholder="Введите ваше имя"
                :validation-messages="{
                    required: 'Поле обязательно для заполнения'
                }" />

            <FormKit type="tel" name="phone" label="Телефон" v-maska="'+7 (###) ###-##-##'"
                validation="required|matches:/^\+?7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/" placeholder="+7 (___) ___-__-__"
                :validation-messages="{
                    required: 'Укажите номер телефона',
                    matches: 'Введите телефон в формате +7 (XXX) XXX-XX-XX'
                }" />
        </div>
        <div class="form__bottom">
            <FormKit type="checkbox" name="acceptTerms" :validation-messages="{
                required: 'Поле обязательно для заполнения'
            }" validation="required" outer-class="terms-checkbox">
                <template #label>
                    <div>
                    Я принимаю
                    <a href="#" class="custom-link">условия передачи информации</a>
                </div>
                </template>
            </FormKit>

            <Button type="primary-black">
                <template v-slot:rightIcon>
                    <Icon type="rightIcon" />
                </template>
                Оставить заявку
            </Button>
        </div>

        <div v-if="isSubmitted" class="form-success-message">
            Ваша заявка успешно отправлена!
        </div>
    </FormKit>
</template>
