import tw, { TwStyle, styled } from "twin.macro";

interface ContainerProps {
  size?: string;
}

const sizeStyles: { [key: string]: TwStyle } = {
  sm: tw`xl:w-36 xl:h-36`,
  "mobile-lg": tw`w-full max-w-md h-fit mx-auto sm:mx-0 sm:w-80 sm:max-w-none`,
};

const Container = styled.div<ContainerProps>(({ size = "md" }) => [
  tw`flex justify-center items-center w-48 h-48 rounded-full overflow-hidden border-2 border-indigo-500`,
  sizeStyles[size],
]);

export { Container };
