import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../Constants/constants";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {}
  };
  return (
<div className="navbar bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-900 text-white shadow-xl px-6">

  <div className="flex-1">
    <Link
      to="/"
      className="text-2xl font-extrabold tracking-tight flex items-center gap-1 hover:opacity-90 transition"
    >
      <span>Dev</span>
      <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
        Mate
      </span>
    </Link>
  </div>

  {user && (
    <div className="flex items-center gap-5">

      <p className="hidden lg:block text-sm text-slate-300">
        Welcome back,{" "}
        <span className="font-semibold text-white">
          {user.firstName}
        </span>
      </p>

      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar hover:scale-105 transition"
        >
          <div className="w-11 rounded-full ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900">
            <img src={user.photoURL} alt="User avatar" />
          </div>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-56 rounded-xl bg-slate-900 text-slate-200 shadow-2xl p-2 z-[100]"
        >
          <li>
            <Link to="/profile" className="hover:bg-slate-800">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/connections" className="hover:bg-slate-800">
              Connections
            </Link>
          </li>

          <li>
            <Link to="/requests" className="hover:bg-slate-800">
              Requests
            </Link>
          </li>

          <li>
            <Link
              to="/premium"
              className="font-semibold text-sky-400 hover:bg-slate-800"
            >
              👑 Premium <span className="badge badge-info ml-2">New</span>
            </Link>
            
          </li>

          <div className="divider my-1"></div>

          <li>
            <button
              onClick={handleLogout}
              className="text-red-600  hover:bg-red-900/30 font-bold"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )}
</div>


  );
};
export default NavBar;
