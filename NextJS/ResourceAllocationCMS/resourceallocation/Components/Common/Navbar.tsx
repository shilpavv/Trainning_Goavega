import React from "react";
import { sidebarItems } from "./SidebarData/sidebarData";
import dynamic from "next/dynamic";
const LoginCompNoSSR = dynamic(() => import("../Common/LoginComp"), {
  ssr: false,
});
type Props = {};
export default function Navbar(props: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-white bg-primary">
        <div className="container-fluid ">
          <b>
            <svg
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasWithBothOptions"
              style={{ cursor: "pointer", marginLeft: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </b>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ width: "100%" }}
            >
              <li
                className="nav-item"
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <a
                  className="nav-link active navbar-brand text-white"
                  style={{ marginLeft: "20px" }}
                  aria-current="page"
                >
                  <b>Resource Allocation</b>
                </a>
              </li>
            </ul>
                <LoginCompNoSSR />
          </div>
        </div>
      </nav>
      <div
        style={{ width: "260px" }}
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="true"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >

        <div className="list-group">
          <div className="container mt-5" style={{ cursor: "pointer" }}>
            {sidebarItems.map((item) => (
              <a href={item.route} style={{ textDecoration: "none" }}>
                <div
                  className="list-group-item list-group-item-action border-0 rounded"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                  <span style={{ marginLeft: "20px" }}>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
