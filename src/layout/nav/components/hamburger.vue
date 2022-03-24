<template>
  <svg-icon class="hamburger" :icon="icon" @click="toggle"></svg-icon>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const icon = computed(() => {
  return store.getters.menuCollapse ? 'hamburger-closed' : 'hamburger-opened'
})
const toggle = () => {
  store.commit('app/toggleMenuCollapse')
}
</script>

<style lang="scss" scoped>
.hamburger {
  margin-right: 30px;
  cursor: pointer;
}
</style>
