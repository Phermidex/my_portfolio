/* eslint-disable react/jsx-key */
import Head from "next/head";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Image } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import ScrollToTop from "react-scroll-to-top";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState } from "react";

const techIcons = {
  width: "140px",
  padding: "1rem",
};

export default function Home() {
  const [theme, setTheme] = useState("none");

  const items = [
    <Image
      style={techIcons}
      src="icons/icons8-html-5.svg"
      role="presentation"
      alt="HTML5"
      data-value="1"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-css3.svg"
      role="presentation"
      alt="CSS3"
      data-value="2"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-javascript.svg"
      role="presentation"
      alt="JAVASCRIPT"
      data-value="3"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-jquery.svg"
      role="presentation"
      alt="JQUERY"
      data-value="4"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-node-js.svg"
      role="presentation"
      alt="NODEJS"
      data-value="5"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-php-logo.svg"
      role="presentation"
      alt="PHP"
      data-value="6"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-github.svg"
      role="presentation"
      alt="GITHUB"
      data-value="7"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-mysql-logo.svg"
      role="presentation"
      alt="MYSQL"
      data-value="8"
    />,
    <Image
      style={techIcons}
      src="icons/icons8-postgresql.svg"
      role="presentation"
      alt="POSTGRESQL"
      data-value="9"
    />,
  ];

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="new-containers">
      <Head>
        <title>Hermides Medina | My portfolio</title>
        <meta name="description" content="Present my portfolio" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap`}/>
      </Head>
      <Navigation />
      <Container fluid>
      <main className="main home">
          <div className="main__title--board">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "transparent",
                  },
                },
                fpsLimit: 40,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#0070f347",
                  },
                  links: {
                    color: "#0d47a1",
                    distance: 150,
                    enable: false,
                    opacity: 1,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 180,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 0, max: 3 },
                  },
                },
                detectRetina: true,
              }}
            />
            <h1 className="title f-grand big-things">
              The Big things <br />
              <a className="small-things" href="mailto:hermides07@gmail.com">
                start small
              </a>
              <br />
              <p>the atoms represent that!</p>
              <p>When we started in the world of the development you not start big</p>
              <p>Never forget you start step by step!</p>
            </h1>

            <div className="main__person--big-me">
              <LazyLoadImage
                style={{ marginTop: "clamp(1rem, -0.875rem + 8.333vw, 3.5rem)", maxWidth: 400, width: '100%' }}
                className="zindex-1"
                placeholderSrc="https://placeholder.pics/svg/600/DEDEDE/fff"
                src="./images/me.png"
                height="auto"
                alt="Me"
              />
            </div>
            <div className="my_curve">
              <div className="curve"></div>
            </div>
          </div>

          <section className="aboutme__section">
            <div className="another__me text-center">
              <LazyLoadImage
                style={{ maxWidth: 400 }}
                className="zindex-1"
                placeholderSrc="https://placeholder.pics/svg/600/DEDEDE/fff"
                src="./images/mehat.png"
                width="100%"
                height="auto"
                alt="Me"
              />
            </div>
            <div id="aboutMe" className="aboutme__section--description">
              <h2 className="f-grand">About Me</h2>
              <p>
                I have been a web developer since I was 18 years old and I am
                very passionate about the web world and all its challenges.
              </p>
              <p>
                Today I have more than 10 years of experience working on
                projects to make them work and solve my {"client's"} problems.
              </p>
              <p className="f-grand">{`"I love programming, coffee, and my family!"`}</p>
            </div>
          </section>

          <section className="porfolio__section">
            <div id="projects" className="porfolio__title">
              <h2 className="f-grand text-center">Projects</h2>
            </div>

            <div className="grid grid--circle porfolio__grid">
              <a
                href="https://hermepos.com"
                rel="noreferrer"
                target="_blank"
                className="card"
              >
                <h2>Hermepos &rarr;</h2>
                <p>Web pos system built with postgres and php</p>
              </a>

              <a
                href="https://todoapp345.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
                className="card"
              >
                <h2>TodoApp &rarr;</h2>
                <p>Buitl using PDO and php</p>
              </a>

              <a href="#" rel="noreferrer" target="_blank" className="card">
                <h2>NoaTest &rarr;</h2>
                <p>
                  Discover and deploy boilerplate form with reatc for projects.
                </p>
              </a>

              <a
                href="https://node.hermepos.com/"
                rel="noreferrer"
                target="_blank"
                className="card"
              >
                <h2>Import app &rarr;</h2>
                <p>
                  I build and deploy a node.js, reactjs app for sent import of
                  data based on file type .csv
                </p>
              </a>
            </div>

            <div className="tech_images">
              <div className="container">
                <AliceCarousel
                  autoWidth
                  mouseTracking
                  animationDuration={2000}
                  animationType={"slide"}
                  infinite
                  autoPlay
                  items={items}
                  disableDotsControls
                  disableButtonsControls
                />
              </div>
            </div>

          </section>

          <section id="contactMe" className="contactme__section">
            <h2 className="f-grand text-center">Contact Me</h2>
            <div className="form__me text-center">
              <h3 className="f-grand">Send me an email now</h3>
              <a href="https://www.linkedin.com/in/hermides-medina-80992813b/"
                target="_blank" rel="noreferrer" className="btn btn-lg btn-primary">Book Now</a>
            </div>
            <div className="contactme__section--details">
              <p>
                Phone: <a href="tel:+18096789456">+1 (809) 673-8436</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:hermides05@gmail.com">hermides07@gmail.com</a>
              </p>
              <p className="f-grand">
                I love programming, coffee, and my family!
              </p>
            </div>
          </section>
        </main>
      </Container>
      <ScrollToTop smooth />
      <Footer className="footer" />
    </div>
  );
}
