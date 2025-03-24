const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className="flex justify-center items-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
