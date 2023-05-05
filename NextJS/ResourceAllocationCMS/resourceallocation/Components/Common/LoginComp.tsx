import React, { useEffect } from "react";
import { LoginStore } from "../../Handler/AllocationStore";
import { useSnapshot } from "valtio";
import axios from "axios";

export default function LoginComp() {
  const store = useSnapshot(LoginStore);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/loginstatus");
      const jsonData = response.data;
      console.log("data**********", jsonData);
      if (jsonData.ok) {
        console.log("received data", jsonData.user);
        LoginStore.userLoginData = jsonData.user;
      }
    } catch (error) {
      console.error(error);
    }
  };
  async function logout() {
    await fetch("/api/logout")
      .then((response) => {
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <h5 style={{ textAlign: "end", width: "100%", paddingRight:'1%'  }}>
        {store?.userLoginData?.email}
      </h5>
      {store?.userLoginData?.email ? (
        <button type="button" className="btn btn-outline-info" onClick={logout}>
          Logout
        </button>
      ) : null}
    </>
  );
}
