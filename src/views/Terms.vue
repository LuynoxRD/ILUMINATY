<template>
  <LegalLayout :page="termsPage" />
</template>

<script setup lang="ts">
import { useContent } from '@/composables/useContent'
import LegalLayout from '@/components/LegalLayout.vue'

const { termsPage } = useContent()
</script>
