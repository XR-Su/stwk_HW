/**
 * @Name: cruise Button
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { memo } from "react";
import cs from "classnames";

const Button = memo(
  ({ onClick = () => {}, children = "", type = "", className = "" }) => {
    return (
      <span
        className={cs("cruise-button", "cruise-button__" + type, className)}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
);

export default Button;
