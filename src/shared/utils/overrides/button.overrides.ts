import { ButtonProps } from "naive-ui"

export const secondaryButtonOverrides: ButtonProps["themeOverrides"] = {
  color: "var(--brand-primary-100)",
  colorHover: "var(--brand-primary-150)",
  colorPressed: "var(--brand-primary-150)",
  colorFocus: "var(--brand-primary-150)",
  textColor: "var(--brand-primary-500)",
  textColorHover: "var(--brand-primary-600)",
  border: "none",
  borderHover: "none",
  borderFocus: "none",
  borderPressed: "none"
}

export const outlinedButtonOverrides: ButtonProps["themeOverrides"] = {
  color: "var(--text-white)",
  colorHover: "var(--brand-primary-100)",
  colorFocus: "var(--brand-primary-150)",
  colorPressed: "var(--brand-primary-150)",
  textColor: "var(--brand-primary-500)"
}

export const blackButtonOverrides: ButtonProps["themeOverrides"] = {
  color: "var(--text-primary)",
  border: "none",
  borderHover: "none",
  borderFocus: "none",
  borderPressed: "none",
  textColor: "var(--text-white)",
  textColorHover: "var(--text-white)",
  textColorFocus: "var(--text-white)",
  textColorPressed: "var(--text-white)",
  colorHover: "var(--text-primary)",
  colorFocus: "var(--text-primary)",
  colorPressed: "var(--text-primary)",
  rippleColor: "var(--text-primary)"
}
