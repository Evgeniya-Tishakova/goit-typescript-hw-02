import React from "react";
import { Image } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  id: string;
  urls: Image["urls"];
  description: string;
  handleImageClick: (image: Image) => void;
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  urls,
  description,
  handleImageClick,
  image,
}) => {
  return (
    <img
      onClick={() => handleImageClick(image)}
      className={css.image}
      src={urls.small}
      alt={description || "Image"}
    />
  );
};

export default ImageCard;
