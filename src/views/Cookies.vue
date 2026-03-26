<template>
  <LegalLayout :page="cookiesPage" />
</template>

<script setup lang="ts">
import { useContent } from '@/composables/useContent'
import LegalLayout from '@/components/LegalLayout.vue'

const { cookiesPage } = useContent()
</script>
