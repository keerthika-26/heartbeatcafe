import React, { useState } from 'react';
import axios from 'axios';

const CancelOrder = () => {
  const [orderId, setOrderId] = useState('');

  const cancelOrder = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/orders/cancel/${orderId}`);
      alert('Order Cancelled');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to cancel');
    }
  };

  return (
    <div>
      <h2>Cancel Order</h2>
      <input type="text" placeholder="Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      <button onClick={cancelOrder}>Cancel</button>
    </div>
  );
};

export default CancelOrder;
