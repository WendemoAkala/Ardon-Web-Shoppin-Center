import React, { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import { getOrders } from '../services/api';

function OrderListPage() {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user's orders when the component mounts
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders(userId);
        setOrders(ordersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('An error occurred while fetching orders.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Your Orders</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order) => (
              <li key={order.id}>
                {/* Display order details here */}
                <span>{order.id}</span>
                <span>{order.date}</span>
                {/* Add a link to the detailed view */}
                <Link to={`/orders/${order.id}`}>View Details</Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
export default OrderListPage;
