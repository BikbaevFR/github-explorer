import tw, { styled } from "twin.macro";

interface ButtonProps {
  isLoading: boolean;
}

const Button = styled.button<ButtonProps>(({ isLoading }) => [
  tw`sm:w-1/4 text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center`,
  isLoading && tw`cursor-not-allowed`,
]);

export { Button };
