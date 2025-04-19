const Sorting = ({ sortByYear, setSortByYear, sortByPrice, setSortByPrice }) => {
    const handleYearChange = (e) => {
        setSortByYear(e.target.value);
        setSortByPrice(""); // إعادة تعيين الترتيب بالسعر عند اختيار ترتيب بالسنة
    };

    const handlePriceChange = (e) => {
        setSortByPrice(e.target.value);
        setSortByYear(""); // إعادة تعيين الترتيب بالسنة عند اختيار ترتيب بالسعر
    };

    return (
        <div className="flex flex-wrap gap-4 mb-6">
            <select
                className="p-2 border rounded-md text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                value={sortByYear}
                onChange={handleYearChange}
            >
                <option value="" hidden>حسب السنة</option>
                <option value="asc">الأحدث أولًا</option>
                <option value="desc">الأقدم أولًا</option>
            </select>

            <select
                className="p-2 border rounded-md text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                value={sortByPrice}
                onChange={handlePriceChange}
            >
                <option value="" hidden>حسب السعر</option>
                <option value="asc">الأرخص أولًا</option>
                <option value="desc">الأغلى أولًا</option>
            </select>
        </div>
    );
};

export default Sorting;