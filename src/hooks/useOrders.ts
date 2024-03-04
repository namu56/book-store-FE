import { useEffect, useState } from "react";
import { OrderListlItem } from "../models/order.model";
import { fetchOrder, fetchOrders, order } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListlItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  console.log(orders);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    // 재요청 방지 용도
    if (orders.filter((item) => item.id === orderId)[0].detail) {
      setSelectedItemId(orderId);
      return;
    }
    fetchOrder(orderId).then((orderDetail) => {
      setSelectedItemId(orderId);
      setOrders(
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: orderDetail,
            };
          }
          return item;
        })
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};
