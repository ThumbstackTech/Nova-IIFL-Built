import React, { useEffect, useState } from "react";
import styles from "./styles/style.module.scss";
import axios from "axios";
import OtpInput from "react-otp-input";

function OtpVerify(props: any) {
  axios.defaults.withCredentials = true;

  const [seconds, setSeconds] = useState(30);

  const [otpaction, setOtpaction] = useState({ otp: "" });

  // const [disable, setDisable] = useState(true);

  const [error, setError] = useState("");
  const { value, enteredOtp, handleClose, setShow } = props;

  const back = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    props.prevStep();
  };

  const otpEnterAction = (otp: any) => {
    setOtpaction({ otp });
  };

  const confirmOtp = (e: { preventDefault: () => void }) => {
    // let otp1 = enteredOtp.join("");
    console.log("otp1", otpaction);
    if (otpaction.otp == "715476") {
      axios
        .post("/api/clientProfile", {
          head: {
            RequestCode: "GetClientProfile",
            UniqueKey: "995711970EXTENDEDAPI394d17661Pvc65",
            Token: localStorage.getItem("token"),
            AppVer: "1",
            AppName: "EXTENDEDAPI",
            OsName: "Android",
            UserName: "ycJDNKb58RD",
          },
          body: {
            ClientCode: localStorage.getItem("clientId"),
            DematAccountNo: "",
          },
        })
        .then(function (res) {
          console.log("clientprofile", res);
          console.log("test", res.data.Body.ClientDetails[0].ClientName);
          const clientname1 = res.data.Body.ClientDetails[0].ClientName;

          localStorage.setItem(
            "clientname",
            res.data.Body.ClientDetails[0].ClientName
          );
          localStorage.setItem(
            "clientcode",
            res.data.Body.ClientDetails[0].ClientCode
          );
          localStorage.setItem(
            "clientEmail",
            res.data.Body.ClientDetails[0].Email
          );
          localStorage.setItem(
            "clientMobile",
            res.data.Body.ClientDetails[0].Mobile
          );
          props.nextStep(clientname1);
        });
      console.log("715476", otpaction);

      // alert("verified");

      // window.onunload = function () {
      //   window.opener.location.reload();
      // };
    } else {
      setError("Invalid OTP");
    }

    e.preventDefault();
  };

  const resendOtp = () => {
    axios
      .post("/api/generateOtp", {
        head: {
          RequestCode: "EmailSMSCommunication",
          UniqueKey: "995711970EXTENDEDAPI394d17661Pvc65",
          Token: localStorage.getItem("token"),
          AppVer: "01",
          AppName: "ExtendedAPI",
          OsName: "Android",
          UserName: "ycJDNKb58RD",
        },
        body: {
          ClientCode: localStorage.getItem("clientId"),
          email: {
            subject: "One Time Password",
            body: "<p>Dear Customer,</p><p>Please enter this OTP: <b>715476</b> to authorize deal sheet and payment.</p>",
          },
          sms: {
            body: "For deal sheet use OTP 715476",
          },
        },
      })
      .then(function (res) {
        console.log(res);
      });
  };

  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter]);

  // useEffect(() => {
  //   if (otpaction.otp == "715476") {
  //     setDisable(false);
  //   }
  // }, []);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(0);
    }

    if (!seconds) return;
    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div className={styles.secondwrapper}>
      <img id={styles.secondcornerImg} src="/images/login2overlay.svg" alt="" />
      <span onClick={handleClose}>
        <img
          src="images/close.svg"
          alt="close"
          className={styles.secondcloseBlack}
        />
      </span>
      {/* </div> */}
      <h1>
        <a className={styles.back} onClick={back}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </a>
        Enter OTP to login
      </h1>
      <h5>
        OTP sent to <span>{value.phone}</span>
      </h5>

      <div className={styles.secondform}>
        <div className={styles.secondloginForm}>
          <p className={styles.secondfirstP}>Enter OTP</p>
          <div className={styles.secondotpInput}>
            <OtpInput
              inputStyle={styles.secondemailInput}
              value={otpaction.otp}
              onChange={otpEnterAction}
              numInputs={6}
              separator={<span> &nbsp;&nbsp;&nbsp;</span>}
            />
            {/* <input
              className={styles.secondemailInput}
              type="tel"
              maxLength="1"
              onKeyUp={(e) => otpEnterAction(e, 0)}
              value={enteredOtp}
              // value={enteredOtp[0] ? enteredOtp[0] : null}
            />
            <input
              className={styles.secondemailInput}
              type="tel"
              maxLength="1"
              onKeyUp={(e) => otpEnterAction(e, 1)}
              value={enteredOtp}
              // value={enteredOtp[1] ? enteredOtp[1] : null}
            />
            <input
              className={styles.secondemailInput}
              type="tel"
              maxLength="1"
              onKeyUp={(e) => otpEnterAction(e, 2)}
              value={enteredOtp}
              // value={enteredOtp[2] ? enteredOtp[2] : null}
            />
            <input
              className={styles.secondemailInput}
              type="tel"
              maxLength="1"
              onKeyUp={(e) => otpEnterAction(e, 3)}
              value={enteredOtp}
              // value={enteredOtp[3] ? enteredOtp[3] : null}
            />
            <input
              className={styles.secondemailInput}
              type="tel"
              maxLength="1"
              onKeyUp={(e) => otpEnterAction(e, 4)}
              value={enteredOtp}
              // value={enteredOtp[4] ? enteredOtp[4] : null}
            />
            <input
              className={styles.secondemailInput}
              type="tel"
              maxLength="1"
              onKeyUp={(e) => otpEnterAction(e, 5)}
              value={enteredOtp}
              // value={enteredOtp[5] ? enteredOtp[5] : null}
            /> */}
          </div>
          <p className={styles.seconderrorCase}>{error}</p>
          <div className={styles.secondcta}>
            {/* {otpaction.otp == "715476" ? (
              <button onClick={confirmOtp} className={styles.secondcontinueBtn}>
                Verify <img src="/images/verifyvector.svg" alt="" />
              </button>
            ) : (
              <button className={styles.secondcontinueBtn}>
                Verify <img src="/images/verifyvector.svg" alt="" />
              </button>
            )} */}

            <button onClick={confirmOtp} className={styles.secondcontinueBtn}>
              Verify <img src="/images/verifyvector.svg" alt="" />
            </button>

            {seconds ? (
              <p className={styles.secondlogin}>
                You can resend OTP in <strong>0:{seconds}</strong>
              </p>
            ) : (
              <p className={styles.secondlogin}>
                Didn't receive OTP?{" "}
                <strong className={styles.resendotp} onClick={resendOtp}>
                  Resend OTP
                </strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerify;
