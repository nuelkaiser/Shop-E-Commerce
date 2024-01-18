import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.overAllContainer}>
      <div className={styles.footerContainer}>
        <div>
          <div className={styles.mobileLogo}></div>
          <p className={styles.footerAddress}>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.footerInnerContainer}>
            <div className={styles.linksContainer}>
              <p className={styles.footerLinksHeader}>Links</p>

              <div className={styles.footerLinksContainer}>
                <Link href="/">
                  <p className={styles.footerLinks}>Home</p>
                </Link>

                <Link href="/">
                  <p className={styles.footerLinks}>Shop</p>
                </Link>

                <Link href="/">
                  <p className={styles.footerLinks}>About</p>
                </Link>

                <Link href="/">
                  <p className={styles.footerLinks}>Contact</p>
                </Link>
              </div>
            </div>

            <div className={styles.linksContainer}>
              <p className={styles.footerLinksHeader}>Help</p>

              <div className={styles.footerLinksContainer}>
                <p className={styles.footerLinks}>Payment Options</p>
                <p className={styles.footerLinks}>Returns</p>
                <p className={styles.footerLinks}>Privacy Policies</p>
              </div>
            </div>
          </div>

          <div className={styles.linksContainer}>
            <p className={styles.footerLinksHeader}>Newsletter</p>

            <div className={styles.emailContainer}>
              <p className={styles.footerEmailAddress}>
                Enter Your Email Address
              </p>

              <p className={styles.footerSubscribe}>SUBSCRIBE</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className={styles.footerCopyRight} />
        <p className={styles.copyRight}>
          2022 Meubel House. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
