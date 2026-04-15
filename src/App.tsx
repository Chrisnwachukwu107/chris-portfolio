'use client';

import { useEffect, useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://programmerchriz.vercel.app';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        window.location.href = 'https://programmerchriz.vercel.app';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const progressWidth = (countdown / 5) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.gridOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        {/* Floating icon */}
        <div className={styles.iconWrapper}>
          <div className={styles.iconGlow}>
            <div className={styles.iconGlowBg}></div>
            <div className={styles.iconContent}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Portfolio Updated</h1>
          <p className={styles.subtitle}>Exciting new destination ahead! 🚀</p>
        </div>

        {/* Description Card */}
        <div className={styles.descriptionCard}>
          <p>
            My portfolio has evolved with fresh projects, refined design, and advanced features.
            <span className={styles.highlight}>Let's explore what's new!</span>
          </p>
        </div>

        {/* Main CTA Button */}
        <div className={styles.buttonWrapper}>
          <a
            href="https://programmerchriz.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <span>
              Visit New Portfolio
              <svg
                className={styles.buttonArrow}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>3+</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>10+</div>
            <div className={styles.statLabel}>Technologies</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>4+</div>
            <div className={styles.statLabel}>Years Exp</div>
          </div>
        </div>

        {/* Portfolio Link */}
        <div className={styles.linkSection}>
          <p className={styles.linkLabel}>Direct link:</p>
          <p>
            <span className={styles.linkDot}></span>
            <a
              href="https://programmerchriz.vercel.app"
              className={styles.link}
            >
              programmerchriz.vercel.app
            </a>
          </p>
        </div>
      </div>

      {/* Footer with countdown */}
      <div className={styles.footer}>
        <div className={styles.countdownBox}>
          <p className={styles.countdownText}>
            Redirecting in{' '}
            <span className={styles.countdownNumber}>{countdown}s</span>
          </p>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Keyboard shortcut hint */}
      <div className={styles.keyboardHint}>
        Press <span className={styles.keyboardKey}>Enter</span> to redirect now
      </div>
    </div>
  );
}



// export default function App() {

//   return (
//     <div>
//     </div>
    // <>
    //   <Nav
    //     className={ `d-flex py-4 px-1 px-md-3 px-lg-5 text-white` }
    //     navName="header"
    //   />

    //   <Section
    //     className={ `d-flex align-items-center justify-content-center justify-content-md-start flex-wrap flex-md-nowrap px-1 px-md-3 px-lg-5 py-5 text-white text-center text-md-start ${styles["section-header"]}` }
    //   >
    //     <div className={`container px-1 px-md-3 px-lg-5 mb-5 mb-md-0`}>
    //       <h1 className="h1 mb-5">
    //         Nice to meet you!
    //         <br />
    //         I'm <span className={`${styles["section-header-h1-span"]}`}>
    //           Christian Nwachukwu.
    //         </span>
    //       </h1>
    //       <p
    //         className={`mb-4 mb-md-5 ${styles["section-p"]} text-center text-md-start mx-auto mx-md-0`}
    //       >
    //         Based in Nigeria, I'm a Front End Developer Passionate about
    //         building accessible web apps that users love.
    //       </p>
    //       <Button className="btn">
    //         <a
    //           href="https://t.me/Programmerchriz"
    //         >
    //           CONTACT ME
    //         </a>
    //       </Button>
    //     </div>
    //     <div className="container-fluid p-0 px-1 px-md-3 px-lg-5 text-center">
    //       <img
    //         className={`me-0 text-end ${styles["section-header-img"]}`}
    //         src="/images/portfolio-img-2.jpg"
    //         alt="Me"
    //       />
    //     </div>
    //   </Section>

    //   <Section
    //     className="container-fluid mx-auto text-center py-5 px-1 px-md-3 px-lg-5 text-white"
    //   >
    //     <Skill
    //       className="mx-auto text-center row"
    //       containerClassName="col-auto mx-auto text-center"
    //       list={ skills }
    //     />
    //   </Section>

    //   <Section
    //     className="container-fluid mx-auto py-5 px-1 px-sm-2 px-md-3 px-lg-5 text-white"
    //   >
    //     <div
    //       className="container-fluid d-sm-flex justify-content-between align-items-start py-5 px-1 px-sm-2 px-md-3 px-lg-5  mb-5"
    //     >
    //       <h2
    //         className={`h2 text-center ${styles["section-h2"]}`}
    //       >
    //         Projects
    //       </h2>
    //       <Button
    //         className="d-none d-sm-inline-block btn"
    //       >
    //         {/* email: mailto:programmerchris6002@gmail.com */}
    //         <a
    //           href="https://wa.me/2348104948700?text=Hello%20there,%20I%20am%20interested%20in."
    //         >
    //           CONTACT ME
    //         </a>
    //       </Button>
    //     </div>
    //     <ProjectCard
    //       className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-4 align-items-center px-0 px-sm-5 px-md-0"
    //       list={ projects }
    //     >
    //     </ProjectCard>
    //     <div
    //       className="container text-center"
    //     >
    //       <Button
    //         className="d-inline-block d-sm-none btn"
    //       >
    //         <a
    //           href="https://wa.me/2348104948700?text=Hi%20Christian,%20I%20saw%20one%20of%20your%20websites%20and%20I%20want%20you%20to%create%20one%20for%20me."
    //         >
    //           CONTACT ME
    //         </a>
    //       </Button>
    //     </div>
    //   </Section>

    //   <Section
    //     className={`container-fluid mx-auto px-1 px-md-2 px-xxl-5 py-5 text-center text-white`}
    //   >
    //     <div
    //       className="container-fluid d-lg-flex justify-content-between align-items-start px-1 px-md-2 px-xxl-5 py-5 mb-5 text-center"
    //     >
    //       <div
    //         className="mx-auto text-center"
    //       >
    //         <h2
    //           className={`h2 mb-4 ${styles["section-h2"]}`}
    //         >
    //           Contact
    //         </h2>
    //         <p
    //           className={`${styles["section-p"]} mx-auto text-center mb-5 mb-lg-0`}
    //         >
    //           I would love to hear about your project and how I could help.
    //           Please fill in the form and I'l get back to you as soon as
    //           possible.
    //         </p>
    //       </div>
    //       <div
    //         className="mx-auto text-center"
    //       >
    //        {/* email: mailto:programmerchris6002@gmail.com */}
    //         <Contact/>
    //       </div>
    //     </div>
    //   </Section>

    //   <Nav
    //     className="d-flex py-4 px-1 px-md-3 px-lg-5 text-white"
    //     navName="footer"
    //   />
    // </>
  
//   );
// }