import { useUserStore } from "@/store/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUserStore()
  if(process.client) {
    const token = localStorage.getItem('token')
    console.log(to)
    const authPaths = ['member-information', 'member-subscribe', 'member']
    if (token) {
      await user.getUserData()
    }

    if (!user.isLogin && authPaths.includes(to.name)) {
      return navigateTo('/')
    }
  }
});