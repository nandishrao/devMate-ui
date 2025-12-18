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
   <div className="card w-[90%] sm:w-72 md:w-80 lg:w-96 bg-base-200 shadow-lg shadow-white/10 hover:shadow-white/20 transition-shadow duration-300 border border-white/10 rounded-2xl overflow-hidden mx-auto">
  <figure className="h-44 sm:h-48 bg-base-300">
    <img
      src={photoURL}
      alt={`${firstName} ${lastName}`}
      className="w-full h-full object-cover"
    />
  </figure>

  <div className="card-body p-4 sm:p-5 space-y-2 text-center sm:text-left">
    {firstName && lastName && (
      <h2 className="font-bold text-lg sm:text-xl text-white">
        {firstName + " " + lastName}
      </h2>
    )}

    {age && gender && (
      <p className="text-sm sm:text-base text-gray-400 font-medium">
        {age + ", " + gender}
      </p>
    )}

    {user.skills?.length > 0 && (
      <div className="flex flex-wrap justify-center sm:justify-start gap-1 mt-2">
        {user.skills.map((skill, idx) => (
          <span
            key={idx}
            className="badge badge-outline text-xs sm:text-sm font-medium px-2 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    )}

    <p className="text-sm sm:text-base text-gray-300 leading-snug mt-2 line-clamp-3">
      {about}
    </p>

    <div className="card-actions flex flex-col sm:flex-row justify-center gap-3 mt-4">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto"
        onClick={() => handelSendRequests("ignored", _id)}
      >
        Ignore
      </button>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto"
        onClick={() => handelSendRequests("interested", _id)}
      >
        Interested
      </button>
    </div>
  </div>
</div>

  );
};
export default UserCard;
