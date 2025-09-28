import { FaHandshake, FaChartBar, FaUniversity, FaIndustry, FaTruck, FaHeartbeat, FaLaptopCode, FaCogs, FaHardHat, FaGraduationCap, FaGlobe } from "react-icons/fa";

const b2bIndustries = [
    { icon: <FaChartBar className="text-blue-500 text-3xl" />, name: "Advertising, Media & Market Research & Entertainment", desc: "Includes Decision Makers, Top Executives in the Industry, Departmental Heads." },
    { icon: <FaUniversity className="text-green-500 text-3xl" />, name: "Financial Sector / Banks / Insurance", desc: "Includes Finance, Banking & Insurance Decision Makers and Specialists." },
    { icon: <FaGlobe className="text-yellow-500 text-3xl" />, name: "Public Utilities & Services", desc: "Includes Government Officials, Bureaucrats, Decision Makers, Directors." },
    { icon: <FaTruck className="text-indigo-500 text-3xl" />, name: "Retail & Supply Chain", desc: "Specializes in Country Head, Logistics, Supply Chain Leaders." },
    { icon: <FaHeartbeat className="text-red-500 text-3xl" />, name: "Healthcare Services / Medical Devices / Pharmaceuticals", desc: "Includes Physicians, Practitioners, Specialists, Doctors, Surgeons & more." },
    { icon: <FaLaptopCode className="text-purple-500 text-3xl" />, name: "Information Technology / Telecommunication & Technical Operations", desc: "Top IT Executives, HOD's, CXO & more." },
    { icon: <FaIndustry className="text-pink-500 text-3xl" />, name: "Manufacturing / Production / Wholesale", desc: "Managers, Decision Makers, Product Specialists in specific industries." },
    { icon: <FaHardHat className="text-orange-500 text-3xl" />, name: "Construction / Engineering / Real Estate / Architecture", desc: "Top Designations, Decision Makers, Industry Leaders." },
    { icon: <FaGraduationCap className="text-teal-500 text-3xl" />, name: "Education & Professional Studies", desc: "Includes Education Professionals, Directors, Institute Owners, Faculty." },
    { icon: <FaHandshake className="text-gray-500 text-3xl" />, name: "Others", desc: "Industry Leaders, Influencers, Decision Makers across sectors." },
];

export default function B2BSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-3">B2B Panel Highlights</h2>
                <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
                    Our B2B panel connects businesses with decision-makers, executives, and specialists across diverse industries. We focus on delivering accurate, high-quality data to drive informed business strategies and partnerships.
                </p>

                {/* Industry list */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {b2bIndustries.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div>{item.icon}</div>
                            <div>
                                <h3 className="font-semibold text-nm-900">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
