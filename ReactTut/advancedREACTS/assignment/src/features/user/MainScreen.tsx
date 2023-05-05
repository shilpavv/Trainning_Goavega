import React from 'react'
import PostList from '../post/PostList';
import UserDetails from './UserDetails';
import UserList from './UserList';
const MainScreen=()=> {
  return (
    <div>
      <div className="row">
      <div className="col-md-4 list-group">
          <UserList />
        
          <UserDetails />
        </div>
        <div className="col-md-8">
          <PostList />
        </div>
      </div>
    </div>
  )
}
export default MainScreen;
