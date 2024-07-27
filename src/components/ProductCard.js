import { useState } from 'react';
import Notification from './Notification';
import ProductModal from './ProductModal';

export default function ProductCard({ product }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const showNotification = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md cursor-pointer"
        onClick={handleOpenModal}
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="mt-1 text-gray-600">{product.description}</p>
      <p className="mt-2 text-green-500 font-semibold">${product.price}</p>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        product={product}
        showNotification={showNotification}
      />
      <Notification
        message="Item added to cart!"
        visible={notificationVisible}
        onClose={() => setNotificationVisible(false)}
      />
    </div>
  );
}
