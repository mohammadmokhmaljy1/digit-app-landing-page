import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import ToolsGrid from "./components/ToolsGrid";
import Pagination from "./components/Pagination";
import Image from './../../assets/images/vihcle-2.jpg';

const toolsData = [
    { id: 1, name: "CAT 773E", category: "Rigid Truck", year: 2013, hours: 16800, image: Image },
    { id: 2, name: "CAT D6R", category: "Track Dozer", year: 2000, hours: 23000, image: Image },
    { id: 3, name: "CAT 980H", category: "Wheel Loader", year: 2012, hours: 19000, image: Image },
    { id: 4, name: "CAT 777G", category: "Mining Truck", year: 2015, hours: 15000, image: Image },
    { id: 5, name: "CAT D8T", category: "Bulldozer", year: 2010, hours: 21000, image: Image },
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortByYear, setSortByYear] = useState("");
    const [sortByPrice, setSortByPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredTools = toolsData.filter((tool) => selectedCategory === "All" || tool.category === selectedCategory);

    const sortedTools = [...filteredTools].sort((a, b) => {
        if (sortByYear) return sortByYear === "asc" ? a.year - b.year : b.year - a.year;
        return 0;
    });

    const totalPages = Math.ceil(sortedTools.length / itemsPerPage);
    const displayedTools = sortedTools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        document.title = 'خدماتنا | Our Services';
    }, []);

    return (
        <>
            <div className="services-hero min-h-100 w-full flex items-center justify-center bg-cover bg-top">
                <h1 className="text-bold text-3xl">خدماتنا - Our Services</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-12 pt-10">
                {/* الفلاتر */}
                <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                {/* القسم الرئيسي */}
                <div className="flex-1">
                    <Sorting sortByYear={sortByYear} setSortByYear={setSortByYear} sortByPrice={sortByPrice} setSortByPrice={setSortByPrice} />
                    <ToolsGrid tools={displayedTools} />
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                </div>
            </div>
        </>
    );
};

export default Services;