/**
 * @Name: cruise Button
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { memo } from "react";

const Button = memo(
  ({ onClick = () => {}, children = "", type = "", className = "" }) => {
    return (
      <span className={`cruise-button ${type} ${className}`} onClick={onClick}>
        {children}
      </span>
    );
  }
);

export default Button;
