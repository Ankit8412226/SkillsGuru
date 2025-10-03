import React from "react";
import { Award, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const Certification = () => {
  const navigate = useNavigate();

  const certifications = [
    {
      title: "Full Stack Development Certification",
      provider: "SuH Tech",
      duration: "Duration: 6 Months",
      rating: 4.9,
      description:
        "Hands-on certification covering React, Node.js, and cloud deployment. Perfect for students aspiring to become industry-ready developers.",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/01/03/37/66/1000_F_103376621_qsfcQCz9cfDys6NPhytatk2JQeDfm8FS.jpg",
    },
    {
      title: "Data Science & AI Certification",
      provider: "SuH Tech",
      duration: "Duration: 8 Months",
      rating: 4.8,
      description:
        "Learn Python, Machine Learning, and AI concepts with practical real-world projects and mentorship. Ideal for rewarding careers in Data Science, AI, and Analytics.",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/01/03/37/66/1000_F_103376621_qsfcQCz9cfDys6NPhytatk2JQeDfm8FS.jpg",
    },
    {
      title: "UI/UX Design Certification",
      provider: "SuH Tech",
      duration: "Duration: 4 Months",
      rating: 4.7,
      description:
        "Master UI/UX design with Figma, Adobe XD, and usability research through hands-on training. Get certified to start your career as a professional designer.",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/01/03/37/66/1000_F_103376621_qsfcQCz9cfDys6NPhytatk2JQeDfm8FS.jpg",
    },
  ];

  // Generate styled PDF Certificate
  const generateCertificate = ({ name, course, provider, date }) => {
    const doc = new jsPDF("landscape");

    const img = new Image();
    img.src = "./logo_suh.jpg"; // Put logo_suh.jpg inside public/ folder

    img.onload = () => {
      // Add logo
      doc.addImage(img, "JPEG", 120, 10, 40, 40); // x, y, width, height

      // Title
      doc.setFontSize(28);
      doc.setFont("helvetica", "bold");
      doc.text("CERTIFICATE OF COMPLETION", 148, 55, null, null, "center");

      // Presented to
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text("Presented to", 148, 65, null, null, "center");

      // Name
      doc.setFontSize(26);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(47, 199, 161);
      doc.text(name, 148, 85, null, null, "center");

      //  text color to black
      doc.setTextColor(0, 0, 0);

      // Course details
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text(
        "For successfully completing the course",
        148,
        105,
        null,
        null,
        "center"
      );

      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text(course, 148, 120, null, null, "center");

      // Provider
      doc.setFontSize(14);
      doc.setFont("helvetica", "italic");
      doc.text(`Provided by ${provider}`, 148, 140, null, null, "center");

      // Date
      doc.setFontSize(12);
      doc.setTextColor(100);
      doc.text(`On ${date}`, 148, 155, null, null, "center");

      // Save file
      doc.save(`${name}-certificate.pdf`);
    };
  }; 

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#FE543D] font-medium mb-4">
            <div className="w-8 h-0.5 bg-[#FE543D]"></div>
            <span>Certification Programs</span>
            <div className="w-8 h-0.5 bg-[#FE543D]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A46] mb-4">
            Get Certified <span className="text-[#2FC7A1]"> with SuH Tech</span>
          </h1>
          <p className="text-lg text-[#4D5756] max-w-2xl mx-auto">
            Earn professional certifications to boost your career and prove your
            skills to employers worldwide.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0E2A46] mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{cert.provider}</p>
                <p className="text-sm text-[#2FC7A1] font-medium mb-4">
                  ⏳ {cert.duration}
                </p>
                <p className="text-gray-600 mb-4">{cert.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(cert.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 ml-2 text-sm">
                    ({cert.rating})
                  </span>
                </div>

                <button
                  onClick={() =>
                    generateCertificate({
                      name: "Akriti Nanda", // <-- Replace with dynamic name if needed
                      course: cert.title,
                      provider: cert.provider,
                      date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      }),
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2FC7A1] text-white font-medium py-2 hover:bg-[#28B895] transition"
                >
                  <Award className="w-5 h-5" />
                  Get Certified
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
