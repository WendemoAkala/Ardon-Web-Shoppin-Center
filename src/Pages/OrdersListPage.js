import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import { getOrders } from '../services/api';

function OrderListPage() {
  const { orderId, setOrderId} = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
   
    const fetchOrders = async () => {
      try {
        // const UserId = {
        //   userId: userId,
        // }
        const ordersData = await getOrders(orderId);
        setOrders(ordersData);
        setOrderId("")
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('An error occurred while fetching orders.');
        setLoading(false);
        setSuccess(false);
      }
    };

    fetchOrders();
  }, [setOrderId,orderId]);

  return (
    <div>
      <h2>Your Orders</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <React.Fragment>
        {success && <p>Data fetched successfully!</p>}
        <ul>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order) => (
              <li key={order.id}>
             
                <span>{order.id}</span>
                <span>{order.date}</span>
             
                <Link to={`/orders/${order.id}`}>View Details</Link>
              </li>
            ))
          )}
        </ul>
        </React.Fragment>
      )}
    </div>
  );
};
export default OrderListPage;