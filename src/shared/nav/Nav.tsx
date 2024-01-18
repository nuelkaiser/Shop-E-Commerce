import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Account from "@/assets/icons/account.svg";
import Search from "@/assets/icons/Search.svg";
import Fav from "@/assets/icons/favourite.svg";
import Cart from "@/assets/icons/cart.svg";
import Hamburger from "@/assets/icons/hamburger.svg";
import Close from "@/assets/icons//close.svg";
import Link from "next/link";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.navLinksContainer}>
          <Link href="/">
            <p className={styles.navLinks}>Home</p>
          </Link>

          <Link href="/">
            <p className={styles.navLinks}>Shop</p>
          </Link>

          <Link href="/">
            <p className={styles.navLinks}>About</p>
          </Link>

          <Link href="/">
            <p className={styles.navLinks}>Contact</p>
          </Link>
        </div>

        <div className={styles.mobileHamContainer}>
          <Hamburger className={styles.hamburger} onClick={handleOpenMenu} />

          <div className={styles.mobileLogo}></div>
        </div>

        <div className={styles.navIconsContainer}>
          <div className={styles.navIcons}>
            <Account />
          </div>
          <div className={styles.navIcons}>
            <Search />
          </div>
          <div className={styles.navIcons}>
            <Fav />
          </div>
          <div className={styles.navIcons}>
            <Cart />
          </div>
        </div>
      </div>

      {menu && (
        <div
          className={
            menu ? `${styles.openMobileMenu}` : `${styles.closeMobileMenu}`
          }
        >
          <Close className={styles.closed} onClick={handleOpenMenu} />

          <div>
            <Link href="/">
              <p className={styles.mobileNavLinks}>Home</p>
            </Link>

            <Link href="/">
              <p className={styles.mobileNavLinks}>Shop</p>
            </Link>

            <Link href="/">
              <p className={styles.mobileNavLinks}>About</p>
            </Link>

            <Link href="/">
              <p className={styles.mobileNavLinks}>Contact</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
