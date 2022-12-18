import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Container = tw.li`flex justify-center overflow-hidden w-full last:mb-0 mb-5`;

const ItemLink = styled(Link)(
  tw`w-full h-full flex justify-center items-center flex-col transition-opacity hover:opacity-70`
);

const Text = tw.span`max-w-full text-indigo-500 text-xl truncate`;

export { Container, ItemLink, Text };
