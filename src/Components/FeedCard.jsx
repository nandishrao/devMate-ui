const FeedCard =({user})=>{

    const {firstName , lastName , about } = user
    return (
        <div className="card bg-base-100 w-72 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {firstName} 
      <div className="badge badge-secondary">{lastName}</div>
    </h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    )

}
export default FeedCard