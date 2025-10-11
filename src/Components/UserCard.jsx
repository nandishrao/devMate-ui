const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoURL, age, gender, about } = user;
  return (
    <div className="card w-72 h-[60%] bg-base-200 shadow-lg shadow-white/10 hover:shadow-white/20 transition-shadow duration-300 border border-white/10 rounded-2xl overflow-hidden">
      <figure className="h-48 bg-base-300">
        <img src={photoURL} alt={`${firstName} ${lastName}`} className="h-40" />
      </figure>

      <div className="card-body p-4 space-y-2">
        {" "}
        {firstName && lastName && (
          <h2 className="font-bold">{firstName + " " + lastName}</h2>
        )}
        {age && gender && <p>{age + ", " + gender}</p>}
        {user.skills?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {user.skills.map((skill, idx) => (
              <span
                key={idx}
                className="badge badge-outline text-xs font-medium px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-300 leading-snug mt-1">{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Ignore
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
