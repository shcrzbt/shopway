import { messageError } from "@/shared/utils/functions"
import { FormInst, FormRules, SelectOption, TreeSelectOption } from "naive-ui"
import { onMounted, reactive, ref } from "vue"
import { useI18n } from "vue-i18n"
import { IProduct } from "../../../types"
import { ruleMinLength } from "@/shared/utils/validators"
import { IEmits, IProps } from "../types"
import { fetchCategoryById, fetchCategoryByParam, fetchProductUnits } from "../service/contract-create.service"
import { ICategory, ICategoryByParam } from "../service/contract-create.type"
import { useDebounceFn } from "@vueuse/core"

const PRODUCT_NAME_LIMIT = 3

interface ISearch {
  loading: boolean
  value: null | number
  options: ICategoryByParam[]
}

const useModule = (props: IProps, emits: IEmits) => {
  // global
  const { t } = useI18n()

  // states
  const productState = reactive<IProduct>({
    id: 0,
    amount: 1,
    price: null,
    name: "",
    category: null,
    label: "",
    imei: null,
    original_name: null,
    original_imei: null,
    unit_id: null,
    isMobileCategory: false,
    isTruthWorthy: false
  })
  const searchState = reactive<ISearch>({
    value: null,
    options: [],
    loading: false
  })

  // options
  const treeSelectCategoryOptions = ref<SelectOption | null>(null)
  const unitOptions = ref<SelectOption | null>(null)

  // form
  const formRef = ref<FormInst | null>(null)
  const formRules: FormRules = reactive({
    name: {
      min: PRODUCT_NAME_LIMIT,
      trigger: ["blur", "input"],
      validator: ruleMinLength
    },
    amount: {
      type: "number",
      required: true,
      trigger: ["blur", "input"]
    },
    categories: {
      required: true,
      trigger: ["blur", "input"]
    },
    unit_id: {
      required: true,
      trigger: ["blur", "change"],
      message: t("validation.required")
    },
    price: {
      required: true,
      pattern: /^\d*$/,
      trigger: ["blur", "input"]
    },
    imei: {
      min: 15,
      trigger: ["blur", "input"],
      validator: ruleMinLength
    },
    original_name: {
      min: PRODUCT_NAME_LIMIT,
      trigger: ["blur", "input"],
      validator: ruleMinLength
    }
  })

  const onSelectSearchedCategory = (value: number) => {
    productState.category = value
    searchState.value = value
  }

  const onFetchCategoryByName = useDebounceFn(async (value: number) => {
    searchState.value = value
    try {
      const response = await fetchCategoryByParam({ query: value })

      searchState.options = response.data as any
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line no-magic-numbers
  }, 500)

  const onFetchCategoryById = async (categoryId?: number, findChild: boolean = false): Promise<ICategory[] | undefined> => {
    try {
      const response = await fetchCategoryById(categoryId)

      if (!findChild) {
        treeSelectCategoryOptions.value = response.data
      }

      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const onFetchProductUnits = async () => {
    try {
      const response = await fetchProductUnits()
      unitOptions.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  const onLoadChildCategory = async (option: TreeSelectOption): Promise<TreeSelectOption | null> => {
    const data = await onFetchCategoryById(option.key as number, true)

    if (!data?.length) {
      option.isLeaf = true
      option.depth = 0
      return option
    }

    option.children = data

    return option
  }

  const onTryToAddProduct = () => {
    formRef.value?.validate(errors => {
      if (errors) {
        return messageError("Valid")
      }
      emits("handleAddProduct")
    })
  }

  onMounted(async () => {
    await onFetchProductUnits()
    await onFetchCategoryById()
  })

  return {
    formRef,
    formRules,
    searchState,
    unitOptions,
    productState,
    onTryToAddProduct,
    onLoadChildCategory,
    onFetchCategoryByName,
    treeSelectCategoryOptions,
    onSelectSearchedCategory
  }
}

export default useModule
