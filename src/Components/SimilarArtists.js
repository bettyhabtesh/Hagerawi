import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Card = ({ image, name, description }) => {
  return (
    <div className="relative w-80 h-80 rounded-lg border border-[#F3AFF3] overflow-hidden shadow-lg m-4 p-4 flex flex-col items-center bg-[#121212]">
      <img src={require(`../Assets/${image}`)} alt={name} className="w-20 h-20 rounded-full object-cover mb-4" />
      <h3 className="text-white text-lg font-semibold">{name}</h3>
      <p className="text-gray-400 text-center text-sm mb-4">{description}</p>
      <button className="bg-[#F3AFF3] text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-300">
        Follow
      </button>
    </div>
  );
};

const SimilarArtists = () => {
  const artists = [
    { image: "yoda.png", name: "Blue Boy", description: "Blah Blah / Blah Blah / Blah Blah" },
    { image: "yoda.png", name: "Artist 2", description: "Blah Blah / Blah Blah / Blah Blah" },
    { image: "yoda.png", name: "Artist 3", description: "Blah Blah / Blah Blah / Blah Blah" },
    { image: "yoda.png", name: "Artist 4", description: "Blah Blah / Blah Blah / Blah Blah" },
    { image: "yoda.png", name: "Blue Boy", description: "Blah Blah / Blah Blah / Blah Blah" },
    { image: "yoda.png", name: "Artist 2", description: "Blah Blah / Blah Blah / Blah Blah" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, artists.length - visibleCards));
  };

  return (
    <div className="bg-[#121212] text-white py-6 px-1">
      <div className="text-center">
        <h1 className="text-2xl mb-6 font-semibold">Similar Artists</h1>
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
            style={{ transform: `translateX(-${currentIndex * 17}rem)` }}
          >
            {artists.slice(currentIndex, currentIndex + visibleCards).map((artist, index) => (
              <Card key={index} image={artist.image} name={artist.name} description={artist.description} />
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

export default SimilarArtists;
