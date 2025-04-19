import { useEffect, useState } from "react";
import ToolCard from './ToolCard';
import { fetchProducts } from "./../../../services/productsServices";
import { Link } from "react-router-dom";

const AvailibleTools = () => {
    const [tools, setTools] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        const getData = async () => {
            try {
                const products = await fetchProducts();
                setTools(products);
            } catch (error) {
                console.error("خطأ في جلب المنتجات:", error);
            }
        };

        getData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTools = tools.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(tools.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="p-10 flex items-center justify-center w-full">
            <div className="flex items-center justify-center flex-wrap gap-12">
                <h1 className="text-2xl text-center w-full">المعدات المتوفرة</h1>

                {
                    currentTools.map((item) =>
                        <ToolCard
                            key={item.id}
                            name={item.name}
                            category={item.category?.name} // استخراج اسم الفئة
                            year={new Date(item.relesed_date).getFullYear()} // استخراج السنة من تاريخ الإصدار
                            hours={item.working_hours} // ساعات العمل
                            price={item.price} // السعر
                            image={item.images?.[0]?.image || "/fallback.jpg"} // استخدام أول صورة في المصفوفة، أو صورة افتراضية
                        />
                    )
                }

                <div className="flex w-full justify-center items-center flex-wrap gap-2">
                    <Link className="btn" to='/services/'>عرض الكل</Link>
                    <span>|</span>
                    <div className="flex gap-2">
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-md text-lg font-semibold transition 
                                ${currentPage === number ? "bg-primary text-white" : "bg-gray-200 hover:bg-primary hover:text-white"}`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailibleTools;