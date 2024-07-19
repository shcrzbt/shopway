import { FormRules } from "naive-ui"

// validators
export const formRules: FormRules = {
  phoneOrName: {
    required: true,
    trigger: "blur"
  },
  phone: {
    required: true,
    trigger: "blur"
  },
  password: {
    required: true,
    trigger: "blur"
  }
}
