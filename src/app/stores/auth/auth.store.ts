import { computed, reactive } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { IAuthStoreState, ILoginPayload } from "./auth-store.types"
import { RouteNameEnum } from "#shared/utils/enums"
import { useUserStore } from "#app/stores"

export const useAuthStore = defineStore(
  "auth",
  () => {
    const router = useRouter()
    const userStore = useUserStore()

    const state = reactive<IAuthStoreState>({
      access_token: "1148|SxKPV0JT6G4CjM8mhtvAYxKzSYdqSWUCAkYoA90Ra4a1dc95",
      expires_in: 0
    })

    const isAuthorized = computed(() => state.access_token !== "")

    const login = (payload: ILoginPayload) => {
      state.access_token = payload.access_token
      state.expires_in = payload.expires_in

      userStore.setUser({
        user: payload.user,
        scopes: payload.scopes
      })
    }

    const logout = () => {
      state.access_token = ""
      state.expires_in = 0

      userStore.destroyUser()

      router.push({ name: RouteNameEnum.authLogin })
    }

    return {
      login,
      logout,
      state,
      isAuthorized
    }
  },
  {
    persist: {
      storage: window.localStorage
    }
  }
)
