import { useState } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../Constants/constants";
import { useNavigate } from "react-router-dom";
// import Feed from "./Feed";
const Login = () => {
  const [login, setLogin] = useState(false);
  const [emailId, setEmail] = useState("lamine@gmail.com");
  const [error , setError]=useState("")
  const [password, setPassword] = useState("Password@123");
  const dispatch = useDispatch();
  const HandelLoginState = () => {
    setLogin(!login);
  };
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const HandelLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data)
      console.log(err.message);
    }
  };
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ml-[38%]">
      <legend className="fieldset-legend">{login ? "Sign In" : "Login"}</legend>

      <label type="text" className="label">
        {login ? "Enter new mail" : "Enter mail"}
      </label>
      <input
        type="email"
        className="input"
        placeholder="Email"
        value={emailId}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="label">{login ? "New Password" : "Password"}</label>
      <input
        type="password"
        className="input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<p className="text-red-700 font-bold">{error}</p>
      <button onClick={HandelLogin} className="btn btn-neutral mt-4">
        {login ? "Sign Up" : "Login"}
      </button>
      <p onClick={HandelLoginState} className="cursor-pointer fieldset-legend">
        {login ? " Already a User? Login" : "New User? Sign UP"}
      </p>
    </fieldset>
  );
};
export default Login;
