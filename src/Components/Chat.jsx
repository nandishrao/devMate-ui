import { useParams } from "react-router-dom";

const Chat = () => {
    const toTargetUser = useParams();
  return (
   <div className="h-screen w-full bg-[#0b0f14] flex items-center justify-center px-4">

      {/* Chat Container */}
      <div className="
        w-full max-w-4xl h-[90vh]
        flex flex-col
        rounded-2xl
        bg-[#0f172a]
        border border-white/10
        shadow-2xl shadow-black/60
        overflow-hidden
      ">

        {/* Header */}
        <div className="
          flex items-center gap-4
          px-6 py-4
          border-b border-white/10
          bg-[#0b1220]
        ">
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-cyan-400/30">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="User"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Connected Developer
            </h3>
            <p className="text-xs text-emerald-400">
              Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

          {/* Incoming */}
          <div className="flex justify-start">
            <div className="
              max-w-md px-4 py-3 rounded-2xl
              bg-[#111827]
              text-slate-200
              border border-white/5
            ">
              <p className="text-sm leading-relaxed">
                Hey! I checked your DevMate profile. Are you building with MERN?
              </p>
              <span className="block text-xs text-slate-400 mt-1">
                10:15 AM
              </span>
            </div>
          </div>

          {/* Outgoing */}
          <div className="flex justify-end">
            <div className="
              max-w-md px-4 py-3 rounded-2xl
              bg-cyan-500/90
              text-slate-900
            ">
              <p className="text-sm leading-relaxed font-medium">
                Yes! DevMate is built with MERN + Redux 🚀
              </p>
              <span className="block text-xs text-slate-800 mt-1 text-right">
                10:16 AM
              </span>
            </div>
          </div>

          {/* Incoming */}
          <div className="flex justify-start">
            <div className="
              max-w-md px-4 py-3 rounded-2xl
              bg-[#111827]
              text-slate-200
              border border-white/5
            ">
              <p className="text-sm leading-relaxed">
                Nice. Would love to collaborate sometime.
              </p>
              <span className="block text-xs text-slate-400 mt-1">
                10:17 AM
              </span>
            </div>
          </div>

        </div>

        {/* Input */}
        <div className="
          px-6 py-4
          border-t border-white/10
          bg-[#0b1220]
        ">
          <div className="flex items-center gap-4">
            <input
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
            <button className="
              px-6 py-2 rounded-xl
              bg-cyan-500
              text-slate-900 font-semibold
              hover:bg-cyan-400
              transition
            ">
              Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;
