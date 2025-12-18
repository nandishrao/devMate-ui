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
  {showToast && (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>Profile saved successfully.</span>
      </div>
    </div>
  )}

  <div className="w-full overflow-x-auto snap-x snap-mandatory flex scroll-smooth scrollbar-none py-2 px-4 gap-6">
    {/* Slide 1 — Edit Profile Form */}
    <div className="snap-center flex-shrink-0 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] mx-auto">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300">
        <legend className="fieldset-legend text-lg sm:text-xl font-semibold mb-2 text-center">
          Edit Profile
        </legend>

        <label className="label text-sm sm:text-base">First Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="label text-sm sm:text-base mt-3">Last Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />

        <label className="label text-sm sm:text-base mt-3">About</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="About"
          value={about}
          onChange={(e) => setabout(e.target.value)}
        />

        <label className="label text-sm sm:text-base mt-3">Photo URL</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <label className="label text-sm sm:text-base mt-3">Gender</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        />

        <label className="label text-sm sm:text-base mt-3">Age</label>
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />

        <button
          onClick={saveProfile}
          className="btn btn-neutral mt-6 w-full sm:w-auto"
        >
          Save Profile
        </button>
      </fieldset>
    </div>

    {/* Slide 2 — User Preview Card */}
    <div className="snap-center flex-shrink-0 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[35%] mx-auto flex justify-center items-start">
      <UserCard
        user={{ firstName, lastName, gender, about, age, photoURL }}
      />
    </div>
  </div>
</>

  );
};
export default EditProfile;
