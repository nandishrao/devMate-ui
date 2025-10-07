import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../Constants/constants";
import { useEffect } from "react";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      const feedData= await res.data
      dispatch(addFeed(feedData));
      
    } catch (err) {
      
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
   feed && <div className="flex justify-center"><FeedCard user={feed[0]}/></div>
  )
};
export default Feed;
