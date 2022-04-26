import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("req", req);
  axios({
    url: "https://dataservice.iifl.in/openapi/prod/LoginRequestMobileForVendorV2",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }).then((data) => {
    res.status(data.status).send(data.data);
    console.log("xyz", data.data);
  });
}
let headersList = {
  Accept: "*/*",
  "Ocp-Apim-Subscription-Key": "fc714d8e5b82438a93a95baa493ff45b",
  "Content-Type": "application/json",
};

let bodyContent = JSON.stringify({
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
});
