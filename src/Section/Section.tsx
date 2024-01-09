import { ReactNode } from 'react';
import styles from './Section.module.css';

interface Props
{
  className: string;
  children: ReactNode;
}

export default function Section({
  className,
  children,
}: Props): ReactNode
{
  return (
    <section
      className={ `${className} ${styles.section}` }
    >
      { children }
    </section>
  );
}
