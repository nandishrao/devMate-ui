import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../Constants/constants";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [about, setabout] = useState(user.about);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [gender, setgender] = useState(user.gender || "");
  const [age, setage] = useState(user.age || "");
  const [showToast, setshowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          about,
          age,
          photoURL,
          gender,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(addUser(res?.data?.data));
      setshowToast(true);
      setTimeout(() => {
        setshowToast(false);
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
 <>
  {/* Toast */}
  {showToast && (
    <div className="toast toast-top toast-center z-50">
      <div className="
        px-4 py-3 rounded-lg
        bg-gradient-to-r from-indigo-600 to-cyan-500
        text-white shadow-lg
      ">
        Profile saved successfully.
      </div>
    </div>
  )}

  {/* Page Wrapper */}
  <div className="
    max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10
    bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950
  ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      {/* Edit Profile Form */}
      <fieldset className="
        rounded-2xl p-6
        bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950
        border border-indigo-500/20
        shadow-lg shadow-blue-900/40
      ">
        <legend className="
          px-4 text-xl font-semibold text-center
          bg-gradient-to-r from-cyan-400 to-indigo-400
          bg-clip-text text-transparent
        ">
          Edit Profile
        </legend>

        <div className="space-y-4 text-blue-100">

          <div>
            <label className="block text-sm text-blue-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="
                w-full rounded-lg px-3 py-2
                bg-blue-900/60 text-blue-100
                border border-indigo-500/30
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-blue-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="
                w-full rounded-lg px-3 py-2
                bg-blue-900/60 text-blue-100
                border border-indigo-500/30
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-blue-300 mb-1">
              About
            </label>
            <input
              type="text"
              className="
                w-full rounded-lg px-3 py-2
                bg-blue-900/60 text-blue-100
                border border-indigo-500/30
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
              value={about}
              onChange={(e) => setabout(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-blue-300 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              className="
                w-full rounded-lg px-3 py-2
                bg-blue-900/60 text-blue-100
                border border-indigo-500/30
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-300 mb-1">
                Gender
              </label>
              <input
                type="text"
                className="
                  w-full rounded-lg px-3 py-2
                  bg-blue-900/60 text-blue-100
                  border border-indigo-500/30
                  focus:outline-none focus:ring-2 focus:ring-cyan-500
                "
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-blue-300 mb-1">
                Age
              </label>
              <input
                type="number"
                className="
                  w-full rounded-lg px-3 py-2
                  bg-blue-900/60 text-blue-100
                  border border-indigo-500/30
                  focus:outline-none focus:ring-2 focus:ring-cyan-500
                "
                value={age}
                onChange={(e) => setage(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={saveProfile}
            className="
              w-full mt-4 py-2 rounded-lg font-semibold
              bg-gradient-to-r from-indigo-600 to-cyan-500
              text-white
              hover:from-indigo-500 hover:to-cyan-400
              shadow-md shadow-cyan-500/30
              transition
            "
          >
            Save Profile
          </button>
        </div>
      </fieldset>

      {/* Live Preview */}
      <div className="flex justify-center">
        <UserCard
          user={{ firstName, lastName, gender, about, age, photoURL }}
        />
      </div>

    </div>
  </div>
</>


  );
};
export default EditProfile;
