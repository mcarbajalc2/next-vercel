import Head from "next/head";
import {FC} from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";
import { ComponentProperties } from '../../interfaces/generic/ComponentProperties';

export const MainLayout: FC <ComponentProperties> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
