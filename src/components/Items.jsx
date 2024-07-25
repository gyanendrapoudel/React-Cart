import SingleItem from "./SingleItem"


const Items = () => {
    const items = [
      { id: '1', img: '', name: '' },
      { id: '1', img: '', name: '' },
    ]
  return (
    <div className="items">
        <h4>Your Bag</h4>
        {items.map((item)=>{
            return <SingleItem key={item.id} {...item}/>
        })}
    </div>
  )
}
export default Items