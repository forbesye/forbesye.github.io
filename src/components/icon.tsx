import React from "react";
import classNames from "classnames";

const Icon: React.FC<IconProps> = ({ d, size, label, className }) => {
  return (
    <span
      className={classNames(
        "inline-flex",
        "items-center",
        "justify-center",
        className
      )}
      role="figure"
    >
      <svg
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} className="fill-current" />
      </svg>
      {label && (
        <span className="relative inline-block ml-1 leading-none">{label}</span>
      )}
    </span>
  );
};

export default Icon;
