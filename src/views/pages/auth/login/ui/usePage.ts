import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { FormInst } from "naive-ui"
import { useAuthStore } from "#app/stores"
import { messageSuccess } from "#shared/utils/functions"
import { IForm } from "../types"
import { logInRequest } from "#services/auth"
import { ProductRouteNamesEnum } from "#app/plugins/router/routes/enums"

export default function () {
  // global
  const router = useRouter()
  const authStore = useAuthStore()

  // state
  const formRef = ref<FormInst | null>(null)
  const formModel = reactive<IForm>({
    phoneOrName: "",
    password: "",
    loading: false
  })

  const onSubmitForm = () => {
    formRef.value?.validate(errors => {
      if (errors) {
        return
      }
      onSignIn()
    })
  }

  // requests
  const onSignIn = async () => {
    try {
      formModel.loading = true
      const response = await logInRequest(formModel.phoneOrName, formModel.password)
      if (response.bearer_token) {
        authStore.login({
          access_token: response.bearer_token,
          scopes: [],
          expires_in: 123,
          user: response.user
        })

        router.push({ name: ProductRouteNamesEnum.list })
      }

      messageSuccess("Вы успешно авторизованы!")
    } catch (error: any) {
      console.error(error)
    } finally {
      formModel.loading = false
    }
  }

  return {
    formRef,
    formModel,
    onSubmitForm
  }
}
