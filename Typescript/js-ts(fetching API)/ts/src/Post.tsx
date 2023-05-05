
type PostType = {
  id: number,
 title: string,
 body: string
}
function Post(props: PostType) {
  return(
    <div>
    {/* <h3>{props.id}</h3>
    <h2>{props.title}</h2>
    <h2>{props.body}</h2> */}
  </div>
)}

export default Post
