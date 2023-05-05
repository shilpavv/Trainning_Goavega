import React from 'react'
import Comp from './Comp';
import UserData from './UserData';


function List() {
    const [users, setuser] = React.useState([])
    const [selectedvalue, setselectedvalue] = React.useState()
    const [userData, setuserData] = React.useState([])
  

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res => res.json()))
            .then(data => setuser(data))

    }, []);
    React.useEffect(() => {
        console.log('selectedvalue', selectedvalue);
        fetch("https://jsonplaceholder.typicode.com/users/" + selectedvalue)
            .then((res => res.json()))
            .then(data => {
                console.log('data from particularuser', data)
                setuserData(data);
            })
    }, [selectedvalue]);


    return (
        <div>
            
            <div className='dropdown' >
                <select  onChange={e => {
                    console.log('(e.target.value', e.target.value);
                    setselectedvalue(e.target.value);
                }}>

                    {users.map((user) => {
                        return (
                            <Comp id={user.id} />
                        )
                    })}
                </select>
                <UserData data={userData} />
            </div>
        </div>
    )
}

export default List;
