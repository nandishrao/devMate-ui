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
    return (
      <h1 className="flex justify-center my-10 font-bold">
        {" "}
        No Requests Found
      </h1>
    );
  return (
    <>
      <div className="font-bold text-xl text-center mb-6 text-base-content">
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
              className="snap-center flex-shrink-0 w-64 bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <figure className="relative h-40 bg-base-300">
                <img
                  src={photoURL}
                  alt={`${firstName} ${lastName}`}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="p-4 space-y-1">
                {/* Name */}
                <h2 className="font-semibold truncate text-base-content">
                  {firstName} {lastName}
                </h2>

                {/* Meta */}
                <p className="text-sm text-base-content/70">
                  {age} • {gender}
                </p>

                {/* About */}
                <p className="text-xs text-base-content/60 line-clamp-2">
                  {about || "No description available"}
                </p>

                {/* Actions */}
                <div className="flex justify-between mt-3">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-neutral"
                  >
                    Ignore
                  </button>

                  <button
                    type="button"
                    onClick={() => handelReview("accepted", request._id)}
                    className="btn btn-sm btn-primary"
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
