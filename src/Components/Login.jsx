import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../Constants/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [error, setError] = useState("");
  const [showToast, setshowToast] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandelLoginState = () => {
    setLogin(!login);
    setError("");
  };

  const HandelLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handelSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      setshowToast(true);
      navigate("/profile");
      setTimeout(() => setshowToast(false), 2000);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="px-3 py-1.5 rounded bg-slate-700 text-slate-100 text-sm shadow">
            Signed up successfully
          </div>
        </div>
      )}

      {/* Login Card */}
      <div className="flex justify-center mt-12 px-4">
        <fieldset
          className="
          w-full max-w-xs
          rounded-lg border border-slate-700
          bg-slate-800/80 backdrop-blur
          p-4 shadow-md
          "
        >
          <legend className="text-center text-base font-semibold text-slate-200">
            {login ? "Sign Up" : "Login"}
          </legend>

          {login && (
            <>
              <label className="block text-xs text-slate-300 mt-2">
                First Name
              </label>
              <input
                className="w-full mt-1 rounded bg-slate-900 border border-slate-600 px-2 py-1.5 text-sm"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />

              <label className="block text-xs text-slate-300 mt-3">
                Last Name
              </label>
              <input
                className="w-full mt-1 rounded bg-slate-900 border border-slate-600 px-2 py-1.5 text-sm"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </>
          )}

          <label className="block text-xs text-slate-300 mt-3">
            Email
          </label>
          <input
            className="w-full mt-1 rounded bg-slate-900 border border-slate-600 px-2 py-1.5 text-sm"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-xs text-slate-300 mt-3">
            Password
          </label>
          <input
            type="password"
            className="w-full mt-1 rounded bg-slate-900 border border-slate-600 px-2 py-1.5 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="mt-2 text-xs text-red-400">{error}</p>
          )}

          <button
            onClick={login ? handelSignUp : HandelLogin}
            className="mt-4 w-full rounded bg-slate-700 py-1.5 text-sm hover:bg-slate-600"
          >
            {login ? "Sign Up" : "Login"}
          </button>

          <p
            onClick={HandelLoginState}
            className="text-center mt-3 text-xs text-slate-400 cursor-pointer hover:underline"
          >
            {login ? "Already a user? Login" : "New user? Sign up"}
          </p>
        </fieldset>
      </div>
    </>
  );
};

export default Login;
