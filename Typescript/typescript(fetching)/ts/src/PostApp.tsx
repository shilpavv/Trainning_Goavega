import React, { useState } from 'react';
import UserDetails from './UserDetails';

export type userType = {
    id: number,
    name: string,
    username: string,

}
export type PostType = {
    id: number,
    title: string,
    body: string
}
function PostApp() {

    const [users, setUsers] = useState<userType[]>([]);
    const [posts, setPosts] = useState<PostType[]>([]);
    const [user, setUser] = useState<userType[]>([]);
    const [userid, setuserid] = useState<String>();
    //load single user
    const loadUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res => res.json()))
            .then((data: userType[]) => {
                console.log('data from particular user', data)
                setUsers(data);
            })
    }
    //User DETAILS
    const loadUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users?id=" + userid)
            .then((res => res.json()))
            .then(d => {
                setUser(d);
            })
    }
    //POST
    const loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userid)
            .then((res => res.json()))
            .then((d: PostType[]) => {
                console.log('data from particular post', d)
                setPosts(d);

            })
    }
    // const selectUser = (user: userType) => {
    //     console.log(selectUser)
    //     setUser(user);
    //     loadPosts();
    // }
    React.useEffect(() => {
        loadUsers();

    }, []);

    React.useEffect(() => {
        loadUser();
        loadPosts();
    }, [userid]);
    return (
        <div>
            <h1>Post List App</h1>
            <select onChange={(e) => {
                console.log("clicked", e.target.value)
                setuserid(e.target.value);
            }}>
                {users.map(user => (
                    <option
                        value={user.id} key={user.id}>{user.name} </option>
                ))}
            </select>
            <UserDetails user={user} />
        </div>
    )
}
export default PostApp;
