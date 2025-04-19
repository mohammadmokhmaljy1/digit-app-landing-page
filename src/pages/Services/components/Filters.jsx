import { useState, useEffect } from "react";
import { fetchCategories } from "./../../../services/categoriesServices";
import Loader from "./../../../components/customize/Loader";

const Filters = ({ selectedCategory, setSelectedCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState(["All"]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            try {
                const data = await fetchCategories();
                const categoryNames = data.map((item) => item.name); // حسب شكل الـ API
                setCategories(["All", ...categoryNames]);
            } catch (error) {
                console.error("فشل في جلب التصنيفات:", error);
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    return (
        <div className="md:w-72 w-full">
            {/* زر إظهار/إخفاء الفلاتر في الموبايل */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-primary text-white px-4 py-2 rounded-md w-full"
            >
                {isOpen ? "إخفاء الفلاتر" : "عرض الفلاتر"}
            </button>

            {/* صندوق الفلاتر */}
            <div className={`bg-white p-6 shadow-lg rounded-lg mt-3 md:block ${isOpen ? "block" : "hidden"}`}>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">التصنيفات</h3>

                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-1 gap-3">
                        {categories.map((category, index) => (
                            <label key={index} className={`cursor-pointer flex items-center justify-between border rounded-lg px-4 py-3 shadow-sm transition 
                                ${selectedCategory === category
                                    ? "bg-primary text-white border-primary"
                                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}
                            `}>
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={() => setSelectedCategory(category)}
                                    className="hidden"
                                />
                                <span className="text-sm font-medium">{category}</span>
                                {selectedCategory === category && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filters;