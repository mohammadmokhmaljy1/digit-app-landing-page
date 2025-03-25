const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#EDB702] z-1000">
            <div className="relative w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
            <p className="text-white text-lg font-semibold mt-4">جارِ التحميل...</p>
        </div>
    );
};

export default Loader;