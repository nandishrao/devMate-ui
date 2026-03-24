import { useParams } from "react-router-dom";
import { socketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useState, useEffect, use } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/constants";

const Chat = () => {
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const firstName = user?.firstName;
  const { toTargetUser } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState();
  const [targetUser, setTargetUser] = useState(null);

  const fetchMessages = async () => {
    const chat = await axios.get(BASE_URL +"/chats/" + toTargetUser, { withCredentials: true });
     const otherUser = chat.data.participants.find(
    (p) => p._id !== userId
  );

  setTargetUser(otherUser);
    const chatMessages = chat?.data?.messages?.map((msg) => {
      return {
        firstName: msg.senderId.firstName,
        lastName: msg.senderId.lastName,
        text: msg.text,
      };
    });
    setMessages(chatMessages);
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const socket = socketConnection();
    socket.emit("joinChat", { firstName, userId, toTargetUser });

    socket.on("receiveMessage", (message) => {
      console.log("New message received:", message);
    });

    socket.on("receivedMessage", ({ firstName, text }) => {
      console.log(`Message from ${firstName}: ${text}`);
      setMessages((prevMessages) => [...prevMessages, { firstName, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [userId, toTargetUser]);

  const sendMessage = () => {
    if (!newMessages) return;
    const socket = socketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      toTargetUser,
      text: newMessages,
    });
    setNewMessages("");
  };
;
  return (
    <div className="h-screen w-full bg-[#0b0f14] flex items-center justify-center px-4">
      <div
        className="
        w-full max-w-4xl h-[90vh]
        flex flex-col
        rounded-2xl
        bg-[#0f172a]
        border border-white/10
        shadow-2xl shadow-black/60
        overflow-hidden
      "
      >
        <div
          className="
          flex items-center gap-4
          px-6 py-4
          border-b border-white/10
          bg-[#0b1220]
        "
        >
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-cyan-400/30">
              <img src="https://i.pravatar.cc/150?img=32" alt="User" />
            </div>
          </div>

          <div>
           <h3>
  {targetUser ? `${targetUser.firstName} ${targetUser.lastName}` : "Loading..."}
</h3>
            <p className="text-xs text-emerald-400">Online</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          
          {messages.map((msg, index) => {
            return (
             <div className={`flex ${user.firstName === msg.firstName ? "justify-end" : "justify-start"} mb-2`}>
  <div
    className={`max-w-md px-4 py-3 rounded-2xl ${
      user.firstName === msg.firstName
        ? "bg-cyan-500/90 text-slate-900"
        : "bg-slate-200 text-slate-900"
    }`}
  >
    {!user.firstName === msg.firstName && (
      <span className="block text-xs text-slate-600 mb-1">
        {msg.firstName}
      </span>
    )}

    <p className="text-sm leading-relaxed font-medium">
      {msg.text}
    </p>
  </div>
</div>
            );
          })}
        </div>
        <div
          className="
          px-6 py-4
          border-t border-white/10
          bg-[#0b1220]
        "
        >
          <div className="flex items-center gap-4">
            <input
              value={newMessages}
              onChange={(e) => setNewMessages(e.target.value)}
              type="text"
              placeholder="Type a message..."
              className="
                w-full px-4 py-2 rounded-xl
                bg-[#020617]
                text-slate-200
                placeholder:text-slate-500
                border border-white/10
                focus:outline-none
                focus:ring-2 focus:ring-cyan-400/40
              "
            />
            <button
              onClick={sendMessage}
              className="
              px-6 py-2 rounded-xl
              bg-cyan-500
              text-slate-900 font-semibold
              hover:bg-cyan-400
              transition
            "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
