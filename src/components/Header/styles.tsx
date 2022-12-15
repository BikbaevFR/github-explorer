import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Nav = tw.nav`bg-white border-gray-200 px-2 sm:px-6 py-2 rounded dark:bg-gray-900`;

const Wrap = tw.div`flex flex-wrap items-center justify-between mx-auto`;

const LogoLink = styled(Link)(tw`flex items-center`);

const LogoIconContainer = tw.div`mr-3 w-12 h-12`;

const LogoText = tw.span`self-center text-xl font-semibold whitespace-nowrap dark:text-white`;

const BurgerMenu = tw.button`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`;

interface IMenuProps {
  isVisible: boolean;
}

const Menu = styled.div<IMenuProps>(({ isVisible }) => [
  tw`w-full md:block md:w-auto`,
  !isVisible && tw`hidden`,
]);

const MenuList = tw.ul`flex flex-col py-2 px-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`;

const MenuLink = styled(Link)(
  tw`block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out`
);

export {
  Nav,
  Wrap,
  LogoLink,
  LogoIconContainer,
  LogoText,
  BurgerMenu,
  Menu,
  MenuList,
  MenuLink,
};
