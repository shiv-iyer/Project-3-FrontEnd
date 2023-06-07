import React, { useState, useContext, useEffect } from "react";

import jwtDecode from "jwt-decode";

// context
import UserContext from "../contexts/UserContext";

export default function Profile() {
  // useContext and useState hooks
  const context = useContext(UserContext);
  const [userID, setUserID] = useState("");

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setUserID(jwtDecode(token).id);
    }
  }, []);

  useEffect(() => {
    // if user ID exists in the state
    const fetchData = async () => {
      if (userID) {
        const orders = await context.getUserCart(userID);
        setOrders(orders);
        console.log(orders);
      }
    };
    fetchData();
  }, [context, userID]);

  return (
    <React.Fragment>
      <h1>Profile Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Username</th>
            <th>Total Cost</th>
            <th>Order Date</th>
            <th>Shipping Details</th>
            <th>Payment Type</th>
          </tr>
        </thead>
        <tbody>
            {orders && orders.length > 0 ? orders.map(order => {
                return (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.user.username}</td>
                        <td>{order.total_cost}</td>
                        <td>{order.order_date}</td>
                        {/* use conditional rendering to display shipping details depending on if line 2 exists or not */}
                        <td>{order.shipping_address_line_2 ? `${order.shipping_address_line_1} ${order.shipping_address_line_2}` : order.shipping_address_line_1}</td>
                        <td>{order.payment_type}</td>
                    </tr>
                );
            }) : "There are no available orders to display."}
        </tbody>
      </table>
    </React.Fragment>
  );
}
