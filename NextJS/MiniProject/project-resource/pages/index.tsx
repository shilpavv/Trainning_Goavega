import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ProjectDetails from "./ProjectDetails";

const inter = Inter({ subsets: ["latin"] });
export default function BasicTable() {
  return (
    <div>     
          <ProjectDetails/>
    </div>
  );
}
