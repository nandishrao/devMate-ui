import { useEffect } from "react";
import { BASE_URL } from "../Constants/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const handelReview = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(_id));
    } catch (err) {}
  };
  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/showInterested", {
      withCredentials: true,
    });
    dispatch(addRequests(res.data.connectionRequest));
  };
  useEffect(() => {
    fetchRequests();
  }, []);
 if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10 font-bold"> No Requests Found</h1>;
  return (
    <>
  <div className="font-bold text-xl text-center mb-6">
    Connection Requests
  </div>

  {/* Carousel container */}
  <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-6 py-4 scrollbar-none">
    {requests.map((request) => {
      const { _id, firstName, lastName, photoURL, age, gender, about } =
        request.fromUserId;

      return (
        <div
          key={_id}
          className="snap-center flex-shrink-0 w-64 bg-base-200 border border-white/10 shadow-lg hover:shadow-white/20 transition-all duration-300 rounded-2xl overflow-hidden items-center"
        >
          <figure className="relative h-40 bg-base-300">
            <img
              src={photoURL}
              alt={`${firstName} ${lastName}`}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="card-body p-4 text-left">
            <h2 className="font-semibold text-white truncate">
              {firstName} {lastName}
            </h2>
            <p className="text-sm opacity-80 mb-2">
              {age} {gender}
            </p>
            <p className="text-xs text-gray-400 line-clamp-2">{about}</p>

            <div className="flex justify-between mt-3">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 transition"
              >
                Ignore
              </button>
              <button
                type="button"
                onClick={() => handelReview("accepted", request._id)}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</>
  );
};
export default Requests;
