<template>
  <el-container class="app-wrapper">
    <el-aside :width="width" class="sidebar-container">
      <Menu />
    </el-aside>
    <el-container class="container" :style="{ width: containerWidth }">
      <el-header><Nav /></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Menu from './menu'
import Nav from './nav'

const store = useStore()

const width = computed(() => {
  return store.getters.menuCollapse ? '67px' : '200px'
})

const containerWidth = computed(() => {
  return store.getters.menuCollapse ? 'calc(100% - 67px)' : 'calc(100% - 200px)'
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  // width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
