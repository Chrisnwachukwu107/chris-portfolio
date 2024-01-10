import { ReactNode } from "react";
import styles from "./Nav.module.css";
import List from "../List/List";

interface Props {
  className: string;
  navName: string
}

const list = [
  {
    src: "/images/github-logo-light.png",
    href: "https://www.github.com/ProgrammerChris6002/",
    title: "My github profile",
  },
  {
    src: "/images/youtube-logo-light.png",
    href: "https://www.youtube.com/channel/UCTj1KPLm02iDi04yO6w6dcA",
    title: "My youtube channel",
  },
  {
    src: "/images/linkedin-logo-light.png",
    href: "https://www.linkedin.com/in/christian-chukwuebuka-nwachukwu/",
    title: "My linkedin profile",
  },
  {
    src: "/images/x-logo-light.png",
    href: "https://www.twitter.com/ProgChris6002/",
    title: "My x/twitter profile",
  },
  {
    src: "/images/facebook-logo.png",
    href: "https://www.facebook.com/ProgrammerChris6002/",
    title: "My facebook profile",
  },
  {
    src: "/images/tiktok-logo.png",
    href: "https://www.tiktok.com/@programmerchris6002",
    title: "My tiktok profile",
  },
];

export default function Nav({
  className,
  navName,
}: Props): ReactNode {
  return (
    <nav
      className={ `${className} ${styles.nav} ${navName === "header" ? styles["nav-bd"] : ""}` }
    >
      <div
        className={`container mx-0 mx-sm-1 mx-md-3 mx-lg-5 px-0 px-sm-1 px-md-3 px-lg-5`}
      >
        <h4
          className="h4"
        >
          <a
            href="#"
            title="Christian Nwachukwu"
          >
            Chris
          </a>
        </h4>
      </div>

      <List
        className={`d-flex justify-content-around me-0 me-sm-1 me-md-3 me-lg-5`}
        list={list}
      />
    </nav>
  );
}
