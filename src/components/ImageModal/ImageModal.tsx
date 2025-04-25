import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { Image } from "../../types";

Modal.setAppElement("#yourAppElement");

interface ImageModalProps {
  image: Image | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  modalIsOpen,
  closeModal,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName={css.modalOverlay}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className={css.modalContent}
      >
        {image && <img src={image.urls.regular} alt="Modal Content" />}
      </Modal>
    </>
  );
};

export default ImageModal;
