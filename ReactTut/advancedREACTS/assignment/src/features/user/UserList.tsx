import React from 'react';
import { UserManager } from '../../manager/UserManger';
import { userStore } from '../../store';
import { useSnapshot } from 'valtio';
import UserItem from './UserItem';

const UserList=()=> {
     const {users} = useSnapshot(userStore);
     console.log(users)
    const loadUser =async () => {
        await UserManager.getAll();
    }
   React.useEffect(()=>{
        loadUser();
    },[]);
  return (
    <div>
      <h1>User</h1>
      <ul className="list-group">
         {users.map((u)=>(
          <UserItem user={u}/>
         ))}
      </ul>
    </div>
  );
};
export default UserList


