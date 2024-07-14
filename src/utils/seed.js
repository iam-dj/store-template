const sequelize = require('./db');
const Product = require('../models/Product');

async function seedDatabase() {
  await sequelize.sync({ force: true });

  await Product.bulkCreate([
    {
      name: 'Wireless Earbuds',
      description: 'High-quality wireless earbuds with noise cancellation.',
      price: 59.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Smart Watch',
      description: 'Smart watch with multiple health tracking features.',
      price: 129.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with excellent sound quality.',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Fitness Tracker',
      description: 'Fitness tracker with heart rate and sleep monitoring.',
      price: 89.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Laptop Stand',
      description: 'Adjustable laptop stand for better ergonomics.',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Gaming Mouse',
      description: 'Ergonomic gaming mouse with customizable buttons.',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Mechanical Keyboard',
      description: 'Mechanical keyboard with RGB lighting.',
      price: 79.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'HD Webcam',
      description: 'HD webcam for high-quality video calls.',
      price: 69.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Portable Charger',
      description: 'Portable charger with fast charging capability.',
      price: 24.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'USB-C Hub',
      description: 'USB-C hub with multiple ports for connectivity.',
      price: 34.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Noise Cancelling Headphones',
      description: 'Over-ear headphones with active noise cancellation.',
      price: 149.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Smartphone Gimbal',
      description: 'Gimbal stabilizer for smooth video recording.',
      price: 99.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'LED Desk Lamp',
      description: 'Adjustable LED desk lamp with multiple brightness levels.',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Electric Kettle',
      description: 'Electric kettle with temperature control.',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Air Purifier',
      description: 'Compact air purifier with HEPA filter.',
      price: 89.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Digital Photo Frame',
      description: 'Digital photo frame with WiFi connectivity.',
      price: 79.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Smart Light Bulbs',
      description: 'Pack of 4 smart light bulbs with voice control.',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Robot Vacuum Cleaner',
      description: 'Robot vacuum cleaner with automatic charging.',
      price: 199.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Portable Projector',
      description: 'Portable projector with built-in speakers.',
      price: 129.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Smart Doorbell',
      description: 'Smart doorbell with video and two-way audio.',
      price: 99.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: '4K Monitor',
      description: '27-inch 4K monitor with HDR support.',
      price: 299.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Standing Desk',
      description: 'Adjustable standing desk for a healthier workspace.',
      price: 249.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Wireless Charger',
      description: 'Fast wireless charger for smartphones and earbuds.',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Smart Thermostat',
      description: 'Smart thermostat with remote control and scheduling.',
      price: 129.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Electric Toothbrush',
      description: 'Rechargeable electric toothbrush with multiple modes.',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  console.log('Database seeded!');
  process.exit();
}

seedDatabase();
