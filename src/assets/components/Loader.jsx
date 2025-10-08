const Loader = ({ label = "Loading...", className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-[#2FC7A1] border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-[#0E2A46] animate-spin-slow"></div>
      </div>
      <p className="mt-4 text-[#0E2A46] font-medium">{label}</p>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.6s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;


