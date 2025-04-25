import css from "./LoadMoreBtn.module.css";
import { Image } from "../../types";
import Loader from "../Loader/Loader";

interface LoadMoreBtnProps {
  images: Image[];
  isLoading: boolean;
  handleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  images,
  isLoading,
  handleClick,
}) => {
  if (images.length === 0) return null;
  return (
    <>
      {images.length > 0 && !isLoading && (
        <div className={css.wrapper}>
          <button className={css.button} onClick={handleClick}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMoreBtn;
