import { useContext } from 'react'
import { CartContext } from "../../Context";
import './styles.css'


const ProductDetail = () => {
  const context = useContext(CartContext);

 // console.log('Producto a Mostrar: ', context.productTodetail)


  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detalle</h2>
        <div onClick={() => context.closeProductDetail()}>x</div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg'
          src={context.productToShow.photo}
          alt={context.productToShow.descripcion} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-md'>{context.productToShow.fecha_elaboracion}</span>
        <span className='font-light text-sm'>{context.productToShow.descripcion}</span>
      </p>
    </aside>
  )
}
export default ProductDetail;