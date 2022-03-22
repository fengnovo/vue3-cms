import service from '@/common/ request'

export const login = (data) => {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}

export const menuList = () => {
  return service({
    url: '/menus'
  })
}
