export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map((post) => {
        return {
          params: { postid: `${post.id}`},
        };
      });
      // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
      paths,
      fallback: false,
    };
  };

export const getStaticProps = async (context) => {
    const {params}=context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.Postid}`);
    const data = await res.json();
    return {
        props: 
        {
             post: data }
      }
    }

const Postid = ({post}) => {
    return (  
        <>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        </>
    );
}
 
export default Postid;