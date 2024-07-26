import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaArrowCircleDown } from 'react-icons/fa'
const SingleItem = ({ name, img, id }) => {
  return (
    <div className="single-item">
      <div className="item-description">
        <img
          src="https://www.course-api.com/images/cart/phone-1.png"
          alt="img"
        />
        <div className="description">
          <p>Name</p>
          <p>Price</p>
          <button className="btn">remove</button>
        </div>
      </div>
      <div className="number">
        <FaArrowAltCircleUp className="icons" />
        <div>1</div>
        <FaArrowCircleDown className="icons" />
      </div>
    </div>
  )
}
export default SingleItem
