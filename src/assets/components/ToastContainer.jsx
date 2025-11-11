import React from 'react';
import { useToast } from '../../context/ToastContext';
import SuccessToast from './SuccessToast';
import FailureToast from './FailureToast';

const ToastContainer = () => {
  const { successToast, failureToast, hideSuccess, hideFailure } = useToast();

  return (
    <div className="fixed top-20 right-4 z-50 space-y-4">
      {successToast && (
        <div className="animate-slide-in-right">
          <SuccessToast onClose={hideSuccess} message={successToast} />
        </div>
      )}
      {failureToast && (
        <div className="animate-slide-in-right">
          <FailureToast onClose={hideFailure} message={failureToast} />
        </div>
      )}
    </div>
  );
};

export default ToastContainer;
