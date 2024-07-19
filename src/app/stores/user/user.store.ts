import { defineStore } from "pinia"
import { computed, reactive } from "vue"
import { IUserStoreState } from "./user-store.types"

export const useUserStore = defineStore(
  "user",
  () => {
    const state = reactive<IUserStoreState>({
      user: null,
      scopes: []
    })

    const canUser = (permission: string) => computed(() => state.scopes.includes(permission))

    const setUser = ({ user, scopes }: { user: any; scopes: string[] }) => {
      state.user = user
      state.scopes = scopes
    }

    const destroyUser = () => {
      state.user = null
      state.scopes = []
    }

    return {
      state,
      canUser,
      setUser,
      destroyUser
    }
  },
  {
    persist: {
      storage: window.localStorage
    }
  }
)
