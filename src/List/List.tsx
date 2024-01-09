import { ReactNode } from 'react';
import styles from './List.module.css';

interface Props
{
  className: string;
  list: {
    src: string;
    href: string;
    title: string;
  }[];
}

export default function List({
  className,
  list,
}: Props): ReactNode
{
  return (
    <ul
      className={ `list-unstyled ${className} ${styles.ul}` }
    >
      { list.slice(0, 4).map((li, index): ReactNode =>
      {
        return (
          <li
            key={ index }
            className={ `` }
          >
            <a
              className='mx-2'
              href={ li.href }
              title={ li.title }
            >
              <img
                src={ li.src }
                alt={ li.title }
                width={ 24 }
              />
            </a>
          </li>
        );
      }) }
    </ul>
  );
}
