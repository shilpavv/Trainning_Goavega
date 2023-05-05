import React, { useEffect } from "react";
import { UserManager } from "../../managers/UserManager";
import { useSnapshot } from "valtio";
import { userStore } from "../../store";
import UserItem from "./UserItem";
const UserList = () => {
  const { users } = useSnapshot(userStore);
  const loadUsers = async () => {
    await UserManager.getAll();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        {users.map((u) => (
          <UserItem user={u} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
