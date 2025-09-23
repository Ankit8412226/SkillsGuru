import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Pinterest } from "lucide-react";

export default function Footer() {
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
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Footer content */}
            <div className="relative z-10">
                {/* Top contact info row */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700 border-b border-gray-700">
                    {/* Address */}
                    <div className="flex items-center justify-center gap-3 p-6">
                        <MapPin className="text-white" size={36} />
                        <div>
                            <p className="text-[#2FC7A1]">Address:</p>
                            <p className="font-semibold">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-center gap-3 p-6">
                        <Phone className="text-white" size={36} />
                        <div>
                            <p className="text-[#2FC7A1]">Phone:</p>
                            <p className="font-semibold">(00) 875 784 568</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-center gap-3 p-6">
                        <Mail className="text-white" size={36} />
                        <div>
                            <p className="text-[#2FC7A1]">Email:</p>
                            <p className="font-semibold">suhtech@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <img src="/logo_suh.jpg" alt="Suh Tech Logo" className="w-8 h-8 object-contain" />
                            Suh Tech
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ad amet earum magnam aliquid repellendus rem accusantium laborum cupiditate vel asperiores, at facere, quidem ipsa odio culpa quos, provident ea.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                <Pinterest size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our Services:</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>› Lorem ipsum dolor sit amet.</li>
                            <li>› Lorem ipsum dolor sit amet.</li>
                            <li>› Lorem ipsum dolor sit amet.</li>
                            <li>› Lorem ipsum dolor sit amet.</li>
                            <li>› Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>

                    {/* Gallery */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            <img src="/gallery1.png" alt="gallery1" className="w-full h-20 object-cover rounded-md" />
                            <img src="/gallery2.png" alt="gallery2" className="w-full h-20 object-cover rounded-md" />
                            <img src="/gallery3.png" alt="gallery3" className="w-full h-20 object-cover rounded-md" />
                            <img src="/gallery4.png" alt="gallery4" className="w-full h-20 object-cover rounded-md" />
                            <img src="/gallery5.png" alt="gallery5" className="w-full h-20 object-cover rounded-md" />
                            <img src="/gallery6.png" alt="gallery6" className="w-full h-20 object-cover rounded-md" />
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
                        <input
                            type="email"
                            placeholder="Enter your email:"
                            className=" bg-white border-white w-full px-3 py-2 rounded-md text-black mb-3"
                        />
                        <button className="w-full bg-[#2FC7A1] hover:bg-[#2FC7A1] text-white font-semibold py-2 rounded-md">
                            SUBSCRIBE NOW
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 bg-[#222222] border-t border-white/20 text-center text-gray-300 text-sm py-4">
                    Copyright ©️ {new Date().getFullYear()}{" "}
                    <span className="text-[#2FC7A1] font-semibold">SuhTech</span> || All rights reserved.
                </div>
            </div>
        </footer>
    );
}