import axios from "axios";
import { ArrowRight, Eye, EyeOff, Loader2, XCircle } from "lucide-react";
import { useState } from "react";
import Alert from "../assets/components/Alert.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Set default authorization header for future requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

        setSuccess(`Welcome back, ${response.data.user.name}! Redirecting...`);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 800);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(./bg.jpg)` }}
      className="w-full bg-cover bg-center flex items-center justify-center p-4"
    >
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden mt-10">
        <div className="flex flex-col lg:flex-row ">
          {/* Left Side - Form */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
                <p className="text-gray-600">
                  Login to access your travelwise account
                </p>
              </div>

              {/* Alerts */}
              {error && (
                <div className="mb-4">
                  <Alert variant="error" title="Login failed" message={error} />
                </div>
              )}
              {success && (
                <div className="mb-4">
                  <Alert variant="success" title="Success" message={success} />
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={loading}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      disabled={loading}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Remember me
                    </span>
                  </label>
                </div>
                {/*  */}
                <button
                  type="submit"
                  disabled={loading}
                 className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
          >
            <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
              {loading ? "Logging in......" : "Login"}
            </span>
            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 ml-1">
              <ArrowRight size={16} className="lg:w-5 lg:h-5" />
            </div>
                </button>
              </form>

              <p className="text-center text-gray-600 mt-6">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-[#35D7AE] hover:text-green-600 font-medium"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
            <img
              src="login (1).jpeg"
              alt="Login illustration"
              className="w-full h-full object-contain object-cover "
            />



          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
