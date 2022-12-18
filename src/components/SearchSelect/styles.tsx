import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

interface ItemProps {
  isSelect: boolean;
}

const Container = tw.div`sm:relative w-1/6 sm:w-1/5 select-none`;

const Field = styled(motion.div)(
  tw`min-h-[52px] sm:min-h-[60px] flex items-center justify-center sm:justify-between w-full p-4 cursor-pointer rounded-md bg-indigo-500`
);

const FieldText = tw.div`hidden sm:block truncate text-xl text-white`;

const IconContainer = styled(motion.div)``;

const List = styled(motion.ul)(
  tw`bg-white z-10 absolute w-full left-0 top-[calc(100%+10px)]`
);

const Item = styled.li<ItemProps>(({ isSelect }) => [
  tw`text-white cursor-pointer py-3 px-4 bg-indigo-500  first:rounded-tl-md first:rounded-tr-md first:border-b first:border-b-white last:rounded-bl-md last:rounded-br-md transition-colors hover:bg-indigo-800`,
  isSelect && tw`pointer-events-none cursor-default text-opacity-50`,
]);

export { Container, Field, FieldText, IconContainer, List, Item };
