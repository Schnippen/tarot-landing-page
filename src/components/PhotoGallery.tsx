import React, { useState, useEffect } from "react";
import styles from "../App.module.css";

const PhotoGallery = ({ photos, delay }: any) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsFadingOut(false);
      }, 500); // Wait for the fade out transition to complete (adjust as needed)
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [photos.length, delay]);

  const currentPhotoStyle = {
    opacity: isFadingOut ? 0 : 1,
    transition: "opacity 0.5s ease-in-out", // Adjust the transition timing as needed
  };

  return (
    <div className={styles.PhotoGallery}>
      <img
        src={photos[currentPhotoIndex]}
        alt="Gallery"
        style={currentPhotoStyle}
      />
    </div>
  );
};

export default PhotoGallery;
