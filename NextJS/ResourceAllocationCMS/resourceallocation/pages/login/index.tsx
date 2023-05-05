import React, { useState } from "react";
import axios from "axios";
import { LoginStore } from "@/Handler/AllocationStore";
import { useRouter } from "next/router";
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userdata = {
    email,
    password,
  };
  async function handleLogin(e: any) {
    e.preventDefault();
    const res = await axios.post("api/login", userdata);
    const logindata = res.data;
    if (logindata.ok) {
      alert("Successfully Login");
      return router.push("/allocations");
    } else {
      alert("An error occurred. Please try again later.");
    }
  }
  return (
    <div className="container  mt-2  mx-auto col-10 col-md-4 col-lg-4">
      <center className="mt-5">
        <b>
          <span>LOGIN</span>
        </b>
      </center>
      <form>
        <div className="form-group row"></div>
        <div className="form-outline mb-4 ">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            aria-label="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center"></div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
