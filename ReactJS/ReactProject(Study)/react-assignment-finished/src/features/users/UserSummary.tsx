import React from "react";
import { useSnapshot } from "valtio";
import { userStore } from "../../store";

const UserSummary = () => {
  const { selectedUser } = useSnapshot(userStore);
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {selectedUser?.name}</p>
      <p>Email: {selectedUser?.email}</p>
    </div>
  );
};


export default UserSummary;
