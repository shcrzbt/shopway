<script lang="ts" setup>
import { NButton, NIcon } from "naive-ui"
import { useRouter } from "vue-router"
import { useAuthStore } from "#app/stores"
import { LogoutIcon } from "#icons/svg"
import { RouteNameEnum } from "#shared/utils/enums"
import { messageSuccess } from "#shared/utils/functions"
import { logOutRequest } from "#services/auth"

const router = useRouter()
const authStore = useAuthStore()

const onSignOut = async () => {
  try {
    const response = await logOutRequest()

    if (!response.message) {
      return
    }

    authStore.logout()
    messageSuccess(response.message)

    router.push({ path: RouteNameEnum.authLogin })
  } catch (error: any) {
    console.error(error)
  }
}
</script>

<template>
  <n-button text @click="onSignOut">
    <template #icon>
      <n-icon size="20">
        <LogoutIcon />
      </n-icon>
    </template>
  </n-button>
</template>

<style lang="scss" scoped></style>
