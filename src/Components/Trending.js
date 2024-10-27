import React from 'react';

const artworks = [
  { image: 'image5.png', title: 'Laughing in Colors', artist: 'Blue Boy', price: '0.03' },
  { image: 'image8.png', title: 'Laughing in Colors', artist: 'Blue Boy', price: '0.03' },
  { image: 'image6.png', title: 'Laughing in Colors', artist: 'Blue Boy', price: '0.03' },
  { image: 'image10.png', title: 'Laughing in Colors', artist: 'Blue Boy', price: '0.03' },
  { image: 'image7.png', title: 'Laughing in Colors', artist: 'Blue Boy', price: '0.03' },
  { image: 'image9.png', title: 'Laughing in Colors', artist: 'Blue Boy', price: '0.03' },
];

const Card = ({ image, title, artist, price, height }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg" style={{ height: `${height}px`, width: '350px' }}>
      <img
        src={require(`../Assets/${image}`)}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      />
      {title && (
        <div className="absolute inset-0 bg-[#685668] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg border-2 border-[#F3AFF3]">
          <h3 className="text-white text-lg">{title}</h3>
          <p className="text-purple-400">{artist}</p>
          <p className="text-purple-300">Floor: {price} ETH</p>
        </div>
      )}
    </div>
  );
};

const TrendingGallery = () => {
  return (
    <div className="bg-[#121212] text-white py-6 px-1 md:px-56">
      <h2 className="text-xl mb-6 font-semibold">Trending</h2>
      <div className="grid grid-cols-3 justify-center gap-1">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <Card image="image5.png" title="Laughing in Colors" artist="Blue Boy" price="0.03" height={450} />
          <Card image="image8.png"title="Laughing in Colors" artist="Blue Boy" price="0.03" height={250} />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-3">
          <Card image="image6.png" title="Laughing in Colors" artist="Blue Boy" price="0.03" height={350} />
          <Card image="image10.png" title="Laughing in Colors" artist="Blue Boy" price="0.03" height={350} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          <Card image="image7.png" title="Laughing in Colors" artist="Blue Boy" price="0.03" height={250} />
          <Card image="image9.png" title="Laughing in Colors" artist="Blue Boy" price="0.03" height={450} />
        </div>
      </div>
    </div>
  );
};

export default TrendingGallery;