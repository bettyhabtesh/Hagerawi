import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Card = ({ image, title, artist, price }) => {
  return (
    <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-lg m-4">
      <img src={require(`../Assets/${image}`)} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#685668] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-[#F3AFF3]">{artist}</p>
        <p className="text-white">Floor: {price} ETH</p>
      </div>
    </div>
  );
};

const SimilarArts = () => {
  const items = [
    { image: "image1.png", title: "Laughing in Colors", artist: "Blue Boy", price: "0.03" },
    { image: "image2.png", title: "Art Piece 2", artist: "Artist 2", price: "0.05" },
    { image: "image3.png", title: "Art Piece 3", artist: "Artist 3", price: "0.02" },
    { image: "image4.png", title: "Art Piece 4", artist: "Artist 4", price: "0.04" },
    { image: "image1.png", title: "Laughing in Colors", artist: "Blue Boy", price: "0.03" },
    { image: "image2.png", title: "Art Piece 2", artist: "Artist 2", price: "0.05" },
    { image: "image3.png", title: "Art Piece 3", artist: "Artist 3", price: "0.02" },
    { image: "image4.png", title: "Art Piece 4", artist: "Artist 4", price: "0.04" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - visibleCards));
  };

  return (
    <div className='bg-[#121212] text-white py-6 px-1 '> 
   <div className='text-center'>
  <h1 className='text-2xl mb-6 font-semibold'>Similar Arts</h1>
  <h4 className='text-[#F3AFF3]'>Based on your interest</h4>
</div>
 <div className="relative flex items-center">
      {/* Previous Button */}
      <button onClick={handlePrev} className="absolute left-0 z-10 p-2 text-[#F3AFF3] rounded-full">
        <FaChevronLeft size={24} />
      </button>

      {/* Cards Container */}
      <div className="flex justify-center overflow-hidden w-full p-4">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 21}rem)` }}
        >
          {items.slice(currentIndex, currentIndex + visibleCards).map((item, index) => (
            <Card key={index} image={item.image} title={item.title} artist={item.artist} price={item.price} />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button onClick={handleNext} className="absolute right-0 z-10 p-2 text-[#F3AFF3] rounded-full">
        <FaChevronRight size={24} />
      </button>
    </div>
    </div>
  );
};

export default SimilarArts;
