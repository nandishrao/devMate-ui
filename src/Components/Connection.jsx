import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/Connectionslice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async (req, res) => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      const data = res.data.data;
      dispatch(addConnections(data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchConnections();
   
  }, []);
  if(!connections) return;
  if(connections.length === 0) return <div className="font-extrabold text-center mt-10  ">No Connections</div>    
  return (
  <div className="text-center py-10 px-4 sm:px-6 md:px-10">
  <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">Connections</h2>

  <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 md:gap-10 pb-6 px-4 scroll-smooth scrollbar-none">
    {connections.map(({ _id, photoURL, firstName, lastName, age, gender, about }) => (
      <div
        key={_id}
        className="snap-center flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%] mx-auto card bg-base-200 border border-white/10 shadow-lg hover:shadow-white/20 transition-all duration-300 rounded-2xl overflow-hidden"
      >
        <figure className="relative h-44 sm:h-48 md:h-52 bg-base-300">
          <img
            src={photoURL}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body p-5 text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
            {firstName} {lastName}
          </h2>

          {age && gender && (
            <p className="text-sm sm:text-base text-gray-400 font-semibold">
              {age}, {gender}
            </p>
          )}

          <p className="text-sm sm:text-base text-gray-300 mt-2 line-clamp-3">
            {about || "No description available."}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

 )
};
export default Connections;
