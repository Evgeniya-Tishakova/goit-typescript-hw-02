import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

type SearchBarProps = { onSubmit: (info: string) => void };

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [info, setInfo] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (info.trim() === "") {
      toast.error("This didn't work.");
      return;
    }
    onSubmit(info);
    resetForm();
  };

  const resetForm = () => {
    setInfo("");
  };

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
