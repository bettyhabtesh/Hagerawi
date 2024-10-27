const Filters = () => {
    const filters = ["All", "Abstract", "Portrait", "Landscape", "Fantasy", "3D Art", "Minimalist", "Pixel Art", "Photography"];
  
    return (
      <div className="flex space-x-4 overflow-x-auto  text-white p-3">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-[#7D677D] focus:outline-none transition">
            {filter}
          </button>
        ))}
      </div>
    );
  };
  
  export default Filters;
  