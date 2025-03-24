import ToolCard from "./ToolCard";

const ToolsGrid = ({ tools }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    );
};

export default ToolsGrid;