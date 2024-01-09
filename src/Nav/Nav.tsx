import { ReactNode } from 'react';
import styles from './Nav.module.css';
import List from '../List/List';

interface Props
{
  className: string;
}

const list = [
  {
    src: '/images/github-logo-light.png',
    href: 'https://www.github.com/ProgrammerChris6002/',
    title: 'My github profile',
  },
  {
    src: '/images/youtube-logo-light.png',
    href: 'https://www.youtube.com/channel/UCTj1KPLm02iDi04yO6w6dcA',
    title: 'My youtube channel',
  },
  {
    src: '/images/linkedin-logo-light.png',
    href: 'https://www.linkedin.com/in/christian-chukwuebuka-nwachukwu/',
    title: 'My linkedin profile',
  },
  {
    src: '/images/x-logo-light.png',
    href: 'https://www.twitter.com/ProgChris6002/',
    title: 'My x/twitter profile',
  },
  {
    src: '/images/facebook-logo.png',
    href: 'https://www.facebook.com/ProgrammerChris6002/',
    title: 'My facebook profile',
  },
  {
    src: '/images/tiktok-logo.png',
    href: 'https://www.tiktok.com/@programmerchris6002',
    title: 'My tiktok profile',
  },
];

export default function Nav({
  className,
}: Props): ReactNode
{
  return (
    <nav
      className={ `${className} ${styles.nav}` }
    >
      <div
        className={`container px-5`}
      >
        <h4
          className="h4"
        >
          <a
            href="#"
            title="Christian Nwachukwu"
          >
            Christian Nwachukwu
          </a>
        </h4>
      </div>

      <List
        className={`d-flex justify-content-around me-5`}
        list={ list }
      />
    </nav>
  );
}
