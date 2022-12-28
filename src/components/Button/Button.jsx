import React from "react";
import "./Button.scss";

function Button(props) {
  const { children, type, style, onClick } = props;

  const click = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button className={`button`} style={style} type={type} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
