const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Menu = require("./models/menuitems"); // adjust path if needed

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cafe";

const menuItems = [
  {
    _id: "68c520832b509cf7d6de40c9",
    name: "Cappuccino",
    description: "Rich and foamy coffee with steamed milk.",
    price: 120,
    category: "Hot Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Cappuccino",
  },
  {
    name: "Latte",
    description: "Smooth coffee with milk and a touch of foam.",
    price: 130,
    category: "Hot Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Latte",
  },
  {
    name: "Espresso",
    description: "Strong and bold shot of coffee.",
    price: 100,
    category: "Hot Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Espresso",
  },
  {
    name: "Mocha",
    description: "Chocolate flavored coffee treat.",
    price: 150,
    category: "Hot Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Mocha",
  },
  {
    name: "Cold Coffee",
    description: "Refreshing chilled coffee drink.",
    price: 140,
    category: "Cold Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Cold+Coffee",
  },
  {
    name: "Iced Latte",
    description: "Chilled latte over ice.",
    price: 150,
    category: "Cold Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Iced+Latte",
  },
  {
    name: "Chocolate Shake",
    description: "Thick creamy chocolate milkshake.",
    price: 160,
    category: "Shakes",
    imageUrl: "https://via.placeholder.com/150?text=Chocolate+Shake",
  },
  {
    name: "Vanilla Shake",
    description: "Classic vanilla milkshake.",
    price: 150,
    category: "Shakes",
    imageUrl: "https://via.placeholder.com/150?text=Vanilla+Shake",
  },
  {
    name: "Strawberry Shake",
    description: "Sweet strawberry milkshake.",
    price: 150,
    category: "Shakes",
    imageUrl: "https://via.placeholder.com/150?text=Strawberry+Shake",
  },
  {
    name: "Cheese Sandwich",
    description: "Grilled sandwich with melted cheese.",
    price: 90,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Cheese+Sandwich",
  },
  {
    name: "Veg Sandwich",
    description: "Fresh vegetables with mayo in bread.",
    price: 80,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Veg+Sandwich",
  },
  {
    name: "Paneer Wrap",
    description: "Spicy paneer wrapped in tortilla.",
    price: 120,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Paneer+Wrap",
  },
  {
    name: "French Fries",
    description: "Crispy golden potato fries.",
    price: 70,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=French+Fries",
  },
  {
    name: "Burger",
    description: "Classic veggie burger with sauces.",
    price: 110,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Burger",
  },
  {
    name: "Brownie",
    description: "Chocolate brownie served warm.",
    price: 100,
    category: "Desserts",
    imageUrl: "https://via.placeholder.com/150?text=Brownie",
  },
  {
    name: "Chocolate Muffin",
    description: "Soft muffin loaded with chocolate chips.",
    price: 90,
    category: "Desserts",
    imageUrl: "https://via.placeholder.com/150?text=Chocolate+Muffin",
  },
  {
    name: "Cupcake",
    description: "Frosted cupcake treat.",
    price: 80,
    category: "Desserts",
    imageUrl: "https://via.placeholder.com/150?text=Cupcake",
  },
  {
    name: "Ice Cream",
    description: "2 scoops of your favorite ice cream.",
    price: 100,
    category: "Desserts",
    imageUrl: "https://via.placeholder.com/150?text=Ice+Cream",
  },
  {
    name: "Choco Lava Cake",
    description: "Warm cake with molten chocolate inside.",
    price: 120,
    category: "Desserts",
    imageUrl: "https://via.placeholder.com/150?text=Choco+Lava+Cake",
  },
  {
    name: "Pizza Slice",
    description: "Cheesy pizza slice with toppings.",
    price: 150,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Pizza+Slice",
  },
  {
    name: "Garlic Bread",
    description: "Crispy garlic butter bread.",
    price: 90,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Garlic+Bread",
  },
  {
    name: "Pasta",
    description: "Creamy white sauce pasta.",
    price: 140,
    category: "Snacks",
    imageUrl: "https://via.placeholder.com/150?text=Pasta",
  },
  {
    name: "Choco Frappe",
    description: "Iced coffee with chocolate flavor.",
    price: 160,
    category: "Cold Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Choco+Frappe",
  },
  {
    name: "Green Tea",
    description: "Refreshing healthy green tea.",
    price: 80,
    category: "Hot Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Green+Tea",
  },
  {
    name: "Hot Chocolate",
    description: "Thick and creamy hot chocolate.",
    price: 140,
    category: "Hot Drinks",
    imageUrl: "https://via.placeholder.com/150?text=Hot+Chocolate",
  },
];

async function seedMenu() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Menu.deleteMany();
    console.log("🗑 Old menu items removed");

    const inserted = await Menu.insertMany(menuItems);
    console.log(`✅ Inserted ${inserted.length} menu items`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding menu:", error);
    process.exit(1);
  }
}

seedMenu();

