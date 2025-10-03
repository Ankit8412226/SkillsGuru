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
            {/* Background Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 py-8 w-full max-w-7xl mx-auto">
                <p className="text-red-400 font-semibold text-sm sm:text-base mb-2 sm:mb-4">
                    Join Our New Session
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug">
                    Lorem ipsum dolor sit. <br />
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        (+91)00000000000000
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
            <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 top-1/2 sm:top-1/3 transform -translate-y-1/2 sm:translate-y-0 flex flex-col items-center z-10">
                <img
                    src={"./music_player.png"}
                    alt="music player"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm underline cursor-pointer hover:text-red-400 transition-colors duration-300">
                    watch now
                </p>
            </div>

            {/* Decorative Elements */}
            <img
                src={"./star.png"}
                alt="star"
                className="absolute left-1/2 top-1/2 sm:top-[55%] w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 z-10 animate-pulse hidden sm:block"
            />
            <img
                src={"./zig_zag.png"}
                alt="zigzag"
                className="absolute right-2 sm:right-4 md:right-8 lg:right-10 top-2 sm:top-4 md:top-8 w-20 sm:w-24 md:w-32 lg:w-40 h-auto z-10 opacity-70 hidden md:block"
            />
            <img
                src={"./swing.png"}
                alt="swing"
                className="absolute right-8 sm:right-12 md:right-20 lg:right-32 bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 z-20 opacity-80 hidden sm:block"
            />
            <img
                src="./semi_circle.png"
                alt="semi_circle"
                className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-4 sm:left-6 md:left-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 z-10 opacity-70 hidden sm:block"
            />

            {/* Mobile Gradient */}
            <div className="absolute inset-0 pointer-events-none z-5">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent sm:hidden"></div>
            </div>
        </section>
    );
};

export default New_session;
