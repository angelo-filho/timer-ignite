import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    elementColor: string;
    dividerColor: string;
    placeholderColor: string;
    labelColor: string;
    textColor: string;
    titleColor: string;
    white: string;
    red: string;
    redDark: string;
    mainGreen: string;
    sideGreen: string;
  }
}
