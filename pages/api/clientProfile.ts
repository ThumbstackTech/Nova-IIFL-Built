import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function generateOtp(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let getToken = req.body.head.Token;

  let bodyContent = req.body;

  console.log("getToken2", getToken);

  axios({
    url: "https://broking-apigateway.indiainfoline.com/ExtentedAPI/GetClientProfileV1",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }).then((data) => res.status(data.status).send(data.data));
}

let headersList = {
  Accept: "*/*",
  "Ocp-Apim-Subscription-Key": "b8dde4267afa44e4802fd97302a12a04",
};
