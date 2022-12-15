import tw from "twin.macro";

const Section = tw.section`sm:flex sm:items-center p-3 border-b-2 sm:p-6 sm:border-b-4 border-indigo-500`;

const SpinnerContainer = tw.div`flex-1 flex justify-center`;

const InfoBlock = tw.div`mt-3 sm:ml-10 sm:mt-0`;

const InfoTitleLink = tw.a`text-3xl text-indigo-500  hover:underline`;

const InfoSubTitle = tw.h3`text-xl text-stone-500`;

const InfoRowContainer = tw.div`flex items-center text-xl mb-3`;

const InfoRowIconContainer = tw.div`mr-3`;

const SVG = tw.svg`w-7 h-7 stroke-indigo-500`;

export {
  Section,
  SpinnerContainer,
  InfoBlock,
  InfoTitleLink,
  InfoSubTitle,
  InfoRowContainer,
  InfoRowIconContainer,
  SVG,
};
