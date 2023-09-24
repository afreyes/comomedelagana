import React from 'react';

const OrderCart = (props) => {
    const { id, fecha_elaboracion, photo, descripcion, handleDelete } = props;

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex flex-col items-center gap-2">
                <figure className="w-20 h-20">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src={photo}
                        alt={fecha_elaboracion}
                    />
                </figure>
                <div>
                    <p className="text-lg font-medium">{descripcion}</p>
                    <p className="text-sm font-light">{fecha_elaboracion}</p>
                </div>
            </div>
            <div onClick={() => handleDelete(id)} className="cursor-pointer">
                x
            </div>
        </div>
    );
};

export default OrderCart;
