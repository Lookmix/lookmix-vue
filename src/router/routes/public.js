import NewUser from '@/views/NewUser.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/new-user',
    name: 'newUser',
    component: NewUser
  }
]
export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOutRoute: true
  }
  return { ...route, meta }
})