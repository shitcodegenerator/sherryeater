export const useUserStore = defineStore('user', {
  id: 'user',
  state: () => ({ isLogin: false, data: {}, showLoginFeature: false }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    async getUserData() {
     try {
       const router = useRouter()
        const token = localStorage.getItem('token')
        const res = await $fetch(`http://localhost:3006/api/auth/profile`, {
          method: 'get',
          headers: {
            authorization: token
          }
        })
        console.log(res)
        this.isLogin = true
        this.data = res.data
     } catch (err) {
      useNuxtApp().$toast.error(err.data.message)
          localStorage.removeItem('token')
          this.isLogin = false
          setTimeout(() => {
            router.push('/')
          }, 1200)
     }
    },
    loading() {
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      return loading
    }
  }
})
