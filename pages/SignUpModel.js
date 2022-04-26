import React from "react";
import cx from "classnames";
import styles from "../styles/signUp.module.scss";

function SignUpModel() {
  return (
    <>
      <div className={cx(styles.wrapper)}>
        <div className={cx(styles.containerFluid1)}>
          <div className={cx(styles.heading, "row justify-content-center")}>
            <div className={cx(styles.signupcard, "col-md-6")}>
              <img
                src="images/close.svg"
                alt="close"
                className={cx(styles.closeBlack, "float-end")}
              />
              <h1>Signup To Generate API key</h1>
              <p className={cx(styles.firstP)}>
                Signup with your mobile number to generate API Key
              </p>
              <div className={cx(styles.form, "row")}>
                <div className={cx(styles.loginForm, "col-md-8 pt-2 pb-4")}>
                  <input
                    type="email"
                    className={cx(styles.emailInput)}
                    placeholder="Enter E-mail id or Mobile Number"
                  />
                  <div className={cx("row mt-4 mx-1 justify-content-center")}>
                    <button className={cx(styles.signupbutton, "col-md-5")}>
                      Signup with OTP
                    </button>
                    <p className={cx(styles.login, "col-md my-2")}>
                      Already registered?<a href="#"> Login</a>
                    </p>
                  </div>
                </div>
                <div
                  className={cx(
                    styles.loginButtons,
                    "col-md d-flex justify-content-center flex-column"
                  )}
                >
                  <button>
                    <img src="images/google@3x.png" alt="" />
                    &nbsp; Google account
                  </button>
                  <button>
                    <img src="images/github@3x.png" alt="" />
                    &nbsp; Github account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpModel;