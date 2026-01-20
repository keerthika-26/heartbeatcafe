import React, { useState } from 'react';
import PlaceOrder from './placeorder';
import CanceledOrder from './canceledorder';


const OrderDashboard = () => {
  const [activeTab, setActiveTab] = useState('place');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Order Dashboard</h1>

      <div style={styles.tabContainer}>
        <button
          style={activeTab === 'place' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('place')}
        >
          Place Order
        </button>
        <button
          style={activeTab === 'cancel' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('cancel')}
        >
          Cancel Order
        </button>
      </div>

      <div style={styles.componentBox}>
        {activeTab === 'place' && <PlaceOrder />}
        {activeTab === 'cancel' && <CanceledOrder />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
  },
  tabContainer: {
    marginBottom: '1rem',
  },
  tab: {
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
    background: '#eee',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  activeTab: {
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff',
    border: '1px solid #007bff',
    borderRadius: '5px',
  },
  componentBox: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '5px',
  },
};

export default OrderDashboard; 



