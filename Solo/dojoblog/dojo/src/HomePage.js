import React from "react";
import BlogList from "./BlogList";
    import useFetch from "./useFetch";

const HomePage = () => {
    //usefetch hook
  const { data: blogs ,error, isPending, } = useFetch('http://localhost:8000/blogs')


  //useEffect
//     const [blogs,setBlogs]=React.useState(null);
//     const [isPending,setIsPending]=React.useState(true)
//     const [error,seterror]=React.useState()
   
//    React. useEffect(() => {
//         setTimeout(() => {
//           fetch('http://localhost:8000/blogs')
//           .then(res => {
//             // console.log(res);
//             if(!res.ok){
//                 throw Error("could not fetch tha data of this resource")
//             }
//             return res.json();
//           })
//           .then(data => {
//             setIsPending(false);
//             setBlogs(data);
//             seterror(null)
//           })
//           .catch((err)=>{
//             setIsPending(false)
//            seterror(err.message)
//           })
//         }, 1000);
//       }, [])
    
    return ( 
        <div>
            <h1>HomePage</h1>
            {error && <div>{error}</div>}
            {isPending && <div>loading.....</div>}
          {blogs &&<BlogList blogs={blogs} title="all blog" />}
          {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
        
     );
}
 
export default HomePage;