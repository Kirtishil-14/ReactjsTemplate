/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Iconbutton } from "@etevacon/base-library.components.iconbutton";
// import { Toggle } from "@etevacon/base-library.components.toggle";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../contexts/theme";
import { useNavigate } from "react-router-dom";

function Iconbutton({
  id,
  icon,
  backgroundColor,
  color,
  isDropdownToggle,

  ...props
}) {
  const getClassName = () => {
    let clsName = `btn border-0 bg-${backgroundColor}`;
    if (isDropdownToggle) {
      clsName = clsName + " dropdown-toggle";
    }

    if (color) {
      clsName = clsName + ` text-${color}`;
    }
    return clsName;
  };
  return (
    <button
      data-testid="iconButtonTestId"
      className={getClassName()}
      type="button"
      id={id}
      {...props}
    >
      {icon}
    </button>
  );
}
export function Toggle({ label, value, checked, onChange, ...props }) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input danger"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {label}
      </label>
    </div>
  );
}
const Header = (props) => {
  const navigate = useNavigate();
  const themeObj = useThemeContext();
  const [isDarkMode, changeMode] = useState(false);
  const [t, I18n] = useTranslation();
  useEffect(() => {
    changeMode(themeObj.theme === "dark");
  }, []);
  useEffect(() => {
    changeMode(themeObj.theme === "dark");
  }, [themeObj]);
  const getThemedTextColor = () => {
    if (themeObj.theme === "light") {
      return "text-dark";
    } else {
      return "text-white";
    }
  };
  const getThemedBgColor = () => {
    if (themeObj.theme === "light") {
      return "bg-light";
    } else {
      return "bg-dark";
    }
  };
  const toggleTheme = () => {
    setTimeout(() => {
      if (themeObj.theme === "light") {
        themeObj.changeTheme("dark");
      } else {
        themeObj.changeTheme("light");
      }
    }, 100);
  };
  const changeLanguage = (lnCode) => {
    I18n.changeLanguage(lnCode);
  };
  return (
    <div
      style={{
        marginLeft: "-30px",
        height: "60px",
        padding: "10px",
        paddingLeft: "50px",
      }}
      className={`${getThemedBgColor()} d-flex ${getThemedTextColor()} justify-content-end`}
    >
      <div className="d-flex flex-row align-items-center p-3 nav-group">
        <div className="dropdown m-4">
          <i className="bi bi-bell" style={{ fontSize: "1.5rem" }}></i>
        </div>

        <div className="dropdown">
          <a
            href="#"
            className={`d-flex align-items-center ${getThemedTextColor()} text-decoration-none mx-2`}
            id="dropdownUser1"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="40"
              height="40"
              className="rounded-circle me-2"
            />
            <div className="d-flex align-items-center flex-column">
              <strong>Kirtishil</strong>
              <small>Developer</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
