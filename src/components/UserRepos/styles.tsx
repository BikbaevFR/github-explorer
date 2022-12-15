import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Section = tw.section`grow flex flex-col`;

const NotFound = tw.p`text-xl p-6`;

const NotFoundMark = tw.span`text-red-600`;

const List = tw.section`md:flex md:flex-wrap`;

const SpinnerContainer = tw.div`flex grow items-center justify-center`;

const ShowMoreContainer = tw.div`flex justify-center mt-3`;

const RepoContainer = tw.div`md:w-1/2 py-3 px-3 sm:px-6 border-b-2 md:odd:border-r-2`;

const RepoNameContainer = tw.div`flex mb-1`;

const RepoNameLink = styled(Link)(
  tw`text-2xl text-indigo-500 hover:underline transition-all ease-in`
);

const RepoDescription = tw.p`text-stone-500 mb-2`;

const RepoFooter = tw.div`flex items-center text-sm`;

const RepoLanguage = tw.p`text-red-500 mr-5`;

const RepoCalendarSVG = tw.svg`w-4 h-4`;

export {
  Section,
  NotFound,
  NotFoundMark,
  List,
  SpinnerContainer,
  ShowMoreContainer,
  RepoContainer,
  RepoNameContainer,
  RepoNameLink,
  RepoDescription,
  RepoFooter,
  RepoLanguage,
  RepoCalendarSVG,
};
