import axios from "axios";
import { ArrowRight, CheckCircle, Loader2, Mail, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from "../assets/components/Alert.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [showResend, setShowResend] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      // Get token and email from URL query parameters
      const token = searchParams.get("token");
      const emailParam = searchParams.get("email");

      if (!token || !emailParam) {
        setStatus("error");
        setMessage("Invalid verification link. Missing token or email.");
        return;
      }

      setEmail(emailParam);

      try {
        const response = await axios.get(
          `${API_BASE_URL}/auth/verify-email?token=${token}&email=${emailParam}`
        );

        if (response.data.success) {
          setStatus("success");
          setMessage(response.data.message);
        }
      } catch (err) {
        console.error("Verification error:", err);
        setStatus("error");
        setMessage(
          err.response?.data?.message || "Verification failed. Please try again."
        );

        // Show resend button if token expired or invalid
        if (err.response?.data?.needsResend) {
          setShowResend(true);
        }
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleResendVerification = async () => {
    if (!email) {
      return;
    }

    setResending(true);
    setResendSuccess(false);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/resend-verification`,
        { email }
      );

      if (response.data.success) {
        setResendSuccess(true);
        setMessage("Verification email sent! Please check your inbox.");
        setShowResend(false);
      }
    } catch (err) {
      console.error("Resend error:", err);
      setMessage(
        err.response?.data?.message || "Failed to resend verification email."
      );
    } finally {
      setResending(false);
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
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center">
        {status === "verifying" && (
          <>
            <div className="flex justify-center mb-6">
              <Loader2 size={64} className="text-[#2FC7A1] animate-spin" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Verifying your email...
            </h2>
            <p className="text-gray-600">
              Please wait while we verify your account
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Email Verified!
            </h2>
            <div className="mb-6"><Alert variant="success" title="Success" message={message} /></div>
            <button
              onClick={handleLoginRedirect}
              className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
            >
              <span className="px-6 py-2 text-sm font-medium">Go to Login</span>
              <div className="flex items-center justify-center w-12 h-12 bg-[#35D7AE] rounded-full">
                <ArrowRight size={20} />
              </div>
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="flex justify-center mb-6">
              <XCircle size={64} className="text-red-500" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {resendSuccess ? "Check Your Email" : "Verification Failed"}
            </h2>
            <div className="mb-6"><Alert variant="error" title="Verification failed" message={message} /></div>

            <div className="space-y-3">
              {/* Resend Verification Button */}
              {showResend && !resendSuccess && (
                <button
                  onClick={handleResendVerification}
                  disabled={resending}
                  className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="px-6 py-2 text-sm font-medium">
                    {resending ? "Sending..." : "Resend Verification Email"}
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 bg-[#35D7AE] rounded-full">
                    {resending ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <Mail size={20} />
                    )}
                  </div>
                </button>
              )}

              {/* Back to Register Button */}
              {!resendSuccess && (
                <button
                  onClick={handleRegisterRedirect}
                  className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
                >
                  <span className="px-6 py-2 text-sm font-medium">
                    Back to Register
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 bg-[#35D7AE] rounded-full">
                    <ArrowRight size={20} />
                  </div>
                </button>
              )}

              {/* Try Login Button */}
              <button
                onClick={handleLoginRedirect}
                className="w-full px-6 py-3 border-2 border-[#2FC7A1] text-[#2FC7A1] rounded-full font-medium hover:bg-[#2FC7A1] hover:text-white transition-colors duration-200"
              >
                {resendSuccess ? "Go to Login" : "Try Login Instead"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
