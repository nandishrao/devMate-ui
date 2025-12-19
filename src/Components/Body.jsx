import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
<div className="min-h-screen flex flex-col 
bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200">

  <header className="sticky top-0 z-50">
    <NavBar />
  </header>

  <main
    className="flex-1 w-full max-w-7xl mx-auto 
    px-4 sm:px-6 lg:px-8 py-8 pb-32"
  >
    <Outlet />
  </main>

  <Footer />
</div>

  );
};


export default Body;
