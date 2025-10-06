import axios from "axios";
import { ArrowRight, CheckCircle, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ResendVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/resend-verification`,
        { email }
      );

      if (response.data.success) {
        setSuccess(true);
        setError("");
      }
    } catch (err) {
      console.error("Resend error:", err);
      setError(
        err.response?.data?.message ||
        "Failed to send verification email. Please try again."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div
      style={{ backgroundImage: `url(./bg.jpg)` }}
      className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-50 bg-cover bg-center"
    >
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 lg:p-12">
        {!success ? (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#2FC7A1]/10 rounded-full flex items-center justify-center">
                <Mail size={32} className="text-[#2FC7A1]" />
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-center">
              Resend Verification Email
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Enter your email address and we'll send you a new verification link
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent outline-none transition-all"
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="px-6 py-2 text-sm font-medium">
                  {loading ? "Sending..." : "Send Verification Email"}
                </span>
                <div className="flex items-center justify-center w-12 h-12 bg-[#35D7AE] rounded-full">
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </div>
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <button
                onClick={handleLoginRedirect}
                className="text-[#2FC7A1] hover:underline font-medium"
              >
                Back to Login
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={handleRegisterRedirect}
                className="text-[#2FC7A1] hover:underline font-medium"
              >
                Register New Account
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-center">
              Email Sent!
            </h2>
            <p className="text-gray-600 text-center mb-8">
              We've sent a new verification link to <strong>{email}</strong>.
              Please check your inbox and click the link to verify your account.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleLoginRedirect}
                className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
              >
                <span className="px-6 py-2 text-sm font-medium">
                  Go to Login
                </span>
                <div className="flex items-center justify-center w-12 h-12 bg-[#35D7AE] rounded-full">
                  <ArrowRight size={20} />
                </div>
              </button>

              <button
                onClick={() => {
                  setSuccess(false);
                  setEmail("");
                }}
                className="w-full px-6 py-3 border-2 border-[#2FC7A1] text-[#2FC7A1] rounded-full font-medium hover:bg-[#2FC7A1] hover:text-white transition-colors duration-200"
              >
                Send to Another Email
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResendVerification;
