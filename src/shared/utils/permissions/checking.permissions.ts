import { useUserStore } from "#app/stores"

export const checkPermission = (permissionKey: string | string[]) => {
  const userStore = useUserStore()

  if (!Array.isArray(permissionKey)) {
    return userStore.canUser(String(permissionKey)).value
  }

  const userPermissions = permissionKey.filter(perm => userStore.canUser(String(perm)).value)

  return Boolean(userPermissions.length)
}
