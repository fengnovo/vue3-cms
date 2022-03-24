<template>
  <el-dropdown>
    <el-avatar class="avatar" shape="square" :size="40" fit="fit" :src="url" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const url = ref(
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
)

const loginOut = () => store.commit('app/loginOut')
</script>

<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
