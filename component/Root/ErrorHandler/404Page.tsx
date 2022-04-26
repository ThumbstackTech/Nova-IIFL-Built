import Image from "next/image";
import React from "react";
import styles from "./404.module.scss";
import overlay from "../../../public/images/404overlay.png";
import overlayMobile from "../../../public/images/overlayvector.png";
import Link from "next/link";
import Header from "../HeadeComponent/Header";

const NoPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.errorcard}>
          <div className={styles.overlay}>
            <Image
              id="overlay"
              src={overlay}
              alt="overlay"
              layout="intrinsic"
            />
          </div>
          <div className={styles.overlayText}>
            <h5>404</h5>
            <p>error</p>
          </div>
          <h1>Sorry</h1>
          <h4>we couldn't find that page</h4>
          <p>Try using our search or go to Nova home page </p>
          <Link href="/">
            <a>
              <button>Nova home page</button>
            </a>
          </Link>
        </div>
        <div className={styles.overlayMobile}>
          <Image
            id="overlay"
            src={overlayMobile}
            alt="overlay"
            layout="intrinsic"
          />
        </div>
        <div className={styles.overlayTextmobile}>
          <h5>404</h5>
          <p>error</p>
        </div>
      </div>
    </>
  );
};

export default NoPage;
