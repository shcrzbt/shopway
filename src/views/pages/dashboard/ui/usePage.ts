import { ref } from "vue"

export default function usePage() {
  const releases = ref<{ title: string; createdAt: string; features: string[] }[]>([
    {
      title: "v1.0.0",
      createdAt: "24.06.2024",
      features: ["Создан проект"]
    }
  ])

  return { releases }
}
