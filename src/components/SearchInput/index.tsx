import {
  Button,
  ButtonContainer,
  ErrorText,
  Form,
  Input,
  InputContainer,
  SearchIcon,
} from "@components/SearchInput/styles";
import { useForm } from "@hooks/useForm";
import { ValidationStatuses } from "@tps/validation";
import { FC } from "react";
import "twin.macro";

interface Props {
  onSubmit: () => void;
  setSearchValue: (value: string) => void;
}

const SearchInput: FC<Props> = ({ onSubmit, setSearchValue }) => {
  const { value, handleChange, handleSubmit, validationStatus } = useForm({
    onSubmit,
    setSearchValue,
  });

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              tw="w-5 h-5 sm:w-7 sm:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </SearchIcon>

          <Input
            tw="w-full rounded-md py-4 pl-12 pr-5 relative bg-transparent z-10 outline-none text-sm sm:text-xl"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="React"
          />
          <ErrorText
            isVisible={validationStatus === ValidationStatuses.INVALID}
          >
            Input field must not be empty
          </ErrorText>
        </InputContainer>

        <ButtonContainer>
          <Button type="submit">Search</Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default SearchInput;
