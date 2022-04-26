import React, { useEffect, useState } from "react";
import PhoneInput from "./phoneInput";
import Otpverify from "./otpVerify";
import { ValidateEmail, validateMobile } from "./helper";
import Profile from "../../pages/Profile";
import NoRegisterdUser from "./noRegisterdUser";
import dynamic from "next/dynamic";

const Accountdetails = dynamic(() => import("./accountDetails"));

const StepForm = (props: { handleClose: any; setShow: any }) => {
  const { handleClose, setShow } = props;
  // const [enteredOtp, setEnteredOtp] = useState(["", "", "", "", "", ""]);
  const [mobileNumber, setMobileNumber] = useState(false);
  const [emaildetails, setEmaildetails] = useState(false);
  const [client, setClient] = useState();

  const [state, setState] = useState({
    phone: "",
    // email: "",
  });

  const [step, setStep] = useState(1);

  const handleChange =
    (input: any) =>
    (
      e: { target: { value: any } },
      mobile: boolean | ((prevState: boolean) => boolean),
      email: any
    ) => {
      setState({ ...state, [input]: e.target.value });
      console.log("typevalue", { ...state, [input]: e.target.value });
      let isValid = validateMobile(mobile);
      if (isValid) {
        setMobileNumber(mobile);
      } else {
        setMobileNumber(false);
      }
      let isValidEmail = ValidateEmail(email);
      if (isValidEmail) {
        setEmaildetails(email);
      } else {
        setEmaildetails(false);
      }
    };
  //   const hashHandleChange = (hash: any) => {
  //     setState({ ...state, hash: hash });
  //   };
  const nextStep = (clientname1: any) => {
    setClient(clientname1);
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const hideStep = () => {
    setStep(4);
  };

  const { phone } = state;
  const value = { phone };

  switch (step) {
    case 1:
      return (
        <PhoneInput
          nextStep={nextStep}
          hideStep={hideStep}
          handleChange={handleChange}
          handleClose={handleClose}
          value={value}
        />
      );
    case 2:
      return (
        <Otpverify
          nextStep={nextStep}
          prevStep={prevStep}
          // otpEnterAction={otpEnterAction}
          // enteredOtp={enteredOtp}
          value={value}
          handleClose={handleClose}
        />
      );
    case 3:
      return (
        <Accountdetails
          nextStep={nextStep}
          value={undefined}
          handleChange={undefined}
          handleClose={handleClose}
          setShow={setShow}
          client1={client}
        />
      );
    case 4:
      return <NoRegisterdUser handleClose={handleClose} />;
    default:
      return (
        <PhoneInput
          nextStep={nextStep}
          handleChange={handleChange}
          value={value}
        />
      );
  }
};

export default StepForm;
