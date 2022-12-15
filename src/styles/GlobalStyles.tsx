import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles, theme } from "twin.macro";

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`bg-slate-200 antialiased`,
  },
  "img, svg": {
    ...tw`w-full h-auto`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
