import React, { useEffect, useState } from "react";
import axios from "axios";

const PlaceOrder = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]); // 🛒 Stores selected items and quantity
  const [paymentInfo, setPaymentInfo] = useState("Cash");

  // ✅ Get logged-in user's _id
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user._id;

  // 🔹 Fetch menu items from backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/menu");
        setMenuItems(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch menu items:", err);
      }
    };
    fetchMenuItems();
  }, []);

  // 🧮 Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ➕ Add item to cart
  const addToCart = (menuItem) => {
    const existing = cart.find((i) => i._id === menuItem._id);
    if (existing) {
      setCart(
        cart.map((i) =>
          i._id === menuItem._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...menuItem, quantity: 1 }]);
    }
  };

  // ➖ Remove or decrease quantity
  const removeFromCart = (menuItemId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === menuItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🧾 Handle placing order
  const handleOrder = async () => {
    if (!userId) {
      alert("❌ Please login first!");
      return;
    }
    if (cart.length === 0) {
      alert("🛒 Please add items to your order!");
      return;
    }

    try {
      const orderData = {
        userId,
        items: cart.map((item) => ({
          menuItem: item._id,
          quantity: item.quantity,
        })),
        paymentInfo,
      };

      const res = await axios.post("http://localhost:5000/api/orders/place", orderData);

      alert("✅ Order Placed Successfully!");
      console.log(res.data);

      setCart([]);
      setPaymentInfo("Cash");
    } catch (err) {
      console.error(err.response?.data || err);
      alert("❌ Order Failed!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>🛍 Place Your Order</h2>

      {/* Menu Items List */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        {menuItems.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      {/* 🧾 Cart Section */}
      <div style={{ marginTop: "30px", background: "#f7f7f7", padding: "15px", borderRadius: "10px" }}>
        <h3>🛒 Your Cart</h3>
        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "8px 0",
                }}
              >
                <span>
                  {item.name} (₹{item.price}) × {item.quantity}
                </span>
                <div>
                  <button onClick={() => removeFromCart(item._id)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))}
            <h4 style={{ marginTop: "10px" }}>Total: ₹{total}</h4>
          </>
        )}
      </div>

      {/* Payment & Place Button */}
      <div style={{ marginTop: "20px" }}>
        <select
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        >
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>

        <button
          onClick={handleOrder}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
  

