import { ArrowRight } from "lucide-react"

const New_sesion = () => {
    return (
        <section
            className="relative w-full h-screen flex items-center bg-[#0E2A46] text-white"
            style={{
                backgroundImage: `url(${"./bg_sesion.jpeg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >


            {/* Left Content */}
            <div className="relative z-10 flex flex-col px-6 md:px-24">
                <p className="text-red-400 font-semibold">Join Our New Session</p>
                <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-snug">
                    Lorem ipsum dolor sit. <br />
                    <span>(+91)00000000000000</span>
                </h1>

                {/* Join Button */}
                <div className="flex item-start mt-6">
                    <button className="flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 pl-8 pr-0 overflow-hidden gap-4">
                        <span className="text-sm leading-8 font-medium text-white">
                            Admission open
                        </span>
                        <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                            <ArrowRight size={20} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Side Music Player (using PNG) */}
            <div className="absolute right-90 top-1/3 flex flex-col items-center z-10">
                <img
                    src={"./music_player.png"}
                    alt="music player"
                    className="w-28 h-28 hover:scale-105 transition"
                />
                <p className="mt-3 text-sm underline">watch now</p>
            </div>

            {/* Decorations */}
            <img
                src={"./star.png"}
                alt="star"
                className="absolute left-[50%] top-[55%] w-8 h-8 z-10"
            />
            <img
                src={"./zig_zag.png"}
                alt="zigzag"
                className="absolute right-10 top-1 w-40 h-70 z-15"
            />

            <img
                src={"./swing.png"}
                alt="swing"
                className="absolute right-50 bottom-25 w-20 h-20 z-20"
            />
            <img
                src="./semi_circle.png"
                alt="semi_circle"
                className="absolute top-20 left-8 w-10 h-10 z-8"
            />
        </section>
    );
};

export default New_sesion;
