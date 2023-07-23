import React from "react";
export function Searchbox({ value, onChange, placeholder, width, ...props }) {
  return (
    <form className="d-none d-md-flex m-4">
      <input
        style={{ width: width }}
        data-testid="searchBarTestId"
        className="form-control"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
    </form>
  );
}
