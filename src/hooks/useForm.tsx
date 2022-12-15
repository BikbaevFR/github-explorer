import { ValidationStatus, ValidationStatuses } from "@tps/validation";
import { isValueEmpty } from "@utils/validation";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onSubmit?: () => void;
  setSearchValue?: (value: string) => void;
}

export const useForm = ({ setSearchValue, onSubmit }: Props) => {
  const [value, setValue] = useState<string>("");
  const [validationStatus, setValidationStatus] = useState<ValidationStatus>(
    ValidationStatuses.IDLE
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (validationStatus === ValidationStatuses.INVALID) {
      setValidationStatus(ValidationStatuses.IDLE);
    }

    const seachValue = e.target.value.trim();
    setValue(seachValue);
    setSearchValue && setSearchValue(seachValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isValueEmpty(value)) {
      setValidationStatus(ValidationStatuses.INVALID);
      return;
    }

    onSubmit && onSubmit();
    setValue("");
  };

  return {
    value,
    handleChange,
    handleSubmit,
    validationStatus,
  };
};
