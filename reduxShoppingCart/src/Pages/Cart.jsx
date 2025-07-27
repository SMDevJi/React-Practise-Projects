import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/cartSlice'

function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch=useDispatch();


  const handleRemove = (item) => {
    dispatch(remove(item.id))
  }

  return (
    <>
      <div className='ml-[20px] font-bold text-xl'>Cart:</div>
      <div className="cart-items-wrapper p-5">
        {items.map(item =>
          <div key={item.id} className="cart-item bg-white h-[120px] my-5 flex justify-around items-center p-2">
            <img className='h-[80%]' src={item.image} alt={item.title} />
            <span className='font-bold'>{item.title}</span>
            <span className='font-bold'>{item.price}</span>
            <button className='rounded p-[0.5%] bg-blue-800 hover:bg-blue-900 cursor-pointer text-white font-bold' onClick={() => handleRemove(item)}>Remove</button>
          </div>
        )}
      </div>
    </>

  )
}

export default Cart