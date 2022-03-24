<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    unique-opened
    router
    :collapse="$store.getters.menuCollapse"
  >
    <el-sub-menu
      :index="`${item.id}`"
      v-for="(item, index) in tree"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item-group v-for="child in item.children" :key="child.id">
        <el-menu-item :index="`/${child.path}`" @click="selectPath(child.path)">
          <template #title>
            <el-icon>
              <component :is="childIcon"></component>
            </el-icon>
            <span>{{ child.authName }}</span>
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api'
import { onMounted, ref } from 'vue'
// import { useStore } from 'vuex'
// import variables from '@/styles/variables.scss'

// const store = useStore()

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const childIcon = ref('menu')

const tree = ref([])
const defaultActive = ref(sessionStorage.getItem('x-path') || '/users')

onMounted(async () => {
  tree.value = await menuList()
  console.log(tree)
})

const selectPath = (path) => {
  sessionStorage.setItem('x-path', `/${path}`)
}
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item-group__title {
  display: none;
}
</style>
