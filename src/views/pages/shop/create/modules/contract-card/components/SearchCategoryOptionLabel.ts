import { SelectOption } from "naive-ui"
import { h, VNodeChild } from "vue"

const SearchCategoryOptionLabel = (option: SelectOption): VNodeChild =>
  h("div", { style: { padding: "0.5rem 0 0.5rem 0" } }, [
    h(
      "p",
      {
        style: {
          fontWeight: 600
        }
      },
      option.title as string
    ),
    h(
      "p",
      {
        style: {
          fontSize: "12px"
        }
      },
      option.hierarchy_title as string
    )
  ])

export default SearchCategoryOptionLabel
