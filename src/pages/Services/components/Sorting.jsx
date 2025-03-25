const Sorting = ({ sortByYear, setSortByYear, sortByPrice, setSortByPrice }) => {
    return (
        <div className="flex gap-4 mb-6 overflow-auto">
            <select
                className="p-2 border rounded-md text-gray-700 cursor-pointer"
                value={sortByYear}
                onChange={(e) => setSortByYear(e.target.value)}
            >
                <option value="" hidden>حسب السنة</option>
                <option value="asc">الأحدث أولًا</option>
                <option value="desc">الأقدم أولًا</option>
            </select>

            <select
                className="p-2 border rounded-md text-gray-700 cursor-pointer"
                value={sortByPrice}
                onChange={(e) => setSortByPrice(e.target.value)}
            >
                <option value="" hidden>حسب السعر</option>
                <option value="asc">الأرخص أولًا</option>
                <option value="desc">الأغلى أولًا</option>
            </select>
        </div>
    );
};

export default Sorting;
