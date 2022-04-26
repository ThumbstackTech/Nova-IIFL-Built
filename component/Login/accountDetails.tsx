import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles/style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function accountDetails(props: {
  nextStep: any;
  value: any;
  handleChange: any;
  handleClose?: any;
  setShow: any;
  client1: any;
}) {
  const { value, handleClose, setShow, client1 } = props;
  const [clientname, setClientname] = useState("");
  const [clientcode, setClientcode] = useState("");
  const [clientMobile, setClientMobile] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const router = useRouter();

  // const Signuplink = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   props.nextStep();
  // };

  const handleprofile = () => {
    router.push("/Profile");
    setShow(false);
  };
  useEffect(() => {
    const clientname1 = localStorage.getItem("clientname");
    setClientname(`${clientname1}`);
    const clientcode1 = localStorage.getItem("clientcode");
    setClientcode(`${clientcode1}`);
    const clientMobile1 = localStorage.getItem("clientMobile");
    setClientMobile(`${clientMobile1}`);
    const clientEmail1 = localStorage.getItem("clientEmail");
    setClientEmail(`${clientEmail1}`);
  }, []);
  return (
    <>
      <div className={styles.fourthwrapper}>
        <img id={styles.secondcornerImg} src="/images/signupdemat.png" alt="" />
        <span onClick={handleClose}>
          <img
            src="images/close.svg"
            alt="close"
            className={styles.secondcloseBlack}
          />
        </span>
        <h1>We found your IIFL Demat account</h1>
        <h5>Shall we link this account?</h5>
        <div className={styles.demataccount}>
          <h3>Demat</h3>
          <p>account</p>
        </div>
        <div className={styles.secondform}>
          <h3>{client1}</h3>
          <div className={styles.secondloginForm}>
            <div>
              <p>Client Code</p>
              <h4>{clientcode}</h4>
            </div>
            <div>
              <p>Mobile no.</p>
              <h4>{clientMobile}</h4>
            </div>
            <div className={styles.emailDetail}>
              <p>Email ID</p>
              <h4>{clientEmail}</h4>
            </div>
          </div>
        </div>
        <p className={styles.seconderrorCase}>
          want to use a different number or email?{" "}
          <Link href="/Login">
            <a>click here</a>
          </Link>{" "}
        </p>
        <div className={styles.secondcta}>
          <a className={styles.continueBtn} onClick={handleprofile}>
            {/* <button className={styles.continueBtn}>Link & continue</button> */}
            Link & continue
          </a>

          <button className={styles.outlinecontinueBtn}>Open new Demat</button>
        </div>
      </div>
    </>
  );
}

export default accountDetails;
