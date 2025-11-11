import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [successToast, setSuccessToast] = useState(null);
  const [failureToast, setFailureToast] = useState(null);

  const showSuccess = (message) => {
    setSuccessToast(message);
    setTimeout(() => setSuccessToast(null), 5000); // Auto-hide after 5 seconds
  };

  const showFailure = (message) => {
    setFailureToast(message);
    setTimeout(() => setFailureToast(null), 5000); // Auto-hide after 5 seconds
  };

  const hideSuccess = () => setSuccessToast(null);
  const hideFailure = () => setFailureToast(null);

  return (
    <ToastContext.Provider
      value={{
        successToast,
        failureToast,
        showSuccess,
        showFailure,
        hideSuccess,
        hideFailure
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
