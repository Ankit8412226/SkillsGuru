import Loader from "./Loader.jsx";

const LoaderOverlay = ({ show = false, label = "Loading..." }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <Loader label={label} />
    </div>
  );
};

export default LoaderOverlay;


