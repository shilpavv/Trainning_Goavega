import React from "react";
import Loading from "../common/Loading";
import UserList from "../users/UserList";
import UserSummary from "../users/UserSummary";
import PostList from "./PostList";

const PostScreen = () => {
  return (
    <div>
      <div className="row">
        <Loading />
        <div className="col-md-4">
          <UserList />
        </div>
        <div className="col-md-8">
          <UserSummary />
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default PostScreen;
