const FeedCard =({user})=>{

    const {firstName , lastName , about, photoURL } = user
    return (
        <div className="card bg-base-300 w-72 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
  <figure>
    <img
      src={photoURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {firstName} 
      <div className="badge badge-secondary">{lastName}</div>
    </h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Interested</div>
      <div className="badge badge-outline">Ignore</div>
    </div>
  </div>
</div>
    )

}
export default FeedCard