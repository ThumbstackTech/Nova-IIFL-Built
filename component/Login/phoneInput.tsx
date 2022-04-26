import React, { useState } from "react";
import styles from "./styles/style.module.scss";
import axios from "axios";
import { setCookies } from "cookies-next";
import Link from "next/link";
import NoRegisterdUser from "./noRegisterdUser";

function PhoneInput(props: {
  nextStep?: any;
  hideStep?: any;
  value?: any;
  handleChange?: any;
  hashHandleChange?: any;
  handleClose?: any;
}) {
  const { value, handleChange, handleClose } = props;

  const [numberhide, setNumberhide] = useState("");
  // const [phoneValue, setPhoneValue] = useState("");
  // const [emailvalue, setEmailValue] = useState("");

  const Continue = (e: { preventDefault: () => void }) => {
    // if (Number(value.phone)) {
    //   setPhoneValue(value.phone);
    // } else {
    //   setEmailValue(value.phone);
    // }
    let phone: number;
    let email: string;

    if (/^\d+$/.test(value.phone)) {
      console.log("phone", value.phone);
      // setPhoneValue(value.phone);
      phone = value.phone;
    } else {
      console.log("email", value.phone);
      // setEmailValue(value.phone);
      email = value.phone;
    }
    console.log("valuein", phone!, email!);
    axios
      .post("/api/adminLogin", {
        head: {
          requestCode: "IIFLMarRQLoginForVendorV2",
          appName: "IIFLMarNOVA",
          appVer: "1.0",
          key: "L08ZFzFCKfYmQD3qvvOVpj3kiBGJkKkZ",
          osName: "Android",
          userId: "h1TuxZ5I+VST4fHQeo8v1Q==",
          password: "EVJYiRyyHvs8v3aZiOv5kw==",
        },
        body: {
          Email_id: "apisupport.broking@iifl.com",
          ContactNumber: "8291474042",
          LocalIP: "192.168.88.41",
          PublicIP: "192.168.88.42",
        },
      })
      .then(function (res) {
        console.log("Token1", res.data.body.Status);
        if (res.data.body.Status === 0) {
          let Token = res.data.body.Token;
          // if (typeof window !== "undefined") {
          //   localStorage.setItem("token", Token);
          // }

          // setCookies("servertoken", res.data.body.Token, {
          //   maxAge: 60 * 60 * 24,
          // });
          console.log("Token", res.data.body.Token);
          axios
            .post("/api/verifyIIFLClient", {
              head: {
                RequestCode: "CheckMobileEmailPANRegistered",
                UniqueKey: "995711970EXTENDEDAPI394d17661Pvc65",
                Token: Token,
                AppVer: "01",
                AppName: "EXTENDEDAPI",
                OsName: "Android",
                UserName: "ycJDNKb58RD",
              },
              body: {
                Mobile: phone, //Mobile number of the user
                Email: email, //Email ID of the user
                Pan: "",
              },
            })

            .then(function (res) {
              // console.log("Token2", res.data.body.RegistrationStatus);
              if (typeof window !== "undefined") {
                localStorage.setItem("token", Token);
              }

              if (typeof window !== "undefined") {
                localStorage.setItem("clientId", res.data.Body.LoginId);
              }

              if (res.data.Body.RegistrationStatus === "Registered") {
                props.nextStep();
                axios.post("/api/generateOtp", {
                  head: {
                    RequestCode: "EmailSMSCommunication",
                    UniqueKey: "995711970EXTENDEDAPI394d17661Pvc65",
                    Token: Token,
                    AppVer: "01",
                    AppName: "ExtendedAPI",
                    OsName: "Android",
                    UserName: "ycJDNKb58RD",
                  },
                  body: {
                    ClientCode: res.data.Body.LoginId,
                    email: {
                      subject: "One Time Password",
                      body: "<p>Dear Customer,</p><p>Please enter this OTP: <b>715476</b> to authorize deal sheet and payment.</p>",
                    },
                    sms: {
                      body: "For deal sheet use OTP 715476",
                    },
                  },
                });

                // .then(function (res) {
                //   console.log(res);
                //   if (res.data.Body.RegistrationStatus === "unRegistered") {
                //     alert("Not Registered");
                //   }
                // });
              } else {
                console.log(res);
                props.hideStep();
                // alert("Not Registered");
              }
            });
        }
      });
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <span onClick={handleClose}>
        <img src="images/close.svg" alt="close" className={styles.closeBlack} />
      </span>
      {/* </div> */}
      <h1>Let's get started</h1>
      <img id={styles.cornerImg} src="/images/logincornerimg.svg" alt="" />
      <div className={styles.form}>
        <div className={styles.loginForm}>
          <p className={styles.firstP}>Enter Mobile Number or email</p>
          <input
            type="text"
            value={value.phone}
            onChange={handleChange("phone")}
            // placeholder="Enter the Phone No."
            className={styles.emailInput}
          />

          {!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.phone) &&
          value.phone.length > 0 &&
          !/^\d+$/.test(value.phone) ? (
            value.phone !== !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ? (
              <p className={styles.errorCase}>
                Invalid Email., Please enter a valid email
              </p>
            ) : (
              false
            )
          ) : (
            false
          )}

          {/^\d+$/.test(value.phone) ? (
            !/^[7-9][0-9]{9}$/.test(value.phone) ? (
              <p className={styles.errorCase}>
                Invalid Mobile No., Please enter a valid 10 digit no.
              </p>
            ) : (
              false
            )
          ) : (
            false
          )}

          {value.phone.length > 0 ? (
            <div className={styles.info}>
              <p>
                <img src="images/bluebulb.svg" alt="" />
                Use a mobile no. or email linked with your IIFL Demat
              </p>
            </div>
          ) : (
            false
          )}
          {value.phone.length > 9 ? (
            <button className={styles.continueBtn} onClick={Continue}>
              Continue
            </button>
          ) : (
            <button className={styles.continueBtn}>Continue</button>
          )}

          <p className={styles.login}>
            By proceeding, I agree to
            <Link href="/t&c">
              <a>T&C</a>
            </Link>
          </p>
        </div>
        <div className={styles.divider}>
          <hr />
        </div>
        <div className={styles.loginButtons}>
          <button>
            <img src="images/google@3x.png" alt="" />
            &nbsp; Continue with Google
          </button>
          <button>
            <img src="images/LinkedIn_icon_circle.svg@3x.png" alt="" />
            &nbsp; Continue with Linkedin
          </button>
          <button>
            <img src="images/github@3x.png" alt="" />
            &nbsp; Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;
