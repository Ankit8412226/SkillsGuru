import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "lucide-react";

const variants = {
  success: {
    base: "bg-[#F0FDF9] text-[#065F46] border-[#2FC7A1]",
    icon: <CheckCircle className="w-5 h-5 text-[#2FC7A1]" />,
  },
  error: {
    base: "bg-red-50 text-red-700 border-red-300",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  info: {
    base: "bg-blue-50 text-blue-700 border-blue-300",
    icon: <Info className="w-5 h-5 text-blue-500" />,
  },
  warning: {
    base: "bg-yellow-50 text-yellow-800 border-yellow-300",
    icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  },
};

const Alert = ({ variant = "info", title, message, onClose }) => {
  const v = variants[variant] || variants.info;

  return (
    <div
      className={`flex items-start gap-3 border rounded-lg p-3 ${v.base}`}
      role="alert"
    >
      <div className="mt-[2px]">{v.icon}</div>
      <div className="flex-1">
        {title && <div className="font-semibold">{title}</div>}
        {message && <div className="text-sm">{message}</div>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-sm opacity-70 hover:opacity-100"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;
