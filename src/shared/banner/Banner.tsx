import React from "react";
import styles from "./Banner.module.scss";
import BannerImg from "@/assets/images/banner.png";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Link from "next/link";

interface BannerProps {
  bannerPage: string;
}

const Banner: React.FC<BannerProps> = ({ bannerPage }) => {
  return (
    <div className={styles.bannerContainer}>
      <Image src={BannerImg} alt="Banner" className={styles.bannerImg} />

      <div className={styles.bannerContent}>
        <Image src={Logo} alt="logo" />
        <h5 className={styles.logoName}>{bannerPage}</h5>

        <div className={styles.bannerNav}>
          <Link href="/">
            <p className={styles.bannerHome}>Home</p>
          </Link>
          <ChevronRight />
          <p className={styles.bannerShop}>{bannerPage}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
