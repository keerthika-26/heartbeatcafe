import React, { useEffect, useState } from 'react';
import './menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const items = [
      {
        id: 1,
        name: "Cappuccino",
        description: "Rich and foamy coffee with steamed milk.",
        price: 120,
        category: "Hot Drinks",
        imageUrl: "jk.jpeg",
      },
      {
        id: 2,
        name: "Iced Latte",
        description: "Chilled espresso with milk and ice.",
        price: 140,
        category: "Cold Drinks",
        imageUrl: "ice.jpg",
      },
      {
        id: 3,
        name: "Chocolate Brownie",
        description: "Gooey chocolate brownie topped with nuts.",
        price: 90,
        category: "Desserts",
        imageUrl: "br.jpeg",
      },
      {
        id: 4,
        name: "French Fries",
        description: "Crispy golden fries with a hint of salt.",
        price: 80,
        category: "Snacks",
        imageUrl: "fr.jpeg",
      },
      {
        id: 5,
        name: "Veg Sandwich",
        description: "Fresh vegetable sandwich with spicy mayo.",
        price: 100,
        category: "Snacks",
        imageUrl: "san.jpeg",
      },
      {
        id: 6,
        name: "Mango Smoothie",
        description: "Refreshing mango blended smoothie.",
        price: 130,
        category: "Cold Drinks",
        imageUrl: "man.jpeg",
      },
      {
        id: 7,
        name: "Chicken Sandwich",
        description: "It gives you yummy bites",
        price: 150,
        category: "Sandwich",
        imageUrl: "Crispy-fried-chicken-burgers_5.webp",
      },
      {
        id: 8,
        name: "Mushroom Fries",
        description: "Crispy mushrooms with seasoning",
        price: 110,
        category: "Fries",
        imageUrl: "mush.jpeg",
      },
      {
        id: 9,
        name: "Pineapple Juice",
        description: "Refreshing tropical drink",
        price: 80,
        category: "Juice",
        imageUrl: "pine.jpeg",
      },
      {
        id: 10,
        name: "Baklava",
        description: "Sweet pastry with nuts and honey",
        price: 120,
        category: "Snacks",
        imageUrl: "baklava.webp",
      },
      {
        id: 11,
        name: "Belgian Chocolate Coffee",
        description: "Refreshing drink",
        price: 150,
        category: "Drink",
        imageUrl: "bell.jpg",
      },
      {
        id: 12,
        name: "Chicken Pockets",
        description: "Crunchyyyyy",
        price: 80,
        category: "Snacks",
        imageUrl: "ChickenPockets.jpg",
      },
      {
        id: 13,
        name: "Chicken Nuggets",
        description: "Crispy and golden bites",
        price: 80,
        category: "Snacks",
        imageUrl: "nugg.jpg",
      },
      {
        id: 14,
        name: "Oreo Waffles",
        description: "Delicious chocolatey waffles",
        price: 340,
        category: "Snacks",
        imageUrl: "oreo.jpg",
      },
      {
        id: 15,
        name: "Chocolate Overloaded Waffles",
        description: "Overflowing with chocolate",
        price: 450,
        category: "Snacks",
        imageUrl: "overlodeed.jpg",
      },
      {
        id: 16,
        name: "French Waffles",
        description: "Crispy French-style waffles",
        price: 350,
        category: "Snacks",
        imageUrl: "french waffles.jpg",
      },
      {
        id: 17,
        name: "Brownie",
        description: "Classic rich chocolate brownie",
        price: 80,
        category: "Snacks",
        imageUrl: "brown.jpg",
      },
      {
        id: 18,
        name: "French Fries",
        description: "Golden crispy potato fries",
        price: 280,
        category: "Snacks",
        imageUrl: "french.jpg",
      },
      {
        id: 19,
        name: "Cheesecake",
        description: "Creamy and sweet dessert",
        price: 250,
        category: "Snacks",
        imageUrl: "cheese.jpg",
      },
      {
        id: 20,
        name: "Cheese Garlic Bread",
        description: "Loaded with cheese and garlic",
        price: 250,
        category: "Snacks",
        imageUrl: "garlic.jpg",
      },
      {
        id: 21,
        name: "Veg Pizza",
        description: "Topped with fresh vegetables",
        price: 250,
        category: "Snacks",
        imageUrl: "vegpizza.jpg",
      },
      {
        id: 22,
        name: "Chicken Pizza",
        description: "Peacefully delicious",
        price: 350,
        category: "Pizza",
        imageUrl: "chicpizza.jpg",
      },
      {
        id: 23,
        name: "Mutton Coala",
        description: "Crunchyy mutton dish",
        price: 150,
        category: "Snacks",
        imageUrl: "mutton.jpg",
      },
      {
        id: 24,
        name: "Paneer Tikka",
        description: "Spiced grilled paneer",
        price: 80,
        category: "Snacks",
        imageUrl: "panner.jpg",
      },
      {
        id: 25,
        name: "Dragon Chicken",
        description: "Spicy & crispy chicken starter",
        price: 250,
        category: "Juicy",
        imageUrl: "Dragon-Chicken-05.jpg",
      },
    ];

    setMenuItems(items);
  }, []);

  return (
    <div className="menu-container">
      <h2 className="menu-title">💕 Heartbeat Café Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${item.imageUrl}`}
              alt={item.name}
              className="menu-image"
            />
            <div className="menu-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>₹{item.price}</strong></p>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;


  