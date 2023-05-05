import Link from "next/link";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: 
        {
             post: data 
            }
      }
    }
const Post = ({post}) => {
    return (
        post.slice(0,10).map((post)=>{
                return(
                    <>
                     <div key={post.id}>
                        <Link href={`posts/${post.id}`}>Post</Link>
                        <h1>{post.id}</h1>
                     <div>{post.title}</div>
                     </div>
                    
                    </>
                   
                )
        })
       
      );
}
 
export default Post;