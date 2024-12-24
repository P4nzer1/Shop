import { useState } from "react";

export const useCarousel = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));

  return { currentIndex, handlePrev, handleNext };
};
