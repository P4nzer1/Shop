import classNames from "classnames";
import Button, { ButtonProps } from "../Button/Button";
import styles from "./Carousel.module.scss";

interface CarouselButtonProps extends Partial<Pick<ButtonProps, "onClick" | "className" | "text">> {}

interface CarouselProps {
  className?: string;
  currentIndex: number;
  totalItems: number;
  prevButtonProps?: CarouselButtonProps;
  nextButtonProps?: CarouselButtonProps;
}

const Carousel = ({
  className,
  currentIndex,
  totalItems,
  prevButtonProps = { text: "Назад" },
  nextButtonProps = { text: "Далее" },
}: CarouselProps) => {
  const carouselClass = classNames(styles.carousel, className);

  return (
    <div className={carouselClass}>
      <Button
        text={prevButtonProps.text || "Назад"}
        onClick={prevButtonProps.onClick}
        className={classNames(styles.button, prevButtonProps.className)}
        aria-label={`Перейти к предыдущему элементу. Текущий: ${currentIndex + 1} из ${totalItems}`}
      />
      <span className={styles.info}>
        {currentIndex + 1} / {totalItems}
      </span>
      <Button
        text={nextButtonProps.text || "Далее"}
        onClick={nextButtonProps.onClick}
        className={classNames(styles.button, nextButtonProps.className)}
        aria-label={`Перейти к следующему элементу. Текущий: ${currentIndex + 1} из ${totalItems}`}
      />
    </div>
  );
};

export default Carousel;
