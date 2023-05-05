import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={100} height={50}/>
            </div>
            <div className="link">
            <Link href="/">Home</Link>
            <Link href="About">About</Link>
            <Link href="ninjas">Ninja Listing</Link>
            </div> 
        </nav>
     );
}
 
export default Navbar;