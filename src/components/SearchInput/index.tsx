import {
  Button,
  ButtonContainer,
  ErrorText,
  Form,
  Input,
  InputContainer,
  SearchIcon,
} from "@components/SearchInput/styles";
import SearchSelect from "@components/SearchSelect";
import { useForm } from "@hooks/useForm";
import { SearchType } from "@tps/search";
import { ValidationStatuses } from "@tps/validation";
import { FC } from "react";
import "twin.macro";

interface Props {
  onSubmit: () => void;
  setSearchValue: (value: string) => void;
  type: SearchType;
  setType: (type: SearchType) => void;
}

const SearchInput: FC<Props> = ({
  onSubmit,
  setSearchValue,
  type,
  setType,
}) => {
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
              tw="w-5 h-5 sm:w-7 sm:h-7 hidden sm:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </SearchIcon>

          <Input
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

        <SearchSelect selectedType={type} setType={setType} />

        <ButtonContainer>
          <Button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              tw="w-5 h-5 sm:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <p tw="hidden sm:block">Search</p>
          </Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default SearchInput;
