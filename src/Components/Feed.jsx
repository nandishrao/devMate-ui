import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../Constants/constants";
import { useEffect } from "react";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      const feedData = await res.data;
      dispatch(addFeed(feedData));
    } catch (err) {}
  };
    useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;
  return (
    feed && (
    <div className="flex flex-col items-center">
  <div className="mb-6">
    <h2 className="mb-6 text-lg sm:text-xl font-semibold tracking-wide 
bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 
bg-clip-text text-transparent">
  Send Connection Request
</h2>
  </div>

  <UserCard user={feed[0]} />
</div>

    )
  );
};
export default Feed;
