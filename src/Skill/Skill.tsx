import { ReactNode } from "react";
import styles from './Skill.module.css';

interface Props
{
  className: string;
  containerClassName: string;
  list: {
    label: string;
    subLabel: string[];
    img: string;
  }[];
}

export default function Skill({
  className,
  containerClassName,
  list,
}: Props): ReactNode
{
  return (
    <div className={ `${className}` }
    >
      { list.map((skill, index) =>
      {
        return (
          <div
            className={ `${containerClassName} ${styles["skill-container"]}` }
            key={ index }
          >
            <img
              className={ `${styles["skill-img"]}` }
              src={ skill.img }
              alt={ skill.label }
            />
            <h3 
              className="h3"
            >
              { skill.label }
            </h3>
            <p
            >
              { skill.subLabel } { parseInt(skill.subLabel[0]) > 1 ? 'years' : 'year' } of experience
            </p>
          </div>
        );
      }) }
    </div>
  );
}
