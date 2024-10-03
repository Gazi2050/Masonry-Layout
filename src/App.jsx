import { cardData } from "./data";

const App = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Masonry Layout</h1>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-indigo-200 text-gray-900 border border-gray-200 rounded-lg shadow-lg mb-8 overflow-hidden cursor-pointer break-inside-avoid-column"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 transition-colors duration-300 hover:text-blue-600">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
