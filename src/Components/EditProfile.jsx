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
      <div className="flex justify-center-safe ">
        <div className="">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mr-10">
            <legend className="fieldset-legend">Edit Profile</legend>
            <label type="text" className="label">
              First Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="label">last name</label>
            <input
              type="text"
              className="input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <label className="label"> about</label>
            <input
              type="text"
              className="input"
              placeholder="about"
              value={about}
              onChange={(e) => setabout(e.target.value)}
            />
            <label className="label">PhotoURL</label>
            <input
              type="text"
              className="input"
              placeholder="photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <label className="label">Gender</label>
            <input
              type="text"
              className="input"
              placeholder="gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            />
            <label className="label">Age</label>
            <input
              type="number"
              className="input"
              placeholder="Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <button onClick={saveProfile} className="btn btn-neutral mt-4">
              Save Profile
            </button>
          </fieldset>
        </div>
        <UserCard
          user={{ firstName, lastName, gender, about, age, photoURL }}
        />
      </div>
    </>
  );
};
export default EditProfile;
