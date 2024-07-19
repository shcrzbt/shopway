import { watch, ref } from "vue"

interface ITime {
  min: number
  sec: number
  interval: ReturnType<typeof setInterval> | null
}

export const useCountUpTimer = () => {
  const time = ref<ITime>({
    min: 0,
    sec: 0,
    interval: null
  })

  const LAST_SECOND = 59
  const TIMEOUT = 1000

  watch(
    () => time.value.sec,
    val => {
      if (val > LAST_SECOND) {
        time.value.min++
        time.value.sec = 0
      }
    }
  )

  const onStartCounting = () => {
    time.value.interval = setInterval(() => {
      time.value.sec++
    }, TIMEOUT)
  }

  const onStopCounting = () => {
    time.value.sec = 0
    time.value.min = 0
    clearInterval(time.value.interval!)
  }

  return { time, onStartCounting, onStopCounting }
}
