import { i18n } from "@/app/plugins"
import { clearPhoneSymbols } from "../functions"
import { FormItemRule } from "naive-ui"

export const rulePhoneCheck = (rule: FormItemRule | any, value: string) => {
  const editedVal = value ? clearPhoneSymbols(value) : ""

  if (!editedVal.length) {
    return Error(i18n.global.t("validation.required"))
  }

  if (editedVal.length < rule.min) {
    return new Error(i18n.global.t("validation.checkPhone"))
  }
  return true
}

export const ruleMinLength = (rule: FormItemRule, value: string) => {
  const editedVal = value.replace(/ /g, "")

  if (rule.min && editedVal.length < rule.min) {
    return Error(i18n.global.t("validation.minLength", { length: rule.min }))
  }

  return true
}
