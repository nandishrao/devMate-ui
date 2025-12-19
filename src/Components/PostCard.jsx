const PostCard = ({ post }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden mb-6">
      <img src={post.imageUrl} alt="post" className="w-full h-64 object-cover" />

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={post.userId.photoURL}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-slate-200 text-sm">
            {post.userId.firstName} {post.userId.lastName}
          </span>
        </div>

        <p className="text-slate-300 text-sm">{post.caption}</p>
      </div>
    </div>
  );
};
export default PostCard;