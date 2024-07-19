import { h } from "vue"
import { NIcon, SelectOption } from "naive-ui"

export const renderLabel = (option: SelectOption & { icon: () => JSX.Element }) =>
  h(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center"
      }
    },
    [
      h(
        NIcon,
        { style: { marginRight: "1rem" }, size: 16 },
        {
          default: () => h(option.icon)
        }
      ),
      h(
        "div",
        {},
        {
          default: () => [h("div", {}, { default: () => option.label })]
        }
      )
    ]
  )
