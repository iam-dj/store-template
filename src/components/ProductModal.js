import React, { useState } from 'react';
import Modal from 'react-modal';
import { useCart } from '../context/CartContext';

Modal.setAppElement('#__next'); // Set the root element for accessibility

const ProductModal = ({ isOpen, onRequestClose, product, showNotification }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showNotification();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content p-4">
        <button className="close-button" onClick={onRequestClose}>
          &times;
        </button>
        <div className="product-details">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="product-info">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 text-green-500 font-semibold">${product.price}</p>
            <div className="quantity-selector mt-4">
              <label className="block mb-2">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                className="w-16 p-1 border rounded"
              />
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
