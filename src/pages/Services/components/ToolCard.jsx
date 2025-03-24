const ToolCard = ({ tool }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 relative">
            <img src={tool.image} alt={tool.name} className="w-full h-40 object-cover rounded-md" />
            
            <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs">للبيع</span>

            <h3 className="text-lg font-bold mt-3">{tool.name}</h3>
            <p className="text-gray-500 text-sm">{tool.category}</p>
            <p className="text-gray-600 text-sm">السنة: {tool.year}</p>
            <p className="text-gray-600 text-sm">الساعات: {tool.hours}</p>

            <button className="mt-3 bg-primary text-white w-full py-2 rounded-md">
                اطلب السعر
            </button>
        </div>
    );
};

export default ToolCard;