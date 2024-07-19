import { BREAKPOINTS } from "#shared/utils/constants"
import { useBreakpoints } from "@vueuse/core"

export const useDeviceReactive = () => {
  const breakpoints = useBreakpoints(BREAKPOINTS)

  const isMobile = breakpoints.smaller("s")
  const isTablet = breakpoints.between("s", "l")
  const isDesktop = breakpoints.greater("l")

  return { isMobile, isTablet, isDesktop }
}
