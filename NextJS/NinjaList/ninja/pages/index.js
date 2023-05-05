import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
         <meta name="keywords" content=""/>
    </Head>
    <div >
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    
    </div>
    </>
    
  );
}
