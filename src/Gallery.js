import React, { useEffect, useState } from 'react';
import GalleryCard from "./GalleryCard";

const Gallery = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3200);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  const currentCard = data[currentIndex];

  return (
    <div className="gallery">
      {currentCard && (
        <GalleryCard key={currentCard.id} data={currentCard} />
      )}
    </div>
  );
};

export default Gallery;
