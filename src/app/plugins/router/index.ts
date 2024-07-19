import { createRouter, createWebHistory } from "vue-router"
import { authRoutes, categoryRoutes, colorRoutes, commonRoutes, productRoutes, shopRoutes, sizeRoutes } from "./routes"
import { authMiddleware, loadLayoutMiddleware, pageTitleMiddleware, permissionMiddleware } from "./middlewares"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, ...commonRoutes, ...productRoutes, ...shopRoutes, ...categoryRoutes, ...sizeRoutes, ...colorRoutes],
  scrollBehavior: () => ({ top: 0, left: 0 })
})

router.beforeEach(authMiddleware)

router.beforeEach(permissionMiddleware)

router.beforeEach(loadLayoutMiddleware)

router.beforeEach(pageTitleMiddleware)

export default router
