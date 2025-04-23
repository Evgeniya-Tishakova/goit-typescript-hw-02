import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [info, setInfo] = useState("");

  const handleInput = (event) => {
    setInfo(event.target.value);
    console.log("handleInput", info);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (info.trim() === "") {
      console.log("boroda");
      toast.error("This didn't work.");
      return;
    }
    onSubmit(info);
    resetForm();
  };

  const resetForm = () => {
    setInfo("");
  };

  console.log("render", info);

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={handleInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={info}
        />
        <button className={css.button} type="submit">
          <IoIosSearch className={css.icon} />
        </button>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            removeDelay: 1000,
          }}
        />
      </form>
    </header>
  );
}
