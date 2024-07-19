import type { GlobalThemeOverrides } from "naive-ui"

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#0C111D",
    primaryColorHover: "#000000",
    primaryColorPressed: "#0C111D",
    primaryColorSuppl: "var(--text-white)",
    borderRadius: "1.2rem"
  },
  LoadingBar: {
    colorLoading: "#0C111D",
    // colorLoading: "var(--brand-primary-500)",
    height: "4px"
  },
  Drawer: {
    borderRadius: "none",
    headerBorderBottom: "1px solid #E7E8EA",
    closeIconColor: "var(--text-primary)",
    closeIconColorHover: "var(--text-primary)",
    closeIconColorPressed: "var(--text-primary)",
    closeSize: "24",
    closeIconSize: "14",
    closeColorHover: "transparent",
    closeColorPressed: "transparent",
    closeBorderRadius: "none"
  },
  Form: {
    labelFontSizeTopMedium: "1.2rem",
    labelHeightSmall: "3.6rem",
    labelHeightMedium: "4.2rem",
    labelHeightLarge: "5.2rem",
    labelFontWeight: "500",
    labelTextColor: "var(--text-primary)",
    feedbackTextColorError: "var(--static-red)",
    feedbackFontSizeMedium: "1.4rem",
    blankHeightSmall: "3.6rem",
    blankHeightMedium: "4.2rem",
    blankHeightLarge: "5.2rem"
  },
  Input: {
    groupLabelBorder: "2px solid var(--grey-default)",
    border: "2px solid var(--grey-default)",
    borderHover: "2px solid var(--text-primary)",
    borderFocus: "2px solid var(--text-primary)",
    borderDisabled: "2px solid var(--grey-default)",
    borderError: "2px solid var(--static-red)",
    borderFocusError: "2px solid var(--static-red)",
    heightSmall: "3.6rem",
    heightMedium: "4.2rem",
    heightLarge: "4.8rem",
    paddingLarge: "1.2rem 2rem",
    color: "var(--text-white)",
    colorDisabled: "var(--brand-grey-500)",
    boxShadowFocus: "none",
    textColor: "var(--text-primary)",
    textColorDisabled: "var(--brand-grey-300)",
    suffixTextColor: "var(--text-tertiary)",
    placeholderColor: "var(--grey-500)",
    placeholderColorDisabled: "var(--text-tertiary)",
    caretColor: "var(--text-primary)",
    groupLabelColor: "var(--text-white)",
    groupLabelTextColor: "var(--brand-primary-500)"
  },
  Select: {
    color: "var(--grey-50)",
    textColor: "var(--text-primary)",
    textColorDisabled: "var(--grey-400)"
  },
  InternalSelection: {
    border: "2px solid var(--grey-default)",
    borderHover: "2px solid var(--text-primary)",
    borderFocus: "2px solid var(--text-primary)",
    borderDisabled: "2px solid var(--grey-default)",
    borderError: "2px solid var(--static-red)",
    borderFocusError: "2px solid var(--static-red)",
    borderActive: "2px solid var(--grey-default)",
    boxShadowActive: "2px solid var(--grey-default)",
    heightSmall: "3.6rem",
    heightMedium: "4.2rem",
    heightLarge: "5.2rem",
    color: "var(--text-white)",
    colorDisabled: "var(--brand-grey-500)",
    boxShadowFocus: "none",
    textColor: "var(--text-primary)",
    textColorDisabled: "var(--brand-grey-500)",
    suffixTextColor: "var(--text-tertiary)",
    placeholderColor: "var(--grey-500)",
    placeholderColorDisabled: "var(--text-tertiary)",
    caretColor: "var(--text-primary)",
    arrowColor: "var(--grey-500)"
  },
  Button: {
    fontSizeTiny: "1.2rem",
    fontSizeSmall: "1.2rem",
    fontSizeMedium: "1.4rem",
    fontSizeLarge: "1.6rem",
    heightTiny: "3.2rem",
    heightSmall: "3.6rem",
    heightMedium: "4rem",
    heightLarge: "4.8rem",
    paddingTiny: "0 1.8rem",
    fontWeight: 600,
    border: "1px solid var(--brand-primary-500)",
    paddingSmall: "0 1.2rem",
    // iconMarginMedium: "1rem",
    iconSizeMedium: "2.4rem",
    // error
    colorError: "var(--danger-500)",
    borderError: "none",
    // tertiary
    textColorTertiary: "var(--brand-primary-500)",
    // primary
    colorHoverPrimary: "var(--brand-primary-300)",
    colorPressedPrimary: "var(--brand-primary-600)",
    colorFocusPrimary: "var(--brand-primary-600)",
    borderHoverPrimary: "none",
    borderPressedPrimary: "none",
    borderFocusPrimary: "none",
    borderPrimary: "none"
  },
  Checkbox: {
    sizeMedium: "2rem",
    border: "2px solid var(--grey-200)",
    borderChecked: "2px solid var(--brand-primary-500)",
    borderFocus: "2px solid var(--brand-primary-500)",
    borderDisabled: "2px solid var(--grey-200)",
    borderDisabledChecked: "2px solid var(--grey-200)",
    sizeLarge: "2.5rem",
    borderRadius: "0.6rem"
  },
  DataTable: {
    thColor: "var(--bg-primary)",
    thTextColor: "var(--text-secondary)",
    tdTextColor: "var(--text-primary)",
    thPaddingMedium: "1.3rem 2.4rem 1.3rem 2.4rem",
    tdPaddingMedium: "2.6rem 2.4rem 2.6rem 2.4rem",
    tdColorHover: "var(--grey-50)",
    fontSizeMedium: "1.2rem"
  },
  Pagination: {
    itemBorderActive: "transparent",
    buttonIconColor: "var(--brand-primary-500)",
    buttonBorder: "none",
    buttonBorderHover: "none",
    buttonBorderPressed: "none",
    itemBorderDisabled: "none",
    itemColorDisabled: "transparent",
    itemTextColorHover: "var(--brand-primary-500)"
  },
  Dialog: {
    borderRadius: "1.6rem"
  },
  Carousel: {
    arrowColor: "var(--brand-primary-500)",
    dotColorActive: "var(--brand-primary-500)",
    dotColor: "var(--brand-primary-300)",
    dotLineWidthActive: "10rem",
    dotLineWidth: "5rem"
  },
  Skeleton: {
    color: "var(--grey-50)",
    colorEnd: "#eeeff2"
  },
  Alert: {
    titleTextColorError: "var(--text-white)",
    contentTextColorError: "var(--text-white)",
    colorError: "var(--danger-500)",
    closeIconColorError: "var(--text-white)",
    closeIconColorHoverError: "var(--text-white)",
    closeColorHoverError: false,

    titleTextColorSuccess: "var(--text-white)",
    contentTextColorSuccess: "var(--text-white)",
    colorSuccess: "var(--success-500)",
    closeIconColorSuccess: "var(--text-white)",
    closeIconColorHoverSuccess: "var(--text-white)",
    closeColorHoverSuccess: false,

    titleTextColorInfo: "var(--text-white)",
    contentTextColorInfo: "var(--text-white)",
    colorInfo: "var(--brand-lightblue-600)",
    closeIconColorInfo: "var(--text-white)",
    closeIconColorHoverInfo: "var(--text-white)",
    closeColorHoverInfo: false,

    titleTextColorWarning: "var(--text-white)",
    contentTextColorWarning: "var(--text-white)",
    colorWarning: "var(--warning-500)",
    closeIconColorWarning: "var(--text-white)",
    closeIconColorHoverWarning: "var(--text-white)",
    closeColorHoverWarning: false,

    borderRadius: ".8rem"
  },
  Tabs: {
    colorSegment: "transparent",
    tabColorSegment: "var(--brand-primary-500)",
    tabTextColorHoverSegment: "var(--text-white)",
    tabTextColorHoverBar: "black",
    tabTextColorHoverCard: "black",
    tabTextColorHoverLine: "black",
    tabTextColorActiveSegment: "var(--text-white)",
    tabBorderRadius: "0.8rem"
  },
  Radio: {
    buttonBorderColor: false,
    buttonBorderColorActive: false,
    buttonColorActive: "var(--brand-primary-500)",
    buttonTextColorActive: "var(--text-white)",
    buttonBoxShadowFocus: false,
    buttonBorderRadius: false,
    buttonTextColor: "var(--grey-300)",
    buttonTextColorHover: "var(--brand-primary-500)",
    buttonHeightMedium: "3rem",
    fontSizeMedium: "1.4rem",
    labelFontWeight: "500"
  },
  Tag: {
    padding: ".6rem 1.6rem",
    borderRadius: ".8rem",

    heightMedium: "2.8rem",
    heightSmall: "2.3rem",

    textColor: "var(--text-primary)",
    color: "#00000014",
    colorBordered: "#00000014",
    border: false,

    borderPrimary: false,

    colorSuccess: "#09B84914",
    colorBorderedSuccess: "#09B84914",
    textColorSuccess: "var(--success-500)",
    borderSuccess: false,

    colorError: "#F93D3D14",
    colorBorderedError: "#F93D3D14",
    textColorError: "var(--danger-500)",
    borderError: false,

    colorWarning: "#FFA41D14",
    colorBorderedWarning: "#FFA41D14",
    textColorWarning: "#FFA41D",
    borderWarning: false,

    colorInfo: "#54B8F914",
    colorBorderedInfo: "#54B8F914",
    textColorInfo: "var(--brand-lightblue-600)",

    borderInfo: false,

    opacityDisabled: "1"
  },
  DatePicker: {
    iconColor: "var(--brand-primary-500)"
  }
}

export default themeOverrides
