import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`min-h-[calc(100vh_-_72px)] flex flex-col py-3 sm:py-5`;

const Background = tw.div`grow flex flex-col bg-white rounded-md p-6`;

const SpinnerContainer = tw.div`grow flex items-center justify-center`;

const Head = tw.div`flex flex-wrap items-center justify-between`;

const Title = tw.h1`text-2xl font-bold mb-2`;

const RepoLink = tw.a`inline-block hover:underline`;

const Description = tw.p`text-xl mb-2`;

const InfoRow = tw.div`text-lg mb-2`;

const Language = styled(InfoRow)(tw`text-red-500`);

const Counts = styled(InfoRow)(tw`flex items-center`);

const Count = tw.div`flex items-center text-sm text-indigo-500 mr-3 mb-1 border border-indigo-500 rounded-md py-1 px-2`;

const CountIcon = tw.div`w-5 h-5 mr-2`;

const CountText = tw.p`mr-1`;

const CountNum = tw.p`bg-slate-300 rounded-xl px-1`;

const UpdatedDate = styled(InfoRow)(tw`mb-1 italic text-slate-500`);

const Owner = styled(InfoRow)(tw`flex items-center`);

const OwnerLink = styled(Link)(tw`hover:underline ml-1`);

export {
  Container,
  Background,
  SpinnerContainer,
  Head,
  Title,
  RepoLink,
  Description,
  InfoRow,
  Language,
  Counts,
  Count,
  CountIcon,
  CountText,
  CountNum,
  UpdatedDate,
  Owner,
  OwnerLink,
};
