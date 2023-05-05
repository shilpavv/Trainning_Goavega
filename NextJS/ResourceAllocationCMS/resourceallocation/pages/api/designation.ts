// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const url = "http://127.0.0.1:1337/api/designations/";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    try {
      const response = await axios.get(url);
      res.status(200).json(response.data);
    } catch (error) {
      console.log("message", error);
    }
  }
}
