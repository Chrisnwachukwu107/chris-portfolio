import Nav from './Nav/Nav';
import Section from './Section/Section';
import Button from './Button/Button';
import Skill from './Skill/Skill';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './App.module.css';

const skills = [
  {
    label: "HTML5",
    subLabel: [ "2" ],
    img: "/images/html5-logo.png",
  },
  {
    label: "CSS3",
    subLabel: [ "2" ],
    img: "/images/css3-logo.png",
  },
  {
    label: "JavaScript",
    subLabel: [ "2" ],
    img: "/images/js-logo.png",
  },
  {
    label: "BOOTSTRAP5",
    subLabel: [ "1" ],
    img: "/images/bootstrap5-logo.png",
  },
  {
    label: "React.js",
    subLabel: [ "1" ],
    img: "/images/reactjs-logo.png",
  },
  {
    label: "Git/Github",
    subLabel: [ "2" ],
    img: "/images/github-logo-light.png",
  },
  {
    label: "Chat-GPT",
    subLabel: [ "1" ],
    img: "/images/openai-logo.png",
  },
];

const projects = [
  {
    label: "BLOG APPLICATION",
    subLabel: [
      "React.js",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/reactjs-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/blog-app-img.png",
    link: "https://teenblog-react.vercel.app/",
  },
  {
    label: "TODO LIST APPLICATION",
    subLabel: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/html5-logo.png",
      "/images/css3-logo.png",
      "/images/js-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/todo-app-img.png",
    link: "https://js-todo-app-dun.vercel.app/",
  },
  {
    label: "COUNTRIES DATA APPLICATION",
    subLabel: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/html5-logo.png",
      "/images/css3-logo.png",
      "/images/js-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/js-countries-data-app-img.png",
    link: "https://countries-data-app.vercel.app/",
  },
  {
    label: "COUNTRIES LIST APPLICATION",
    subLabel: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/html5-logo.png",
      "/images/css3-logo.png",
      "/images/js-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/js-countries-list-app-img.png",
    link: "https://js-countries-list-app.vercel.app/",
  },
  {
    label: "FORM VALIDATION APPLICATION",
    subLabel: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/html5-logo.png",
      "/images/css3-logo.png",
      "/images/js-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/js-form-validation-app-img.png",
    link: "https://js-form-validation-app.vercel.app/",
  },
  {
    label: "LEADERBOARD APPLICATION",
    subLabel: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/html5-logo.png",
      "/images/css3-logo.png",
      "/images/js-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/js-leaderboard-app-img.png",
    link: "https://js-leaderboard-app.vercel.app/",
  },
  {
    label: "SOLAR SYSTEM APPLICATION",
    subLabel: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "BOOTSTRAP5",
      "Git",
      "Chat-GPT",
    ],
    subLabelImg: [
      "/images/html5-logo.png",
      "/images/css3-logo.png",
      "/images/js-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
      "/images/openai-logo.png",
    ],
    img: "/images/js-solar-system-app-img.png",
    link: "https://js-solar-system-app.vercel.app/",
  },
  {
    label: "PRICING CARD APPLICATION",
    subLabel: [
      "React.js",
      "BOOTSTRAP5",
      "Git",
    ],
    subLabelImg: [
      "/images/reactjs-logo.png",
      "/images/bootstrap5-logo.png",
      "/images/github-logo.png",
    ],
    img: "/images/pricing-card-app-img.png",
    link: "https://first-react-app-lemon-pi.vercel.app/",
  },
];

export default function App() {
  return (
    <>
    <Nav
      className='d-flex py-4 px-5 text-white'
    />

    <Section
      className='d-flex align-items-start justify-content-start p-5 text-white'
    >
      <div
        className={ `container px-5` }
      >
        <h1
          className='h1 mb-5'
        >
          Nice to meet you!
          <br
          />
          I'm <span
            className={ `${styles["section-header-h1-span"]}` }
          >
            Christian Nwachukwu.
          </span>
        </h1>
        <p
          className={ `mb-5 ${styles["section-p"]}` }
        >
          Based in Nigeria, I'm a Front End Developer Passionate about building accessible web apps that users love.
        </p>
        <Button
          className='btn'
        >
          {/* email: mailto:programmerchris6002@gmail.com */}
          <a 
            href="https://wa.me/234?text=Hello%20there,%20I%20am%20interested%20in."
          >
            CONTACT ME
          </a>
        </Button>
      </div>
      <div
        className="container-fluid p-0 px-5 text-end"
      >
        <img
          className={ `me-0 text-end ${styles["section-header-img"]}` }
          src="/images/portfolio-img.png"
          alt="Me"
          width={ 300 }
        />
      </div>
    </Section>

    <Section
      className='container-fluid mx-auto p-5 text-white'
    >
      <Skill
        className='row row-cols-1 row-cols-lg-2'
        containerClassName='col-5 col-md-4 col-lg-3 text-center'
        list={ skills }
      />
    </Section>

    <Section
      className='container-fluid mx-auto p-5 text-white'
    >
      <div className="container-fluid d-flex justify-content-between align-items-start px-5 mb-5">
        <h2
          className={`h2 ${styles["section-h2"]}`}
        >
          Projects
        </h2>
        <Button
          className='btn'
        >
          {/* email: mailto:programmerchris6002@gmail.com */}
          <a 
            href="https://wa.me/234?text=Hello%20there,%20I%20am%20interested%20in."
          >
            CONTACT ME
          </a>
        </Button>
      </div>
      <ProjectCard
        className="row row-cols-1 row-cols-lg-2 mx-4"
        list = { projects }
      ></ProjectCard>
    </Section>

    <Section
      className={`container-fluid mx-auto p-5 text-white`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-start px-5 mb-5">
        <div
        >
          <h2
            className={`h2 mb-4 ${styles["section-h2"]}`}
          >
            Contact
          </h2>
          <p
            className={ `${styles["section-p"]}` }
          >
            I would love to hear about your project and how I could help. Please fill in the form and I'l get back to you as soon as possible.
          </p>
        </div>
        <div
        >
          <form>
          <div
            className="mb-3"
          >
            <input
              type="text"
              className={`form-control ${styles.input}`}
              id="exampleFormControlInput1"
              placeholder="NAME"
            />
          </div>
          <div
            className="mb-3"
          >
            <input
              type="email"
              className={`form-control ${styles.input}`}
              id="exampleFormControlInput1"
              placeholder="EMAIL"
            />
          </div>
          <div
            className="mb-3"
          >
            <textarea
              className={`form-control ${styles.textarea}`}
              id="exampleFormControlTextarea1"
              rows={ 4 }
              cols={ 60 }
              placeholder='MESSAGE'
            >
            </textarea>
          </div>
            <Button
              className='btn'
            >
              {/* email: mailto:programmerchris6002@gmail.com */}
              <a
                href="https://wa.me/234?text=Hello%20there,%20I%20am%20interested%20in."
              >
                SEND MESSAGE
              </a>
            </Button>
          </form>
        </div>
      </div>
    </Section>

    <Nav
      className='d-flex py-5 px-5 text-white'
    />
    </>
  );
}
