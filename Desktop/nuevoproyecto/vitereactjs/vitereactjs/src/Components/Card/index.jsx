import React, { useContext } from 'react';
import { CartContext } from '../../Context';

const Card = ({ data, openModal }) => {
  const context = useContext(CartContext);

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);

    // Comprueba si el producto ya está en el carrito
    const isInCart = context.cartProducts.some((product) => product.id === productData.id);

    if (!isInCart) {
      context.setCartProducts([...context.cartProducts, productData]);
    }

    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id);

    return (
      <div
        className={`absolute top-0 right-0 flex justify-center items-center bg-${isInCart ? 'lime' : 'white'} w-6 h-6 rounded-full m-2 p-1 text-black`}
        onClick={(event) => addProductsToCart(event, data)}
      >
        {isInCart ? 'x' : '+'}
      </div>
    );
  };

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.nombre ? data.nombre : 'Sin nombre'}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.photo} // Asegúrate de que `data.photo` sea la URL de la imagen
          alt='' // Agrega un texto alternativo apropiado para la imagen
        />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.descripcion}</span>
        <span className='text-lg font-medium'>${data.precio}</span>
      </p>
    </div>
  );
};

export default Card;
