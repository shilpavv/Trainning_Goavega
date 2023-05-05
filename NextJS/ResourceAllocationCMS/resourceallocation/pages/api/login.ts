import { LoginStore } from "@/Handler/AllocationStore";
import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
export default withIronSessionApiRoute(
  async function loginRoute(req: any, res: any) {
    // get user from database then:
    const { email, password } = req.body;
    const loginInfo = {
      identifier: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:1337/api/auth/local",
        loginInfo
      );
      // res.json(response.data);
      //  console.log("jwt data ",response.data)
      req.session.user = {
        id: response.data.user.id,
        email: response.data.user.email,
        username: response.data.user.username,
        admin: true,
      };
      //  console.log("req.session.user",req.session.user)
      await req.session.save();
      res.send({ ok: true, user: req.session });
    } catch {
      res.send({ ok: false });
    }
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
