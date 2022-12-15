import tw, { styled } from "twin.macro";

interface ErrorTextProps {
  isVisible: boolean;
}

const Form = tw.form`flex items-center space-x-1 sm:space-x-3`;

const InputContainer = tw.div`w-2/3 sm:w-3/4 bg-slate-200 rounded-md relative`;

const SearchIcon = tw.div`absolute top-1/2 left-3 transform -translate-y-1/2`;

const Input = tw.input`w-full rounded-md py-4 pl-12 pr-5 relative bg-transparent z-10 outline-none text-sm sm:text-xl`;

const ButtonContainer = tw.div`w-1/3 sm:w-1/4`;

const Button = tw.button`relative w-full py-4 px-2 rounded-md bg-black text-white text-sm sm:text-xl text-center`;

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
