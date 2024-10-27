import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-[#F3AFF3] text-4xl font-palette-mosaic">HAGERAWI</div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#403040] text-white px-4 py-2 rounded-full focus:outline-none w-64"
        />
        <span className="absolute right-3 top-2.5 text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-white">
        {/* User Icon with Circle Background */}
        <div className="bg-[#403040] p-2 rounded-full">
          <FaUserCircle size={24} />
        </div>
        {/* Shopping Cart Icon with Circle Background will make it outlined and filled depending on if it has items later */}
        <div className="bg-[#403040] p-2 rounded-full">
          <FaShoppingCart size={24} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
