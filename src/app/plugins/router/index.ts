import { createRouter, createWebHistory } from "vue-router"
import { authRoutes, commonRoutes, productRoutes, shopRoutes } from "./routes"
import { authMiddleware, loadLayoutMiddleware, pageTitleMiddleware, permissionMiddleware } from "./middlewares"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, ...commonRoutes, ...productRoutes, ...shopRoutes],
  scrollBehavior: () => ({ top: 0, left: 0 })
})

router.beforeEach(authMiddleware)

router.beforeEach(permissionMiddleware)

router.beforeEach(loadLayoutMiddleware)

router.beforeEach(pageTitleMiddleware)

export default router
