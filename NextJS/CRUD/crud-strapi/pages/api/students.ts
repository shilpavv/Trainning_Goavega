import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: any
}
const url="http://127.0.0.1:1337/api/students"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method=="GET"){
      const response= await axios.get(url)
      res.status(200).json(response.data)
    }else{
      if(req.method=="POST"){
        const response= await axios.post(url)
        res.status(200).json(response.data)
    }
  }
}