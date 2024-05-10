import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOrder, updateOrder, finalizeOrder } from '../../services/api'; // Replace with your actual API functions

const OrderProcess = () => {
  const { userId } = useParams();
  const [order, setOrder] = useState(null);
  const [isOrderModified, setIsOrderModified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrder(userId);
        setOrder(orderData);
      } catch (error) {
        setError('Error fetching order. Please try again.');
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [userId]);

  const handleModifyOrder = async () => {
    try {
      await updateOrder(userId, { status: 'Modified' });
      const updatedOrder = await getOrder(userId);
      setOrder(updatedOrder);
      setIsOrderModified(true);
    } catch (error) {
      setError('Error fetching order. Please try again.');
      console.error('Error modifying order:', error);
    }
  };

  const handleFinalizeOrder = async () => {
    try {
      await finalizeOrder(userId, orderBody);
      setIsOrderModified(true);
      history.push(`/orders/${userId}`);
    } catch (error) {
      setError('Error finalizing order. Please try again.');
      console.error('Error finalizing order:', error);
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
      <h2>Order Process</h2>

      <p>Order ID: {order.id}</p>
      <p>Date: {order.date}</p>
      <p>Status: {order.status}</p>

      {order.status === 'Pending' && (
        <div>
          <button onClick={handleModifyOrder} disabled={isOrderModified}>
            Modify Order
          </button>
        </div>
      )}

      {isOrderModified && (
        <div>
          <button onClick={handleFinalizeOrder}>Finalize Order</button>
        </div>
      )}
    </div>
  );
};

export default OrderProcess;