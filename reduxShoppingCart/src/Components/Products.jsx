import { useEffect } from 'react'
import { loadProducts } from '../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { STATUSES } from '../redux/productSlice'
import { add } from '../redux/cartSlice'

function Products() {
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [])

  const handleAddToCart = (product) => {
    dispatch(add(product))
  }

  if (status == STATUSES.LOADING) {
    return <div className='ml-[15px] font-bold text-xl'>Loading Products..</div>
  }
  if (status == STATUSES.ERROR) {
    return <div className='ml-[15px] font-bold text-xl'>Something went wrong..</div>
  }
  return (
    <>
      <div className='font-bold text-xl ml-[15px]'>Products:</div>
      <div className="products-container flex justify-around flex-wrap gap-4 p-1">
        {products.map(product =>
          <div key={product.id} className="product-card bg-white  w-1/5 flex justify-between items-center flex-col p-[3%] rounded">
            <img className='w-1/2' src={product.image} alt={product.title} />
            <span className='font-bold text-center'>{product.title}</span>
            <span className='font-bold text-center'>{product.price}</span>
            <button className='rounded p-[2%] bg-blue-800 hover:bg-blue-900 cursor-pointer text-white font-bold mt-4' onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Products