import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, photoURL, age, gender, about } = user;
  const handelSendRequests = async (status, userId) => {
    const res = axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(removeFeed(userId));
  };
  return (
<div className="
w-full max-w-sm mx-auto overflow-hidden rounded-2xl
bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950
border border-indigo-500/20
shadow-lg shadow-blue-900/40
hover:shadow-xl hover:shadow-blue-800/50
transition-all duration-300
">

  {/* Image */}
  <div className="relative h-44 overflow-hidden">
    <img
      src={photoURL}
      alt={`${firstName} ${lastName}`}
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent"></div>
  </div>

  {/* Content */}
  <div className="p-5 space-y-3 text-center sm:text-left text-blue-100">

    {/* Name */}
    {firstName && lastName && (
      <h2 className="text-lg font-semibold truncate text-cyan-200">
        {firstName} {lastName}
      </h2>
    )}

    {/* Meta */}
    {age && gender && (
      <p className="text-sm text-blue-300">
        {age} • {gender}
      </p>
    )}

    {/* Skills */}
    {user.skills?.length > 0 && (
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
        {user.skills.map((skill, idx) => (
          <span
            key={idx}
            className="
            px-2.5 py-1 text-xs font-medium rounded-full
            bg-indigo-500/15 text-cyan-300
            border border-indigo-400/30
            ">
            {skill}
          </span>
        ))}
      </div>
    )}

    {/* About */}
    <p className="text-sm text-blue-200 leading-relaxed line-clamp-3">
      {about || "No description available."}
    </p>

    {/* Actions */}
    <div className="flex gap-3 pt-4">

      <button
        type="button"
        onClick={() => handelSendRequests("ignored", _id)}
        className="
        flex-1 rounded-lg py-2 text-sm font-medium
        border border-blue-400/30 text-blue-200
        hover:bg-blue-900/60
        transition
        ">
        Ignore
      </button>

      <button
        type="button"
        onClick={() => handelSendRequests("interested", _id)}
        className="
        flex-1 rounded-lg py-2 text-sm font-medium
        bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500
        text-white
        hover:from-indigo-500 hover:to-cyan-400
        shadow-md shadow-cyan-500/30
        transition
        ">
        Interested
      </button>

    </div>

  </div>
</div>

  );
};
export default UserCard;
