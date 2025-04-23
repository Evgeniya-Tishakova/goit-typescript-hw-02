import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ images, isLoading, handleClick }) {
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
}
