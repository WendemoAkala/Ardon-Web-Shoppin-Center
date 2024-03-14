import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder, updateOrder } from '../../services/api';

const OrderDetail = () => {
  const { userId, orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrder(userId, orderId);
        setOrder(orderData);
      } catch (error) {
        setError('Error fetching order. Please try again.');
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [userId, orderId]);

  const handleModifyOrder = async () => {
    try {
      await updateOrder(userId, orderId, { status: 'Modified' });
      // Refresh the order details after modification
      const updatedOrder = await getOrder(userId, orderId);
      setOrder(updatedOrder);
    } catch (error) {
      setError('Error modifying order. Please try again.');
      console.error('Error modifying order:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Date: {order.date}</p>
      <p>Status: {order.status}</p>
      <button onClick={handleModifyOrder}>Modify Order</button>
    </div>
  );
};

export default OrderDetail;