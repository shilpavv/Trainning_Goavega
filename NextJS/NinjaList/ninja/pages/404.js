import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
                router.push('/');
        },3000)
    },[])
    return ( 
        <div className="notfound">
            <h1>Ooops...</h1>
            <div>The page cannot be found</div>
            <div>Go back to <Link href="/">HomePage</Link></div>
        </div>
     );
}
 
export default NotFound;