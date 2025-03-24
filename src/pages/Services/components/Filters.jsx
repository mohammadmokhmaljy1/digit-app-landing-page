import { useState } from "react";

const Filters = ({ selectedCategory, setSelectedCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const categories = ["All", "Track Dozer", "Rigid Truck", "Wheel Loader", "Mining Truck", "Bulldozer", "Excavator"];

    return (
        <div className="md:w-72 w-full">
            {/* زر إظهار الفلاتر ع الموبايل */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-primary text-white px-4 py-2 rounded-md w-full"
            >
                {isOpen ? "إخفاء الفلاتر" : "عرض الفلاتر"}
            </button>

            {/* صندوق الفلاتر */}
            <div className={`bg-white p-6 shadow-lg rounded-lg mt-3 md:block ${isOpen ? "block" : "hidden"}`}>
                <h3 className="text-xl font-semibold mb-4">التصنيفات</h3>
                <ul>
                    {categories.map((category) => (
                        <li key={category} className="mb-2">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={() => setSelectedCategory(category)}
                                    className="accent-yellow-500"
                                />
                                <span className="text-gray-700">{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Filters;