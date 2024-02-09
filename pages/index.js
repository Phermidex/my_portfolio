import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hermides Medina | My portfolio</title>
        <meta name="description" content="Present my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className="text-blue" href="#home">Hermides Medina</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About me</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Contact me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <Container>
        <main className={styles.main}>
          <h1 className={`${styles.title} f-grand`}>
            Big things <a href="https://nextjs.org">start small</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Phermidex"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2022 All reserved | Hermides Medina | Designed By Phermidex.
        </a>
      </footer>
    </div>
  );
}
