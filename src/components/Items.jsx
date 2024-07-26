import SingleItem from "./SingleItem"


const Items = () => {
    const items = [
      { id: '1', img: '', name: '' },
      { id: '1', img: '', name: '' },
    ]
  return (
    <>
      <div className="items">
        <div className="title">Your Bag</div>
        {items.map((item) => {
          return <SingleItem key={item.id} {...item} />
        })}
      </div>
      <div className="total">
        <div>total</div>
        <div className="totalPrice">$2000</div>
      </div>
      <div className="clear-cart">
        <button>clear cart</button>
      </div>
    </>
  )
}
export default Items