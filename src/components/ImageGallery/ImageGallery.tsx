import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  handleImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleImageClick,
}) => {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.item} key={image.id}>
            <ImageCard
              handleImageClick={handleImageClick}
              id={image.id}
              urls={image.urls}
              image={image}
              description={image.alt_description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
