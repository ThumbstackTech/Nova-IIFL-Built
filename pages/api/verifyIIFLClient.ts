import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import { useState, useEffect } from "react";

// let getToken = {
//   token: "",
// };
let getToken;
// let getTokenDetails;
// console.log("dds", getTokenDetails);
export default async function verifyIIFLClient(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // const [token, setToken] = useState("");
  // console.log("req2", req.body.head.Token);
  // useEffect(() => {
  getToken = req.body.head.Token;
  // setToken(getToken);
  console.log("req 21", req.body);
  // }, []);

  // getTokenDetails = getToken;

  // setCookies("servertoken", req.body.head.Tokens, {
  //   maxAge: 60 * 60 * 24,
  // });
  // const bodyToken = JSON.parse(bodyContent);
  // console.log("body", bodyToken.head);
  // bodyToken.head.Token = req.body.head.Token;

  // console.log("bodyContent", bodyContent);

  // console.log("cookie1", getToken);

  //   let {query} = req.body.head.Token;
  //  let { token, refreshToken } = query;
  //  if(localStorage){
  //    localStorage.setItem('token',token )
  //  }

  let bodyContent = req.body;

  console.log("61", bodyContent);

  axios({
    url: "https://broking-apigateway.indiainfoline.com/ExtentedAPI/CheckMobileEmailPANRegistered",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }).then((data) => res.status(data.status).send(data.data));
  //   console.log("hi", token.data);
  // return getToken;
}
let headersList = {
  Accept: "*/*",
  "Ocp-Apim-Subscription-Key": "b8dde4267afa44e4802fd97302a12a04",
  // "Content-Type": "application/json",
};

// console.log("getToken", token);
// console.log("cookieme", getCookie("servertoken"));
// console.log("localstorage", localStorage.getItem("token"));
