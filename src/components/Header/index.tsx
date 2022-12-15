import {
  BurgerMenu,
  LogoIconContainer,
  LogoLink,
  LogoText,
  Menu,
  MenuLink,
  MenuList,
  Nav,
  Wrap,
} from "@components/Header/styles";
import { ROUTE } from "@routes/Root";
import { ReactComponent as LogoSVG } from "@static/img/logo.svg";
import { FC, useState } from "react";
import "twin.macro";
import tw from "twin.macro";

interface Props {
  activeLink?: string;
}

const activeLinkStyle = tw` text-indigo-500`;

const Header: FC<Props> = ({ activeLink }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <header>
      <Nav>
        <Wrap>
          <LogoLink to={ROUTE.SEARCH}>
            <LogoIconContainer>
              <LogoSVG />
            </LogoIconContainer>

            <LogoText>Github Explorer</LogoText>
          </LogoLink>

          <BurgerMenu
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <svg
              tw="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </BurgerMenu>

          <Menu isVisible={isVisible}>
            <MenuList>
              <li>
                <MenuLink
                  to={ROUTE.SEARCH}
                  style={activeLink === ROUTE.SEARCH ? activeLinkStyle : {}}
                >
                  Search
                </MenuLink>
              </li>

              <li>
                <MenuLink
                  to={ROUTE.HISTORY}
                  style={activeLink === ROUTE.HISTORY ? activeLinkStyle : {}}
                >
                  History
                </MenuLink>
              </li>
            </MenuList>
          </Menu>
        </Wrap>
      </Nav>
    </header>
  );
};

export default Header;
