import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getCookies } from "cookies-next";
import { useState } from "react";

export default async function generateOtp(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // const [token, setToken] = useState("");
  let getToken = req.body.head.Token;

  let bodyContent = req.body;

  // setToken(getToken);
  console.log("getToken2", getToken);

  // let bodyContent = JSON.stringify({
  //   head: {
  //     RequestCode: "EmailSMSCommunication",
  //     UniqueKey: "995711970EXTENDEDAPI394d17661Pvc65",
  //     // Token: localStorage.getItem("token"),
  //     Token: getToken,
  //     AppVer: "01",
  //     AppName: "ExtendedAPI",
  //     OsName: "Android",
  //     UserName: "ycJDNKb58RD",
  //   },
  //   body: {
  //     ClientCode: "",
  //     email: {
  //       subject: "One Time Password",
  //       body: "<p>Dear Customer,</p><p>Please enter this OTP: <b>715476</b> to authorize deal sheet and payment.</p>",
  //     },
  //     sms: {
  //       body: "For deal sheet use OTP 715476",
  //     },
  //   },
  // });

  axios({
    url: "https://broking-apigateway.indiainfoline.com/ExtentedAPI/EmailSMSCommunication",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }).then((data) => res.status(data.status).send(data.data));
}

let headersList = {
  Accept: "*/*",
  "Ocp-Apim-Subscription-Key": "b8dde4267afa44e4802fd97302a12a04",
};
