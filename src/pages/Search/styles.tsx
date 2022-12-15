import tw from "twin.macro";

const Container = tw.div`min-h-[calc(100vh_-_72px)] flex flex-col py-3 sm:py-5`;

const Background = tw.div`grow flex flex-col bg-white rounded-md p-6`;

const SpinnerContainer = tw.div`grow flex items-center justify-center`;

export { Container, Background, SpinnerContainer };
