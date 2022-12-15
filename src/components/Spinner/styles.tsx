import tw, { TwStyle, styled } from "twin.macro";

interface SVGProps {
  color?: string;
  size?: string;
}

const colorStyles: { [key: string]: TwStyle } = {
  gray: tw`text-gray-200`,
  white: tw`text-white`,
};

const sizeSteyles: { [key: string]: TwStyle } = {
  sm: tw`w-6 h-6`,
  xl: tw`w-28 h-28`,
};

const SVG = styled.svg<SVGProps>(({ color = "gray", size = "sm" }) => [
  tw`mr-2 inline h-6 w-6 animate-spin fill-indigo-500 text-gray-200 dark:text-gray-600`,
  //   twClasses && tw`${twClasses}`,
  colorStyles[color],
  sizeSteyles[size],
]);

export { SVG };
