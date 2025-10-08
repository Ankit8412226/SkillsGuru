import axios from "axios";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import Alert from "../assets/components/Alert.jsx";

export default function Footer() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubscribe = async () => {
        if (!email) {
            setIsError(true);
            setMessage("Please enter your email.");
            return;
        }

        setLoading(true);
        setMessage("");
        setIsError(false);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/newsletter`,
                { email }
            );

            setIsError(false);
            setMessage(response.data.message || "Subscribed successfully!");
            setEmail("");
        } catch (error) {
            console.error(error);
            setIsError(true);
            setMessage(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <footer
            className="bg-gray-900 text-white relative"
            style={{
                backgroundImage: `url(/bg_img_footer.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Footer content */}
            <div className="relative z-10">
                {/* Top contact info row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-700 border-b border-gray-700">
                    {/* Address */}
                    <div className="flex items-center justify-center gap-3 p-4 sm:p-6">
                        <MapPin className="text-white flex-shrink-0" size={24} />
                        <div className="text-center sm:text-left">
                            <p className="text-[#2FC7A1] text-sm sm:text-base font-medium">Address:</p>
                            <p className="font-semibold text-sm sm:text-base">Office No. D-8, 4th Floor, Habitech Crystal Mall,
                                Knowledge Park III, Greater Noida, Uttar Pradesh – 201306</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-center gap-3 p-4 sm:p-6">
                        <Phone className="text-white flex-shrink-0" size={24} />
                        <div className="text-center sm:text-left">
                            <p className="text-[#2FC7A1] text-sm sm:text-base font-medium">Phone:</p>
                            <p className="font-semibold text-sm sm:text-base">(+91) 8298252909</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-center gap-3 p-4 sm:p-6">
                        <Mail className="text-white flex-shrink-0" size={24} />
                        <div className="text-center sm:text-left">
                            <p className="text-[#2FC7A1] text-sm sm:text-base font-medium">Email:</p>
                            <p className="font-semibold text-sm sm:text-base">Hr@suhtech.top</p>
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {/* Logo */}
                        <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-start">
                            <h2 className="text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2">
                                <img
                                    src="/Skill Guru Logo Teal footer.svg"
                                    alt="Suh Tech Logo"
                                    className="w-28 h-28 sm:w-28 sm:h-28 object-contain"
                                />
                            </h2>

                            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">
                                From learning to earning – Suh Tech helps you build skills that get you hired.
                            </p>

                            <div className="flex gap-3 justify-center sm:justify-start">
                                <a
                                    href="#"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors duration-300"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors duration-300"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>


                        {/* Services */}
                        <div className="text-center sm:text-left">
                            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Our Services:</h3>
                            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Web Development</li>
                                <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Mobile Apps</li>
                                <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› UI/UX Design</li>
                                <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Digital Marketing</li>
                                <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Consulting</li>
                            </ul>
                        </div>

                        {/* Gallery */}
                        <div className="text-center sm:text-left">
                            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Quick Links</h3>
                            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto sm:mx-0">
                                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                    <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Terms & Conditions</li>
                                    <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Privacy Policy</li>
                                    <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› About Us</li>
                                    <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Gallery</li>
                                    <li className="hover:text-[#2FC7A1] transition-colors cursor-pointer">› Blog</li>
                                </ul>


                            </div>
                        </div>

                        {/* Subscribe */}
                        <div className="text-center sm:text-left">
                            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Subscribe</h3>
                            <div className="max-w-xs mx-auto sm:mx-0">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white border-2 border-gray-300 w-full px-3 py-2 sm:py-3 rounded-md text-black text-sm sm:text-base mb-3 focus:outline-none focus:border-[#2FC7A1] transition-colors"
                                />
                                <button className="w-full bg-[#2FC7A1] hover:bg-[#26A085] text-white font-semibold py-2 sm:py-3 rounded-md text-sm sm:text-base transition-colors duration-300 transform hover:scale-105" onClick={handleSubscribe}>
                                    {loading ? "SUBSCRIBING..." : "SUBSCRIBE NOW"}
                                </button>

                                {message && (
                                    <div className="mt-3">
                                        <Alert variant={isError ? "error" : "success"} title={isError ? "Subscription failed" : "Success"} message={message} />
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-[#222222] border-t border-white/20 text-center text-gray-300 text-xs sm:text-sm py-3 sm:py-4 px-4">
                    <p>
                        Copyright ©️ {new Date().getFullYear()}{" "}
                        <span className="text-[#2FC7A1] font-semibold">SuhTech</span> || All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
