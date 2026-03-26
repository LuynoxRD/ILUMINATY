<template>
  <LegalLayout :page="privacyPage" />
</template>

<script setup lang="ts">
import { useContent } from '@/composables/useContent'
import LegalLayout from '@/components/LegalLayout.vue'

const { privacyPage } = useContent()
</script>
