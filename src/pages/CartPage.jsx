import { Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/components/Loader.jsx";
import LoaderOverlay from "../assets/components/LoaderOverlay.jsx";
import Alert from "../assets/components/Alert.jsx";
import { useCart } from "../context/CartContext.jsx";
import api from "../utils/api";

const CartPage = () => {
  const navigate = useNavigate();
  const { items, total, removeFromCart, loading, loadCart } = useCart();
  const [placing, setPlacing] = useState(false);
  const [alert, setAlert] = useState(null);
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const enriched = useMemo(() => {
    return (items || []).map((it) => ({
      courseId: it.course?._id || it.course,
      title: it.course?.title,
      price: it.priceAtAdd || it.price,
      thumbnailUrl: it.course?.thumbnailUrl,
      instructor: it.course?.instructor,
    }));
  }, [items]);

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    try {
      setPlacing(true);
      const res = await api.post(`/orders`);
      const order = res.data?.data || res.data;
      if (order?.paymentLink) {
        window.location.href = order.paymentLink;
      } else {
        // fallback: reload cart and navigate to dashboard/orders
        await loadCart();
        setAlert({ type: "success", title: "Order Created", message: "Redirecting to your orders..." });
        navigate("/dashboard");
      }
    } catch (e) {
      setAlert({ type: "error", title: "Checkout Failed", message: e?.response?.data?.message || "Failed to create order" });
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0E2A46] mb-2">Your Cart</h1>
      <p className="text-gray-600 mb-6">Review your selected courses and proceed to secure checkout.</p>

      {loading ? (
        <div className="py-16"><Loader label="Fetching your cart..." /></div>
      ) : enriched.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mx-auto w-24 h-24 rounded-full bg-[#F0FDF9] flex items-center justify-center mb-4">
            <span className="text-3xl">🛒</span>
          </div>
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-3 bg-[#2FC7A1] text-white rounded-lg font-semibold hover:bg-[#28B895]"
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {alert && (
              <Alert
                variant={alert.type}
                title={alert.title}
                message={alert.message}
                onClose={() => setAlert(null)}
              />
            )}
            {enriched.map((c) => (
              <div key={c.courseId} className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition-shadow bg-white">
                <img src={c.thumbnailUrl} alt={c.title} className="w-28 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-semibold text-[#0E2A46] text-lg">{c.title}</p>
                  {c.instructor?.name && (
                    <p className="text-sm text-gray-500">{c.instructor.name}</p>
                  )}
                  <p className="mt-2 font-bold text-[#0E2A46]">₹{c.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(c.courseId)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  title="Remove"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="p-6 border rounded-xl h-fit sticky top-24 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-[#0E2A46]">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">₹{total}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">₹0</span>
            </div>
            <div className="bg-[#F0FDF9] text-[#0E2A46] rounded-lg p-3 mb-4 text-sm">
              Secure payments powered by Cashfree. You will be redirected to complete the payment.
            </div>
            <div className="flex justify-between py-3 border-t">
              <span className="font-bold">Total</span>
              <span className="font-bold">₹{total}</span>
            </div>
            <button
              disabled={placing}
              onClick={handleCheckout}
              className="w-full mt-4 rounded-lg bg-[#2FC7A1] text-white font-semibold py-3 hover:bg-[#28B895] disabled:opacity-60"
            >
              {placing ? <Loader label="Processing..." /> : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      )}
      <LoaderOverlay show={placing} label="Creating order..." />
    </div>
  );
};

export default CartPage;


