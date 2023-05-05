import React from 'react';
import { UserManager } from '../../manager/userManager';
import { userStore } from '../../store';
import { useSnapshot } from 'valtio'
import UserItem from './UserItem';

const UserList=()=> {
     const {users} = useSnapshot(userStore);
    const loadUser =async () => {
        await UserManager.getAll();
    }
   React.useEffect(()=>{
        loadUser();
    },[]);
  return (
    <div>
      <h1>User</h1>
      <ul>
         {users.map((u)=>(
          <UserItem user={u}/>
         ))}
      </ul>
    </div>
  );
};
export default UserList


