import { h, VNodeChild } from "vue"
import { MessageOptions, MessageRenderMessage, NAlert } from "naive-ui"
import { i18n } from "#app/plugins"
import { message } from "#app/providers"
import { CircleCheckIcon, CircleXIcon } from "#icons/svg"

type MessageContentType = string | (() => VNodeChild)

const renderMessage: MessageRenderMessage = props => {
  const { t } = i18n.global

  return h(
    NAlert,
    {
      class: "n-message-alert",
      type: props.type === "success" ? "success" : "error",
      closable: true,
      bordered: false,
      onClose: props.onClose,
      title: props.type === "success" ? t("success") : t("error")
    },
    {
      default: () => props.content,
      icon: () =>
        props.type === "success"
          ? CircleCheckIcon({ style: { color: "var(--text-white)" } })
          : CircleXIcon({ style: { color: "var(--text-white)" } })
    }
  )
}

export const messageError = (content: MessageContentType, options?: MessageOptions) =>
  message.error(content, options || { render: renderMessage })
export const messageSuccess = (content: MessageContentType, options?: MessageOptions) =>
  message.success(content, options || { render: renderMessage })
