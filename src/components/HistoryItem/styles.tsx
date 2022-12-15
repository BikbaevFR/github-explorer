import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Container = tw.li`min-h-[100px] rounded-md select-none flex flex-col`;

const HistoryItemLink = styled(Link)(
  tw`grow flex flex-col justify-between p-3 transition-colors hover:bg-slate-200 rounded-md`
);

const Title = tw.h3`mb-2 text-xl font-medium`;

const Footer = tw.div`flex items-center text-sm`;

const Type = tw.p`text-indigo-500 mr-3 border border-indigo-500 px-2 py-1 rounded-full`;

const HistoryItemDate = tw.p`text-slate-600`;

export { Container, HistoryItemLink, Title, Footer, Type, HistoryItemDate };
