import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import '@/router/permission'
import * as ELIcons from '@element-plus/icons-vue'

const app = createApp(App)

for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}

SvgIcon(app)
app.use(store).use(router).mount('#app')
