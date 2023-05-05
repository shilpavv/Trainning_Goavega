import Link from "next/link";
const Navbar = () => {
    return ( 
        <nav>
                <div className="link">
                    <Link href="/">Home</Link>
                    <Link href="AddStudent">Add Student</Link>
                    <Link href="students">Student Details</Link>
                </div>
        </nav>
     );
}
export default Navbar;