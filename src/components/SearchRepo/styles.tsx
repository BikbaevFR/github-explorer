import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Container = tw.li`border-b border-slate-200 py-3 last:border-b-0`;

const RepoLink = styled(Link)(tw``);

const Name = tw.h3`inline-block hover:underline text-xl font-semibold mb-2`;

const Description = tw.p`text-base italic mb-2`;

const Topics = tw.ul`flex flex-wrap items-center text-sm`;

const Topic = tw.li`mr-1 mb-2 last:mr-0 text-indigo-500 rounded-xl border border-indigo-500 py-1 px-3`;

const Bottom = tw.div`flex flex-wrap items-center text-sm`;

const StarCount = tw.div`mr-2 mb-1 flex items-center italic`;

const StarIconContainer = tw.div`w-4 h-4 mr-1`;

const Language = tw.p`mr-2 mb-1 text-red-500`;

const UpdatedDate = tw.p`mb-1 italic text-slate-500`;

export {
  Container,
  RepoLink,
  Name,
  Description,
  Topics,
  Topic,
  Bottom,
  StarCount,
  StarIconContainer,
  Language,
  UpdatedDate,
};
