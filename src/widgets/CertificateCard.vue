<script lang="ts" setup>
import { defineProps } from 'vue'
import Typography from '@/shared/text/index.vue'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/btn-icon/index.vue'
import CertificateIcon from '@/shared/certificate-icon/index.vue'

interface Certificate {
    title: string;
}

const props = defineProps<{
    certificate: Certificate;
}>();
</script>

<template>
    <div v-if="certificate" class="certificate-card">
        <div class="certificate-card__content">
            <div class="certificate-card__text">
                <Typography tagName="p" class="text-title-m certificate-card__content-title">{{ certificate.title }}
                </Typography>
                <Button @click="openCertificate" type="secondary-black">
                    <template v-slot:rightIcon>
                        <Icon type="rightIcon" />
                    </template>
                    Открыть сертификат
                </Button>
            </div>
            <div class="certificate-card__icon">
                <CertificateIcon></CertificateIcon>
            </div>
        </div>
        <img class="certificate-card__img" src="/certificate.jpg" alt="Сертификат" />
    </div>
</template>