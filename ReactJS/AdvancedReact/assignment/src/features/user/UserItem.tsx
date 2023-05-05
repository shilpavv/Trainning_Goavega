import React from "react";
import { userType } from '../../model';

interface UserItemProps {
  user: userType;
}
const UserItem=({user}: UserItemProps) =>{
  return (
      <li>
        {user.name}
      </li>
    );
};

export default UserItem;
