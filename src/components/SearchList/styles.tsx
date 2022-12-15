import tw from "twin.macro";

const Container = tw.div`pt-10`;

const List = tw.ul`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`;

const ButtonWrap = tw.div`flex justify-center mt-3`;

const NotFound = tw.p`text-xl`;

const NotFoundMark = tw.span`text-red-600`;

export { Container, NotFound, NotFoundMark, List, ButtonWrap };
