import Carousel from "../../../shared/ui/components/Carousel/Carousel";
import { ProductCardProps } from "../model/types";
import { BASE_URL } from "../../../shared/api/constants";
import { useCarousel } from "../../../shared/ui/components/Carousel/useCarousel";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ name, brand, price, description, images, alt }: ProductCardProps) => {
  const { currentIndex, handlePrev, handleNext } = useCarousel(images.length);

  if (!images.length) return null;

  return (
    <div className={styles.container}>
      <img src={`${BASE_URL}${images[currentIndex]}`} alt={alt} className={styles.img} />
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>Цена: {price} руб.</p>
      <p>Описание: {description}</p>
      <Carousel
        currentIndex={currentIndex}
        totalItems={images.length}
        prevButtonProps={{
          text: "<",
          onClick: handlePrev,
          className: styles.button,
        }}
        nextButtonProps={{
          text: ">",
          onClick: handleNext,
          className: styles.button,
        }}
      />
    </div>
  );
};

export default ProductCard;

