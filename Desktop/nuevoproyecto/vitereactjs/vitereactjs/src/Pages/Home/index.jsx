import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [items, setItems] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    fetch('https://kaoxdc.pythonanywhere.com/api/documento/')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout>
        Home

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {items?.map((item) => (
            <Card key={item.id} data={item} openModal={openModal} />
          ))}
        </div>
        <ProductDetail product={selectedProduct} isOpen={isModalOpen} closeModal={closeModal} />
      </Layout>
    </>
  );
}

export default Home;
