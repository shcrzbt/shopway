import { MenuProps } from "naive-ui"
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { BookMarkIcon, ReportsIcon, UserCheckIcon, UsersIcon } from "#shared/components/icons"

import { useDeviceReactive } from "@/shared/composables"

export const useMain = () => {
  const route = useRoute()
  const router = useRouter()
  const { isMobile } = useDeviceReactive()
  const siderCollapsed = ref<boolean>(isMobile.value)

  const menuOptions = ref<MenuProps["items"]>([
    {
      label: "Товары",
      key: "product.list",
      icon: ReportsIcon
    },
    {
      label: "Магазины",
      key: "shop.list",
      icon: BookMarkIcon
    },
    {
      label: "Настройки",
      icon: UsersIcon,
      children: [
        {
          label: "Категории",
          key: "category.list"
          // icon: UsersIcon
        },
        {
          label: "Размеры",
          key: "size.list"
          // icon: UsersIcon
        },
        {
          label: "Цвета",
          key: "color.list"
          // icon: UsersIcon
        }
      ]
    },
    {
      label: "Пользователи",
      key: "user.list",
      icon: UsersIcon
    }
  ])

  const collapsedWidth = computed(() => (isMobile.value ? 0 : 64))
  const currentRouteName = computed(() => String(route.name || ""))

  const menuUpdated = (key: string) => {
    if (route.name === key) {
      return
    }

    router.push({ name: key })

    if (isMobile.value) {
      return
    }
  }

  const expandedKeys = (): string[] => {
    if (route.name) {
      const routeKeys = String(route.name).split(".")
      if (routeKeys.length) {
        return [routeKeys[0]]
      }

      return []
    }

    return []
  }

  return {
    menuUpdated,
    expandedKeys,
    menuOptions,
    collapsedWidth,
    siderCollapsed,
    currentRouteName
  }
}
