import React, { useState } from 'react'
import Comp from './Comp';
import Post from './Post';

type userType = {
  id: number,
  name: string,
  username: string,

}

type PostType = {
  id: number,
 title: string,
 body: string
}

function PostApp() {

  const [users, setUsers] = useState<userType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [user, setUser] = useState<userType>();

  const loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res => res.json()))
    .then((d: userType[]) => {
        setUsers(d);
    })
  }

  const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?=userId="+ user?.id)
    .then((res => res.json()))
    .then((d: PostType[]) => {
        setPosts(d);
    })
  }

  const selectUser = (user: userType) => {
    setUser(user);
    loadPosts();
  }

  React.useEffect(() => {
    loadUsers();  
}, []);


  return (
    <div>
      <h1>Post List App</h1>
<select>
      {users.map(user => (
       <option onClick={() => selectUser(user) } value={user.id}>{user.name}</option> 
      ))}
      </select>
    </div>
  )
}

export default PostApp;

