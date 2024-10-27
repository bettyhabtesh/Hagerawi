import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-10 px-6">
           
      {/* Top Border */}
      <div className="border-t border-[#F3AFF3] mt-6 mb-6"></div>
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between">
        
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <div className="text-[#F3AFF3] text-4xl font-palette-mosaic">HAGERAWI</div>
          <p className="text-sm mt-4">
            Ethiopia's first digital marketplace for non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital arts from local artists.
          </p>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-2/3 flex justify-between text-center md:text-left">
          <div>
            <h2 className="text-white font-semibold mb-2">My Account</h2>
            <ul>
              <li className="text-gray-400 text-sm">Profile</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">My Account</h2>
            <ul>
              <li className="text-gray-400 text-sm">Profile</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">My Account</h2>
            <ul>
              <li className="text-gray-400 text-sm">Profile</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">My Account</h2>
            <ul>
              <li className="text-gray-400 text-sm">Profile</li>
            </ul>
          </div>
        </div>
      </div>
   
    </footer>
  );
};

export default Footer;
