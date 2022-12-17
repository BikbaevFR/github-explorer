import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Container = tw.div`min-h-[calc(100vh_-_72px)] py-5 flex flex-col`;

const Background = tw.div`grow bg-white py-6 px-3 rounded-md`;

const Text = tw.div`text-2xl px-3`;

const SearchLink = styled(Link)(tw`ml-1 text-indigo-500 hover:underline`);

export { Container, Background, Text, SearchLink };
