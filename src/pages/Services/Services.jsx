import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import ToolsGrid from "./components/ToolsGrid";
import Pagination from "./components/Pagination";
import { fetchProducts } from "./../../services/productsServices";

const Services = () => {
    const [tools, setTools] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortByYear, setSortByYear] = useState("");
    const [sortByPrice, setSortByPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setTools(data);
            } catch (error) {
                console.error("Error fetching tools:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        document.title = "خدماتنا | Our Services";
    }, []);

    // إعادة الصفحة إلى 1 عند تغيير الفلاتر أو الفرز
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortByYear, sortByPrice]);

    // فلترة الأدوات حسب التصنيف
    const filteredTools = tools.filter((tool) =>
        selectedCategory === "All" || tool.category?.name === selectedCategory
    );

    // ترتيب الأدوات بعد التصفية
    const sortedTools = [...filteredTools].sort((a, b) => {
        if (sortByYear) {
            return sortByYear === "desc"
                ? new Date(a.relesed_date) - new Date(b.relesed_date)
                : new Date(b.relesed_date) - new Date(a.relesed_date);
        }

        if (sortByPrice) {
            return sortByPrice === "asc"
                ? parseFloat(a.price || 0) - parseFloat(b.price || 0)
                : parseFloat(b.price || 0) - parseFloat(a.price || 0);
        }

        return 0;
    });

    const totalPages = Math.ceil(sortedTools.length / itemsPerPage);
    const displayedTools = sortedTools.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <div className="services-hero min-h-100 w-full flex items-center justify-center bg-cover bg-top">
                <h1 className="text-bold text-3xl">خدم_اتنا - Our Services</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-12 pt-10">
                {/* الفلاتر */}
                <Filters
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                {/* القسم الرئيسي */}
                <div className="flex-1">
                    <Sorting
                        sortByYear={sortByYear}
                        setSortByYear={setSortByYear}
                        sortByPrice={sortByPrice}
                        setSortByPrice={setSortByPrice}
                    />
                    <ToolsGrid tools={displayedTools} />
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </>
    );
};

export default Services;