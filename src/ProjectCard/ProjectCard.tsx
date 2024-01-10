import { ReactNode } from "react";
import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

interface Props {
  className: string;
  list: {
    label: string;
    subLabel: string[];
    subLabelImg: string[];
    img: string;
    link: string;
  }[];
}

export default function ProjectCard({ className, list }: Props): ReactNode {
  return (
    <div
      className={`${className} ${styles["card-section"]}`}
    >
      {list.map((card, index) => {
        return (
          <div
            className="col mb-4" key={index}
          >
            <div
              className="card align-items-center text-center"
            >
              <img
              
                className={`card-img-top ${styles["card-img"]}`}
                src={card.img}
                alt={card.label}
              />
              <div
                className="mx-0 mx-sm-2 mx-md-3 card-body"
              >
                <h5
                  className="h5 mb-2 card-title"
                >
                  <strong
                  >
                    {card.label}
                  </strong>
                </h5>
                <p
                  className="card-text"
                >
                  {card.subLabelImg.map((img, index) => {
                    return (
                      <img
                        className={`me-3 ${styles["card-project-img"]}`}
                        key={index}
                        src={img}
                        width={40}
                      />
                    );
                  })}
                </p>
                <Button
                  className="btn"
                >
                  <a
                    href={card.link}
                    className="text-dark"
                    target="_blank"
                  >
                    VIEW PROJECT
                  </a>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
