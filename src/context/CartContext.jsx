import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import api from "../utils/api";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCart = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setItems([]);
      return;
    }
    try {
      setLoading(true);
      const res = await api.get(`/cart/me`);
      // Expecting { success, data: { items: [{ course, priceAtAdd, addedAt }], ... } }
      const data = res.data?.data || res.data;
      setItems(data?.items || []);
      setError(null);
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to load cart");
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = useCallback(async (courseId) => {
    try {
      setLoading(true);
      const res = await api.post(`/cart/items`, { courseId });
      const data = res.data?.data || res.data;
      setItems(data?.items || []);
      setError(null);
      return true;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to add to cart");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFromCart = useCallback(async (courseId) => {
    try {
      setLoading(true);
      const res = await api.delete(`/cart/items/${courseId}`);
      const data = res.data?.data || res.data;
      setItems(data?.items || []);
      setError(null);
      return true;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to remove from cart");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.delete(`/cart`);
      const data = res.data?.data || res.data;
      setItems(data?.items || []);
      setError(null);
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to clear cart");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const count = items.length;
  const total = useMemo(() => items.reduce((sum, it) => sum + (it.priceAtAdd || it.price || 0), 0), [items]);

  const value = useMemo(() => ({ items, count, total, loading, error, loadCart, addToCart, removeFromCart, clearCart }), [items, count, total, loading, error, loadCart, addToCart, removeFromCart, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};


