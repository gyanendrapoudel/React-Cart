const SingleItem = ({name,img ,id}) => {
  return (
    <div className="single-item">
      <div className="item-description">
        <img src="" alt="img" />
        <div className="description">
          <p>Price</p>
          <button className="btn">remove</button>
        </div>
      </div>
      <div className="number">
        <i>icon1</i>
         <div>number</div>
        <i>icon2</i>
      </div>
    </div>
  )
}
export default SingleItem