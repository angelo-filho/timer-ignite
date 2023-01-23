import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      elementColor: string;
      dividerColor: string;
      timerNumberBgColor: string;
      placeholderColor: string;
      labelColor: string;
      textColor: string;
      titleColor: string;
      white: string;
      red: string;
      redDark: string;
      mainGreen: string;
      sideGreen: string;
      orange: string;
    };
    screens: {
      lg: string;
      xl: string;
    };
  }
}
