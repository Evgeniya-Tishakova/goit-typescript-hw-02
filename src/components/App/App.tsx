import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { fetchImages } from "../../imageApi.js";
import { Image } from "../../types";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [aciveImage, setActiveImage] = useState<Image | null>(null);

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    async function getData(searchTerm: string, page: number) {
      try {
        setError(false);
        setIsLoading(true);
        setSearchTerm(searchTerm);
        const data = await fetchImages(searchTerm, page);
        setImages((prevImages) => [...prevImages, ...data.results]); // [1,2,3,4]
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData(searchTerm, page);
    console.log(page, searchTerm);
  }, [page, searchTerm]);

  const handleSearch = (topic: string) => {
    setSearchTerm(topic);
    setPage(1);
    setImages([]);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function handleImageClick(image: Image) {
    setIsOpen(true);
    console.log(image);
    setActiveImage(image);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && (
        <b className={css.error}>Sorry, there was an error, please reload...</b>
      )}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          handleImageClick={handleImageClick}
        ></ImageGallery>
      )}
      <LoadMoreBtn
        images={images}
        isLoading={isLoading}
        handleClick={() => setPage(page + 1)}
      />
      <ImageModal
        image={aciveImage}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}
