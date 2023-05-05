import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props{
    children:any
}
const Layout = ({children}:any) => {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
      );
}
export default Layout;