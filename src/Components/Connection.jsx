import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/Connectionslice";
import { Link } from "react-router-dom";

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
<div className="
w-full 
bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950
">

  <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="mb-10 text-center">
      <h2 className="
        text-3xl font-bold tracking-tight
        bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400
        bg-clip-text text-transparent
      ">
        Connections
      </h2>

      <p className="mt-2 text-blue-300">
        Developers you are connected with on DevMate
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {connections.map(
        ({ _id, photoURL, firstName, lastName, age, gender, about }) => (
          <div
            key={_id}
            className="
            group overflow-hidden rounded-2xl
            bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950
            border border-indigo-500/20
            shadow-lg shadow-blue-900/40
            hover:shadow-xl hover:shadow-blue-800/50
            hover:-translate-y-1
            transition-all duration-300
            "
          >

            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={photoURL}
                alt={`${firstName} ${lastName}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 text-blue-100">

              <h3 className="text-lg font-semibold truncate text-cyan-200">
                {firstName} {lastName}
              </h3>

              {age && gender && (
                <p className="text-sm text-blue-300 mt-1">
                  {age} • {gender}
                </p>
              )}

              <p className="mt-3 text-sm text-blue-200 leading-relaxed line-clamp-3">
                {about || "No description available."}
              </p>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between">

                <span className="
                  text-xs font-medium
                  text-cyan-300
                  bg-cyan-500/10
                  px-2.5 py-1 rounded-full
                  border border-cyan-400/20
                ">
                  Connected
                </span>

               <Link to ={`/chat/${_id}`} className="
                  text-xs font-medium
                  text-blue-300">
                     <button className="
                  text-sm font-medium
                  text-cyan-300
                  hover:text-cyan-200
                  transition
                ">
                  Chat
                </button>
                  </Link>

              </div>

            </div>
          </div>
        )
      )}
    </div>

  </div>
</div>

 )
};
export default Connections;
