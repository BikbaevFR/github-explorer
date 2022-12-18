import History from "@pages/History";
import Repo from "@pages/Repo";
import Search from "@pages/Search";
import UserProfile from "@pages/UserProfile";
import { Navigate, Route, Routes } from "react-router-dom";

export enum ROUTE {
  SEARCH = "/",
  HISTORY = "/history",
  USER_PROFILE = "/user/:login",
  REPO = "/repo/:login/:repoName",
}

const Root = () => {
  return (
    <Routes>
      <Route path={ROUTE.SEARCH} element={<Search />} />
      <Route path={ROUTE.HISTORY} element={<History />} />
      <Route path={ROUTE.USER_PROFILE} element={<UserProfile />} />
      <Route path={ROUTE.REPO} element={<Repo />} />
      <Route path="*" element={<Navigate to={ROUTE.SEARCH} replace />} />
    </Routes>
  );
};

export default Root;
