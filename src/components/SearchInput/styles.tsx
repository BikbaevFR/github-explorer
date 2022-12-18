import tw, { styled } from "twin.macro";

interface ErrorTextProps {
  isVisible: boolean;
}

const Form = tw.form`relative flex items-center space-x-1 sm:space-x-3`;

const InputContainer = tw.div`w-4/6 sm:w-3/5 bg-slate-200 rounded-md relative`;

const SearchIcon = tw.div`absolute top-1/2 left-3 transform -translate-y-1/2`;

const Input = tw.input`w-full rounded-md py-4 px-3 sm:pl-12 sm:pr-5 relative bg-transparent z-10 outline-none text-sm sm:text-xl`;

const ButtonContainer = tw.div`w-1/6`;

const Button = tw.button`relative w-full py-4 px-2 rounded-md bg-black text-white text-sm sm:text-xl flex items-end justify-center`;

const ErrorText = styled.p<ErrorTextProps>(({ isVisible }) => [
  tw`transition-opacity text-red-500 absolute left-0 top-full opacity-0`,
  isVisible && tw`opacity-100`,
]);

export {
  Form,
  SearchIcon,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  ErrorText,
};
