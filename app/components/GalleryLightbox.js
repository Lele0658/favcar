'use client';

import { useState, useEffect } from 'react';

export default function GalleryLightbox({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, images.length]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Rolls-Royce ${idx}`}
            loading="lazy"
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      <div className={`lightbox-overlay ${lightboxOpen ? 'open' : ''}`} onClick={closeLightbox}>
        <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
        <img className="lightbox-content" src={images[currentIndex]} alt="Enlarged view" />
        <button className="lightbox-nav lightbox-prev" onClick={showPrev}>&#10094;</button>
        <button className="lightbox-nav lightbox-next" onClick={showNext}>&#10095;</button>
      </div>
    </>
  );
}