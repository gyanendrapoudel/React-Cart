import { useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaArrowCircleDown } from 'react-icons/fa'
const SingleItem = ({ name, img, id }) => {
   const [count, setCount]=useState(1)
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
        <FaArrowAltCircleUp className="icons" onClick={()=>setCount(count+1)} />
        <div>{count}</div>
        <FaArrowCircleDown className="icons" onClick={()=>setCount(count<1?0:count-1)}/>
      </div>
    </div>
  )
}
export default SingleItem
