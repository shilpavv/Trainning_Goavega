import Loading from "./features/common/Loading";
import PostList from "./features/posts/PostList";
import UserList from "./features/users/UserList";
import UserSummary from "./features/users/UserSummary";
import { Routes, Route, Link } from "react-router-dom";
import PostScreen from "./features/posts/PostScreen";

const Home = () => {
  return <h1>Home Screen</h1>;
};

export default function App() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostScreen />} />
      </Routes>
    </div>
  );
}
