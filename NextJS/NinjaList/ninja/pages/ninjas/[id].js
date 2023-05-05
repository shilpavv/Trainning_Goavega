import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
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
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
      // Pass user data to the page via props
    props: { ninja: data },
  };
};
const Details = ({ninja}) => {
  return (
    <>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
       <Link href={'/postid/'+ninja.id}>Post</Link> 
    </>
  )

};

export default Details;
