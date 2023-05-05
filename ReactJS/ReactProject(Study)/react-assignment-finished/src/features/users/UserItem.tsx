import React from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../managers/PostManager";
import { UserManager } from "../../managers/UserManager";
import { User } from "../../models";
import { userStore } from "../../store";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { selectedUser } = useSnapshot(userStore);
  const isSelectedUser = selectedUser?.id === user.id;

  const userClick = () => {
    UserManager.selectUser(user);
  };

  return (
    <li
      className={`list-group-item ${isSelectedUser ? "active" : ""}`}
      onClick={userClick}
    >
      {user.name}
    </li>
  );
};

export default UserItem;
