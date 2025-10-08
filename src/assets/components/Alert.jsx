const variants = {
  success: {
    base: "bg-[#F0FDF9] text-[#065F46] border-[#2FC7A1]",
    icon: "✅",
  },
  error: {
    base: "bg-red-50 text-red-700 border-red-300",
    icon: "⚠️",
  },
  info: {
    base: "bg-blue-50 text-blue-700 border-blue-300",
    icon: "ℹ️",
  },
  warning: {
    base: "bg-yellow-50 text-yellow-800 border-yellow-300",
    icon: "⚠️",
  },
};

const Alert = ({ variant = "info", title, message, onClose }) => {
  const v = variants[variant] || variants.info;
  return (
    <div className={`flex items-start gap-3 border rounded-lg p-3 ${v.base}`} role="alert">
      <div className="text-xl leading-none">{v.icon}</div>
      <div className="flex-1">
        {title && <div className="font-semibold">{title}</div>}
        {message && <div className="text-sm">{message}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">✖</button>
      )}
    </div>
  );
};

export default Alert;


