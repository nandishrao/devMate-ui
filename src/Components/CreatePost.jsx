import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/constants";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    await axios.post(`${BASE_URL}/post`, formData, {
      withCredentials: true,
    });

    setImage(null);
    setCaption("");
    alert("Post uploaded!");
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-slate-800 rounded-lg">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-3"
      />

      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full p-2 rounded bg-slate-900 text-slate-200 mb-3"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-slate-700 py-2 rounded hover:bg-slate-600"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
