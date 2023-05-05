import React from 'react'
import Post from './Post';

function UserData(props) {
  console.log(props.data.id)
  const [post, setpost] = React.useState([])
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + props.data.id)
        .then((res => res.json()))
        .then(d => {
            //  console.log('data from post', d);
             setpost(d);
        })
}, [props.data.id]);
const card=post.map((item)=>{
  return(
    <Post id={item.id} title={item.title} body={item.body}/>
  )
})
  return (
    <div>
    <div>
      <h3>Id:{props.data.id}</h3>
      <h3>Name:{props.data.name}</h3>
      <h3>Username:{props.data.username}</h3>
      
    </div>
      {card}
    </div>
  )
}

export default UserData
