import { withIronSessionApiRoute } from "iron-session/next";
export default withIronSessionApiRoute(
  function loginRoute(req:any, res: any) {
    console.log('user session', req.session)
    res.send({ ok: true , user: req.session.user});
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
)