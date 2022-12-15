import { useScrollPosition } from "@hooks/useScrollPosition";
import { Button, IconContainer } from "@layouts/ScrollToTop/styles";
import { FC, ReactNode } from "react";
import "twin.macro";

const MAX_SCROLL_POSITION = 100;

interface Props {
  children: ReactNode;
}

const ScrollToTop: FC<Props> = ({ children }) => {
  const scrollPosition = useScrollPosition();

  const isVisible = scrollPosition >= MAX_SCROLL_POSITION;

  const handleScrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <>
      {children}
      {isVisible ? (
        <Button onClick={handleScrollToTop}>
          <IconContainer>
            <svg viewBox="0 0 24 24">
              <path d="M11.573 11.672a.615.615 0 0 1 .854 0l3.896 3.824a.578.578 0 0 1 0 .832.615.615 0 0 1-.853 0L12 12.92l-3.47 3.408a.615.615 0 0 1-.853 0 .578.578 0 0 1 0-.832zm0-4a.615.615 0 0 1 .854 0l3.896 3.824a.578.578 0 0 1 0 .832.615.615 0 0 1-.853 0L12 8.92l-3.47 3.408a.615.615 0 0 1-.853 0 .578.578 0 0 1 0-.832z"></path>
            </svg>
          </IconContainer>
          <p>Scroll To Top</p>
        </Button>
      ) : null}
    </>
  );
};

export default ScrollToTop;
