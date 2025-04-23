import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#yourAppElement");

export default function ImageModal({ image, modalIsOpen, closeModal }) {
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
}
