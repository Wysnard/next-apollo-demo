import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <Link href="/person">
            <a>the phone book app</a>
          </Link>
        </h1>

        <p className={styles.description}>Welcome to the demo page</p>

        <div className={styles.grid}>
          <Link href="/person">
            <a className={styles.card}>
              <h2>Phone Book &rarr;</h2>
              <p>look for a person in our phone book!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
