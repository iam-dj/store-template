import { useState, useEffect } from 'react';

export default function Notification({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    visible && (
      <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
        {message}
      </div>
    )
  );
}
