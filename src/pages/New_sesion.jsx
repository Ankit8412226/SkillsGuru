import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const New_session = () => {
    const navigate = useNavigate();
    // navigate to Admission form page
    const handleAdmissionClick = () => {
        navigate("/admission");
    };

    return (
        <section
            className="relative flex items-center bg-[#0E2A46] text-white overflow-hidden"
            style={{
                backgroundImage: `url(${"./bg_sesion.jpeg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            
            {/* Left Content */}
            <div className="relative z-10 flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 py-8 w-full max-w-7xl mx-auto">
                <p className="text-red-400 font-semibold text-sm sm:text-base mb-2 sm:mb-4">
                    Join Our New Session
                </p>
                <h1 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-6xl font-medium leading-tight sm:leading-snug pb-4">
                    Upgrade Your Future with AI-Powered Learning. <br />
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl">
                        (+91) 8298252909
                    </span>
                </h1>

                {/* Join Button */}
                <div className="flex items-start mt-6 sm:mt-8">
                    <button
                        onClick={handleAdmissionClick}
                        className="flex items-center justify-between rounded-full bg-[#2FC7A1] text-white font-medium h-10 sm:h-12 md:h-14 pl-4 sm:pl-6 md:pl-8 pr-0 overflow-hidden gap-2 sm:gap-4 hover:bg-[#28B898] transition-colors duration-300 group"
                    >
                        <span className="text-xs sm:text-sm md:text-base font-medium text-white">
                            Admission open
                        </span>
                        <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full group-hover:bg-[#2FC7A1] transition-colors duration-300">
                            <ArrowRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Side Music Player */}
            <div className="absolute right-4 sm:right-8 md:right-16 lg:right-28 xl:right-32 top-1/2 sm:top-1/3 transform -translate-y-1/2 sm:translate-y-0 flex flex-col items-center z-10">
                <img
                    src={"./music_player.png"}
                    alt="music player"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-105 transition-transform duration-300 cursor-pointer -translate-x-30"
                />
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm underline cursor-pointer hover:text-red-400 transition-colors duration-300 -translate-x-30">
                    watch now
                </p>
            </div>

           

            {/* Mobile Gradient */}
            {/* <div className="absolute inset-0 pointer-events-none z-5">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent sm:hidden"></div>
            </div> */}
        </section>
    );
};

export default New_session;
