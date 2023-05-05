import React from "react";
import { useSnapshot } from "valtio";
import { UserManager } from "../../manager/UserManger";
import { userType } from '../../model';
import { userStore } from "../../store";
interface UserItemProps {
     user: userType;
}
function UserItem({ user }: UserItemProps) {
  const { selecteduser } = useSnapshot(userStore);
  //bootstrap
  const isSelectedUser = selecteduser?.id === user.id;
  function clickUser() {
    UserManager.selectuser(user);
    console.log("clicked");
  }
  return (
    //bootstrap
    <div className={`list-group-item ${isSelectedUser ? "active" : ""}`} onClick={clickUser} >
      {user.name}
    </div>
  );
}
export default UserItem;
