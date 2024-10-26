const Card = ({ image, title, artist, price }) => {
    return (
      <div className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg bg-gray-900 m-2">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-white text-lg">{title}</h3>
          <p className="text-purple-400">{artist}</p>
          <p className="text-purple-300">Floor: {price} ETH</p>
        </div>
      </div>
    );
  };
  
  const Cards = () => {
    const items = [
      { image: "image1.jpg", title: "Laughing in Colors", artist: "Blue Boy", price: "0.03" },
      { image: "image2.jpg", title: "Art Piece 2", artist: "Artist 2", price: "0.05" },
      { image: "image3.jpg", title: "Art Piece 3", artist: "Artist 3", price: "0.02" },
      // Add more card items as needed
    ];
  
    return (
      <div className="flex overflow-x-auto p-4 ">
        {items.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} artist={item.artist} price={item.price} />
        ))}
      </div>
    );
  };
  
  export default Cards;
  