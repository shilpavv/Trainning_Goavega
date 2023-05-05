import React from 'react'
import Post from './Post';
interface Card {
    id: number,
    title: string,
    body: string
}

interface userData {
    id: number,
    name: string,
    username: string,

}
interface Props{
    data:userData | undefined;
}

function UserData(props: Props) {
    console.log(props.data?.id)
    const [post, setpost] = React.useState([])
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + props.data?.id)
            .then((res => res.json()))
            .then(d => {
                //  console.log('data from post', d);
                setpost(d);
            })
    }, [props.data?.id]);


    const card = post.map((item: Card) => {
        return (
            <Post id={item.id} title={item.title} body={item.body} />
        )
    })
    return (
        <div>

            <div>
                {/* <h1>Id:{props.data.id}</h1> */}
                <h3>Name:{props.data?.name}</h3>
                <h3>Username:{props.data?.username}</h3>

            </div>
            {card}
        </div>
    )
}

export default UserData
