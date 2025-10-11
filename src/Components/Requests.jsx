import { useEffect } from "react";
import { BASE_URL } from "../Constants/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/showInterested", {
      withCredentials: true,
    });
    dispatch(addRequests(res.data.connectionRequest));
    console.log(res.data.connectionRequest);
  };
  useEffect(() => {
    if (requests) return;
    fetchRequests();
  }, []);
  if (!requests)
    return (
      <div className="font-bold text-xl text-center">
        No Connection Requests
      </div>
    );
  return (
    <>
      <div className="font-bold text-xl text-center">Connection Requests</div>
      <div className="flex flex-wrap justify-center gap-6 px-5">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoURL, age, gender, about } =
            request.fromUserId;
          return (
            <div
              key={_id}
              className="card w-64 bg-base-200 border border-white/10 shadow-lg hover:shadow-white/20 transition-all duration-300 rounded-2xl overflow-hidden mt-20 items-center"
            >
              <figure className="relative h-40 bg-base-300">
                <img
                  src={photoURL}
                  alt={`${firstName} ${lastName}`}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body p-4 text-left">
                <h2 className=" font-semibold text-white truncate">
                  {firstName} {lastName}
                </h2>
                <p>
                  {age} {gender}
                </p>
               <div className="flex">
                 <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Ignore
                </button>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
