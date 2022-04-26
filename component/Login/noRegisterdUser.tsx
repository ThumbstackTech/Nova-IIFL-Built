import React from "react";
import cx from "classnames";
import styles from "./styles/signUp.module.scss";
import Link from "next/link";

export default function SignUp(props: any) {
  const { handleClose } = props;
  return (
    <>
      <div className={styles.fifthwrapper}>
        <img id={styles.secondcornerImg} src="/images/signupdemat.png" alt="" />{" "}
        <span onClick={handleClose}>
          <img
            src="images/close.svg"
            alt="close"
            className={styles.secondcloseBlack}
          />
        </span>
        <h1>Please keep the following documents handy</h1>
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#00aa63"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          A proof of Identity ( PAN, Aadhaar , etc.)
        </h5>{" "}
        {/*image placeholder inside h5 tag --> <img src='/images/greentickvector.svg' alt='' /> */}
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#00aa63"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          A proof of Address (Driver license, Passport, etc.)
        </h5>{" "}
        {/*<img src='/images/greentickvector.svg' alt='' /> */}
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#00aa63"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Bank Account Details
        </h5>
        {/*<img src='/images/greentickvector.svg' alt='' /> */}
        <div className={styles.demataccount}>
          <h3>Demat</h3>
          <p>account</p>
        </div>
        <Link href="https://www.indiainfoline.com/open-demat-account">
          <a className={styles.continueBtn}>Continue</a>
        </Link>
      </div>
    </>
  );
}
