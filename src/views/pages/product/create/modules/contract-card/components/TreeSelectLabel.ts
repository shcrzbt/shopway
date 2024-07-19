import { TreeSelectOption } from "naive-ui"
import { h } from "vue"

const TreeSelectLabel = (info: { option: TreeSelectOption; checked: boolean; selected: boolean }) =>
  h("p", { style: { padding: "0.5rem 0 0.5rem 0", "font-size": "1.4rem" } }, info.option.title as string)

export default TreeSelectLabel
