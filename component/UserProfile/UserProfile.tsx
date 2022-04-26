import React, { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./UserProfile.module.scss";
import styled from "../Root/Root/Root.module.scss";
import Head from "next/head";
import Header from "../Root/HeadeComponent/Header";
import Footer from "../Root/FooterComponent/Footer";
import SideBar from "../Root/SideBarComponent/SideBar";
import Image from "next/image";
import dp from "./images/profile@3x.png";
import cornerImg from "./images/Group 25858@3x.png";
import linkedin from "./images/linkedin.png";
import google from "./images/google.png";
import github from "./images/github.png";
import {
  ClientCode,
  MobileNum,
  ProfileEmail,
  WhiteDelete,
} from "../../svgs/SVG";
import axios from "axios";

const UserProfile = () => {
  const [clientname, setClientname] = useState("");
  const [clientcode, setClientcode] = useState("");
  const [clientMobile, setClientMobile] = useState("");
  const [clientEmail, setClientEmail] = useState("");

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
      <Head>
        <title>User Profile: Nova - IIFL</title>
        <meta
          name="description"
          content="Nova - IIFL - Best Documantion Site"
        />
        <meta property="og:title" content="Nova - IIFL" />
        <meta
          property="og:description"
          content="Nova - IIFL - Best Documantion Site"
        />
        <meta property="og:url" content="https://nova.iifl.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={cx(styled.main)}>
        <SideBar />
        <div className={cx(styled.body)}>
          <div id="main-content" className={cx(styles.wrapper)}>
            <div
              className={cx(
                styles.topSection,
                "row m-0 justify-content-between"
              )}
            >
              <div className={cx(styles.profile, "col-8 p-0")}>
                <div
                  className={cx(styles.firstCard, "d-flex align-items-center")}
                >
                  <div className={styles.cornerImgWrapper}>
                    <Image src={cornerImg} />
                  </div>
                  <div
                    className={cx(
                      styles.dpwrapper,
                      "d-flex align-items-center"
                    )}
                  >
                    <Image src={dp} />
                  </div>
                  <div className={styles.userDetails}>
                    <h1>{clientname}</h1>
                    <div className={cx(styles.userInfo, "d-flex")}>
                      <div className={styles.email}>
                        <p>IIFL Client Code</p>
                        <h4>
                          {" "}
                          <ClientCode /> {clientcode}
                        </h4>
                      </div>
                      <div className={styles.email}>
                        <p>Mobile Number</p>
                        <h4>
                          {" "}
                          <MobileNum /> {clientMobile}
                        </h4>
                      </div>
                      <div className={styles.email}>
                        <p>E-mail ID</p>
                        <h4>
                          {" "}
                          <ProfileEmail /> {clientEmail}
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* <input
                    type='text'
                    placeholder='demo'
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                  />
                  <button onClick={() => submit(value)}>Continue</button> */}
                </div>
                <div className={styles.secondCard}>
                  <h3>Email Preferences</h3>
                  <p style={{ marginBottom: "5px" }}>
                    Choose what messages you'd like to receive
                  </p>
                  <div
                    className={cx(
                      styles.preference,
                      "d-flex justify-content-between align-items-center"
                    )}
                  >
                    <div>
                      <h5>New Products added</h5>
                      <p>
                        Receive a notification for every new product added to
                        the Nova Store
                      </p>
                    </div>
                    <label className={styles.cont}>
                      <input type="checkbox"></input>
                      <span className={styles.checkmark}></span>
                    </label>
                  </div>
                  <div
                    className={cx(
                      styles.preference,
                      "d-flex justify-content-between align-items-center"
                    )}
                  >
                    <div>
                      <h5>New Products added</h5>
                      <p>
                        Receive a notification for every new product added to
                        the Nova Store
                      </p>
                    </div>
                    <label className={styles.cont}>
                      <input type="checkbox"></input>
                      <span className={styles.checkmark}></span>
                    </label>
                  </div>
                  <div
                    className={cx(
                      styles.preference,
                      "d-flex justify-content-between align-items-center"
                    )}
                  >
                    <div>
                      <h5>New Products added</h5>
                      <p>
                        Receive a notification for every new product added to
                        the Nova Store
                      </p>
                    </div>
                    <label className={styles.cont}>
                      <input type="checkbox"></input>
                      <span className={styles.checkmark}></span>
                    </label>
                  </div>
                  <div
                    className={cx(
                      styles.preference,
                      "d-flex justify-content-between align-items-center"
                    )}
                  >
                    <div>
                      <h5>New Products added</h5>
                      <p>
                        Receive a notification for every new product added to
                        the Nova Store
                      </p>
                    </div>
                    <label className={styles.cont}>
                      <input type="checkbox"></input>
                      <span className={styles.checkmark}></span>
                    </label>
                  </div>
                </div>
                <div className={styles.thirdCard}>
                  <h3>Login Sessions</h3>
                  <p style={{ marginBottom: "5px" }}>
                    Places where you have logged into NOVA
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>LOCATION</th>
                        <th>DEVICE</th>
                        <th>IP</th>
                        <th>TIME</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className={styles.location}>
                          Gurugram <br />
                          <span>India</span>
                        </th>
                        <td className={styles.device}>
                          Windows
                          <br />
                          <span>Chrome</span>
                        </td>
                        <td>122.161.78.210</td>
                        <td>20 seconds</td>
                        <td className={styles.status}>Current Session</td>
                      </tr>
                      <tr className={styles.location}>
                        <th>
                          Mumbai <br />
                          <span>India</span>
                        </th>
                        <td className={styles.device}>
                          Android
                          <br />
                          <span>Chrome</span>
                        </td>
                        <td>122.161.78.210</td>
                        <td>2 Days</td>
                        <td className={styles.status}>Expired</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className={cx(
                    styles.fourthCard,
                    "d-flex justify-content-between align-items-center"
                  )}
                >
                  <div>
                    <h3>Close Account</h3>
                    <p>
                      Deleting your profile will unlink Demat and Social media
                      accounts from Nova
                    </p>
                  </div>
                  <a>
                    Delete Profile <WhiteDelete />
                  </a>
                </div>
              </div>
              <div className={cx(styles.aboutMe, "col m-0")}>
                <h2>About Me</h2>
                <p style={{ marginBottom: "16px" }}>
                  Add Bio and link social media{" "}
                </p>
                <p style={{ marginBottom: "8px" }}>Add Bio</p>
                <div className={styles.desc}>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                </div>
                <hr />
                <h4>Link With</h4>
                <div
                  className={cx(
                    styles.link,
                    "d-flex justify-content-between align-items-center"
                  )}
                >
                  <div
                    className={cx(styles.imgTitle, "d-flex align-items-center")}
                  >
                    <div className={styles.logo}>
                      <Image src={linkedin} />
                    </div>
                    <p>LinkedIn</p>
                  </div>
                  <a>Link</a>
                </div>
                <div
                  className={cx(
                    styles.link,
                    "d-flex justify-content-between align-items-center"
                  )}
                >
                  <div
                    className={cx(styles.imgTitle, "d-flex align-items-center")}
                  >
                    <div className={styles.logo}>
                      <Image src={google} />
                    </div>
                    <p>Google</p>
                  </div>
                  <a>Link</a>
                </div>
                <div
                  className={cx(
                    styles.link,
                    "d-flex justify-content-between align-items-center"
                  )}
                >
                  <div
                    className={cx(styles.imgTitle, "d-flex align-items-center")}
                  >
                    <div className={styles.logo}>
                      <Image src={github} />
                    </div>
                    <p>Github</p>
                  </div>
                  <a>Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
