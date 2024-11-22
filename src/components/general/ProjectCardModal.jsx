import React, { useState } from 'react';

export default function ProjectCardModal({ thumbnails, title }) {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setShowModal(true);
    setActiveIndex(index);
  };

  const closeModal = () => setShowModal(false);

  const nextImage = () => setActiveIndex((activeIndex + 1) % thumbnails.length);

  const prevImage = () => setActiveIndex((activeIndex - 1 + thumbnails.length) % thumbnails.length);

  return (
    <div>
      <article className="w-full max-h-[25rem] overflow-hidden relative">
        <div className="relative" onClick={() => openModal(0)}>
          <img
            src={thumbnails[0]}
            className="w-full h-full object-cover transition duration-[1.5s]"
            loading="lazy"
            alt={`${title} cover image`}
          />
        </div>

        {/* Título visible siempre */}
        <div className="absolute w-full bottom-0 left-0 backdrop-blur-md text-white bg-black/50 p-4">
          <h3 className="text-xl">{title}</h3>
        </div>
      </article>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeModal}>
            &times;
          </button>
          <button className="absolute left-4 text-white text-3xl" onClick={prevImage}>
            &#10094;
          </button>
          <img src={thumbnails[activeIndex]} className="max-w-full max-h-[90vh] object-contain" alt={`Image ${activeIndex + 1}`} />
          <button className="absolute right-4 text-white text-3xl" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
