<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in urlList" :key="index">
      <span v-if="index === urlList.length - 1">{{ item.name }}</span>
      <span v-else class="direct" @click="handleDirect(item.path)">{{
        item.name
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const urlList = ref(route.matched)

const handleDirect = (path) => router.replace(path)

watch(
  () => {
    // console.log('route--', JSON.stringify(route, null, 2))
    urlList.value = route.matched
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="scss">
.direct {
  cursor: pointer;
  font-weight: bold;
}
</style>
