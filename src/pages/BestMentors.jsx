import { ArrowRight, Search, Star } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BestMentors = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();
    // navigate to Admission form page
    const handleAdmissionClick = () => {
        navigate("/admission");
    };

    const mentorsData = [
        {
            name: "Er. Ankit Kumar",
            subject: "Computer Science/Full Stack Development",
            experience: "2+ years",
            rating: 4.9,
            imageUrl:
                "https://images.unsplash.com/flagged/photo-1596479042555-9265a7fa7983?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Development",
            description: "B.Tech in Computer Science with expertise in Full Stack Development. Skilled in React, Node.js, and modern web technologies, with 2+ years of teaching experience in guiding students toward building real-world projects and strong coding skills."
        },
        {
            name: "Er. Soumya Sindhu",
            subject: "Data Science",
            experience: "1+ years",
            rating: 4.8,
            imageUrl:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Data Science",
            description: "Specialist in Big Data, Python, and Cloud Computing. Loves mentoring students."
        },
        {
            name: "Er. Pulkit Pandey",
            subject: "Frontend Development",
            experience: "2+ years",
            rating: 4.9,
            imageUrl:
                "https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Development",
            description: "Full Stack specialist in MERN stack & Java Spring Boot with real-world industry experience."
        },
        {
            name: "Ms.Samiksha",
            subject: "UI/UX Design",
            experience: "1+ years",
            rating: 4.7,
            imageUrl:
                "https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Design",
            description: "Creative designer with expertise in Figma, Adobe XD, and user experience research."
        },

        {
            name: "Mr.Aryan",
            subject: "Marketing",
            experience: "6+ Months",
            rating: 4.6,
            imageUrl:
                "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Marketing",
            description: "Digital marketing strategist skilled in SEO, SEM, and branding."
        },
    ];

    const categories = ["All", "Development", "Data Science", "Design", "Marketing"];

    const filteredMentors = mentorsData.filter((mentor) => {
        const matchesSearch =
            mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || mentor.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="mt-10 mb-10 bg-white">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 text-[#FE543D] font-medium mb-4">
                            <div className="w-8 h-0.5 bg-[#FE543D]"></div>
                            <span>Our Mentors</span>
                            <div className="w-8 h-0.5 bg-[#FE543D]"></div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A46] mb-4">
                            Meet Our <span className="text-[#2FC7A1]">Best Mentors</span>
                        </h1>
                        <p className="text-lg text-[#4D5756] max-w-2xl mx-auto">
                            Learn from experienced mentors who have years of expertise in their fields.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search mentors..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                                        ? "bg-[#2FC7A1] text-white"
                                        : "bg-white text-[#4D5756] border border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentors Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredMentors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredMentors.map((mentor, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                {/* Rectangle Image */}
                                <div className="relative w-full h-56 overflow-hidden">
                                    <img
                                        src={mentor.imageUrl}
                                        alt={mentor.name}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
                                    />
                                    {/* Category Tag */}
                                    <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-lg">
                                        {mentor.category}
                                    </div>
                                </div>

                                {/* Default Details (hidden on hover) */}
                                <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                                    {/* Rating */}
                                    <div className="flex items-center mb-2">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(mentor.rating)
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-gray-600 ml-2 text-sm">
                                            ({mentor.rating})
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0E2A46]">{mentor.name}</h3>
                                    <p className="text-[#64748B] mt-1">{mentor.subject}</p>
                                    <p className="text-sm text-gray-500 mt-1">{mentor.experience}</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-2xl font-bold">{mentor.name}</h3>
                                    <p className="mt-2 font-medium">{mentor.subject}</p>
                                    <p className="text-sm">{mentor.experience}</p>
                                    <p className="text-sm text-white mt-3 max-w-xs">
                                        {mentor.description}
                                    </p>
                                    <p className="text-sm text-white mt-3">
                                        ⭐ Rated {mentor.rating}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">No mentors found</div>
                )}
            </div>

            {/* CTA */}
            <div className="bg-[#0E2A46] text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Learn from Experts?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of students guided by our top mentors.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={handleAdmissionClick}

                            className="hidden md:flex items-center rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden">

                            <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
                                Get Admission
                            </span>
                            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#35D7AE] rounded-full ml-1">
                                <ArrowRight size={16} className="lg:w-5 lg:h-5" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestMentors;
