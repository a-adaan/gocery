export default function FilterBar() {
  return (
    <div className="flex items-center justify-start lg:justify-end gap-5 w-full lg:w-[765px]">
      {/* Category Dropdown */}
      <div className="flex items-center w-1/2 lg:w-auto lg:space-x-2">
        <label className="hidden lg:block text-base font-normal text-text">
          Category:
        </label>
        <select className="select select-bordered bg-white w-full lg:w-[187px] h-[43px] focus:ring-1 focus:ring-primary rounded-full focus:outline-none text-base">
          <option>Vegetable</option>
          <option>Fruit</option>
          <option>Dairy</option>
        </select>
      </div>

      {/* Sort By Dropdown */}
      <div className="flex items-center w-1/2 lg:w-auto space-x-2">
        <label className="hidden lg:block text-base font-normal text-text">
          Sort By:
        </label>
        <select
          defaultValue="Best Match"
          className="select select-bordered bg-white w-full lg:w-[187px] h-[43px] focus:ring-1 focus:ring-primary rounded-full focus:outline-none text-base"
        >
          <option value="Best Match">Best Match</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>

      {/* View Toggles */}
      {/* <div className="flex items-center space-x-2">
        <label className="text-base font-normal text-text">View:</label>
        <div className="flex space-x-2"> */}
      {/* Grid View */}
      {/* <button className="p-2 rounded bg-primary text-white hover:bg-orange-500">
            <FaTh size={22} />
          </button> */}
      {/* List View */}
      {/* <button className="p-2 rounded border border-gray-300 hover:bg-gray-100">
            <FaBars size={22} />
          </button> */}
      {/* </div>
      </div> */}
    </div>
  );
}
