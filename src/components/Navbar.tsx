import styles from "./Navbar.module.css";
import React from "react";
import { ActiveLink } from "./active-link";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  const items = menuItems.map(({ text, href }) => (
    <ActiveLink key={href} text={text} href={href} />
  ));

  return <nav className={styles["menu-container"]}>{items}</nav>;
};
