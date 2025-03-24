import { useEffect, useState } from "react";
import ToolCard from './ToolCard';
import LoremImage from './../../../assets/images/vihcle-2.jpg';
import { Link } from "react-router-dom";

const AvailibleTools = () => {
    const [tools, setTools] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const data = [
        { id: 1, name: "CAT 980H", category: "Wheel Loader", year: 2012, hours: 19000, price: 180000, image: LoremImage },
        { id: 2, name: "CAT 980H", category: "Wheel Loader", year: 2012, hours: 19000, price: 180000, image: LoremImage },
        { id: 3, name: "CAT 980H", category: "Wheel Loader", year: 2012, hours: 19000, price: 180000, image: LoremImage },
        { id: 4, name: "CAT 980H", category: "Wheel Loader", year: 2012, hours: 19000, price: 180000, image: LoremImage },
        { id: 5, name: "CAT D6R", category: "Bulldozer", year: 2015, hours: 15000, price: 250000, image: LoremImage },
        { id: 6, name: "Komatsu PC200", category: "Excavator", year: 2018, hours: 12000, price: 220000, image: LoremImage },
        { id: 7, name: "Volvo L220H", category: "Wheel Loader", year: 2020, hours: 8000, price: 300000, image: LoremImage },
        { id: 8, name: "Hitachi ZX350", category: "Excavator", year: 2017, hours: 11000, price: 270000, image: LoremImage },
    ];

    useEffect(() => {
        setTools(data);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTools = tools.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(tools.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-10 flex items-center justify-center w-full">
            <div className="flex items-center justify-center flex-wrap gap-12">

                <h1 className="text-2xl text-center w-full">المعدات المتوفرة</h1>

                {
                    currentTools.map((item) =>
                        <ToolCard
                            key={item.id}
                            name={item.name}
                            category={item.category}
                            year={item.year}
                            hours={item.hours}
                            price={item.price}
                            image={item.image}
                        />
                    )
                }

                <div className="flex w-full justify-around items-center flex-wrap">
                    <Link className="btn" to='/services/'>عرض الكل</Link>

                    {/* أزرار الـ pagination */}
                    <div className="flex gap-4">
                        <button onClick={prevPage} disabled={currentPage === 1} className={`btn ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                            السابق
                        </button>
                        <span className="text-lg font-semibold">
                            {currentPage} / {Math.ceil(tools.length / itemsPerPage)}
                        </span>
                        <button onClick={nextPage} disabled={currentPage === Math.ceil(tools.length / itemsPerPage)} className={`btn ${currentPage === Math.ceil(tools.length / itemsPerPage) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                            التالي
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvailibleTools;
