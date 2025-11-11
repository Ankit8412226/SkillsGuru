import axios from "axios";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Alert from "../assets/components/Alert.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Auth = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === "/login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLoginChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setLoginData({ ...loginData, [e.target.name]: value });
    setError("");
    setSuccess("");
  };

  const handleRegisterChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setRegisterData({ ...registerData, [e.target.name]: value });
    setError("");
    setSuccess("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: loginData.email,
        password: loginData.password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    if (!registerData.agreeToTerms) {
      setError("Please agree to the Terms and Privacy Policies");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        name: `${registerData.firstName} ${registerData.lastName}`,
        email: registerData.email,
        password: registerData.password,
        role: "student",
        phone: registerData.phoneNumber,
      });

      if (response.data.success) {
        setSuccess(response.data.message + " Switching to login...");
        setRegisterData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
        });

        setTimeout(() => {
          setIsLogin(true);
          setError("");
          setSuccess("");
        }, 2000);
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  useEffect(() => {
    setIsLogin(location.pathname === "/login");
  }, [location.pathname]);

  return (
    <div
      style={{ backgroundImage: `url(./bg.jpg)` }}
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-4"
    >
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden mt-10 mb-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 order-2 lg:order-1">
            <div className="max-w-md mx-auto">
              {/* Toggle Buttons */}
              <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => !loading && toggleAuthMode()}
                  disabled={loading}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isLogin
                      ? "bg-[#2FC7A1] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => !loading && toggleAuthMode()}
                  disabled={loading}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    !isLogin
                      ? "bg-[#2FC7A1] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {isLogin ? "Login" : "Sign up"}
                </h2>
                <p className="text-gray-600">
                  {isLogin
                    ? "Login to access your account"
                    : "Let's get you all set up so you can access your personal account"}
                </p>
              </div>

              {/* Alerts */}
              {error && (
                <div className="mb-4">
                  <Alert
                    variant="error"
                    title={isLogin ? "Login failed" : "Registration failed"}
                    message={error}
                  />
                </div>
              )}
              {success && (
                <div className="mb-4">
                  <Alert variant="success" title="Success" message={success} />
                </div>
              )}

              {/* Login Form */}
              {isLogin ? (
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent"
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
                        value={loginData.password}
                        onChange={handleLoginChange}
                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent"
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
                        checked={loginData.rememberMe}
                        onChange={handleLoginChange}
                        className="w-4 h-4 text-[#2FC7A1] border-gray-300 rounded focus:ring-[#2FC7A1]"
                        disabled={loading}
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Remember me
                      </span>
                    </label>
                  </div>

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
              ) : (
                /* Register Form */
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={registerData.firstName}
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent text-sm"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={registerData.lastName}
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent text-sm"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent text-sm"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={registerData.phoneNumber}
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent text-sm"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••••••••••"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent text-sm"
                        required
                        disabled={loading}
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        disabled={loading}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="••••••••••••••••"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent text-sm"
                        required
                        disabled={loading}
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        disabled={loading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={registerData.agreeToTerms}
                      onChange={handleRegisterChange}
                      className="w-4 h-4 text-[#2FC7A1] border-gray-300 rounded focus:ring-[#2FC7A1] mt-0.5"
                      required
                      disabled={loading}
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      I agree to all the{" "}
                      <a
                        href="/terms"
                        className="text-[#2FC7A1] hover:text-[#28B895]"
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-[#2FC7A1] hover:text-[#28B895]"
                      >
                        Privacy Policies
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
                  >
                    <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
                      {loading ? "Creating account......" : "Create Account"}
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 ml-1">
                      <ArrowRight size={16} className="lg:w-5 lg:h-5" />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center order-1 lg:order-2">
            <img
              src={isLogin ? "login (1).jpeg" : "./Register_img.png"}
              alt={isLogin ? "Login illustration" : "Sign up illustration"}
              className="w-full h-full object-contain object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
