import {
  Container,
  Field,
  FieldText,
  IconContainer,
  Item,
  List,
} from "@components/SearchSelect/styles";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { ReactComponent as ArrowSVG } from "@static/img/arrow.svg";
import { SearchType, SearchTypes } from "@tps/search";
import { Variants } from "framer-motion";
import { FC, MutableRefObject, useRef, useState } from "react";
import "twin.macro";

const options = [
  { id: 1, value: SearchTypes.USERS },
  { id: 2, value: SearchTypes.REPOSITORIES },
];

interface Props {
  selectedType: SearchType;
  setType: (type: SearchType) => void;
}

const SearchSelect: FC<Props> = ({ selectedType, setType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const listVariants: Variants = {
    open: {
      y: "0px",
      opacity: 1,
      display: "block",
    },
    closed: {
      y: "50px",
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  useOnClickOutside(containerRef, () => setIsOpen(false));

  const handleOptionSelect = (type: SearchType): void => {
    if (type === selectedType) return;

    setType(type);
    setIsOpen(false);
  };

  return (
    <Container ref={containerRef}>
      <Field
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FieldText>{selectedType}</FieldText>

        <IconContainer
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <ArrowSVG />
        </IconContainer>
      </Field>

      <List
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={listVariants}
        transition={{ duration: 0.3 }}
      >
        {options.map((v) => {
          return (
            <Item
              isSelect={selectedType === v.value}
              key={v.id}
              onClick={() => handleOptionSelect(v.value)}
            >
              {v.value}
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default SearchSelect;
