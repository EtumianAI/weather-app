import { useState } from "react";

export default function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <h2>🔍 Поиск города</h2>
        <input
          type="text"
          placeholder="Введите город..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            flex: 1,
          }}
          name=""
          id="city"
        />
        <p>
          Вы ввели: <strong>{inputValue}</strong>
        </p>
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "#3b0d41",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Найти
        </button>
      </form>
  );
}
