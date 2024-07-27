import { BsCartPlus } from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <p className='nav-heading'>Navbar</p>
        <button className='cart-btn'> <BsCartPlus /> </button>
        <div className="item-number">
          1
        </div>
      </div>
    </div>
  )
}
export default Navbar
