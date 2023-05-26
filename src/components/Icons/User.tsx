import React from "react";

type UserIconProps = {
  size: number;
};

export const UserIcon = ({ size }: UserIconProps) => {
  return (
    <svg
      height={size}
      width={size}
      enableBackground="new 0 0 24 24"
      aria-hidden="true"
      id="Layer_1"
      version="1.0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle style={{ fill: "#8b5cf6" }} cx="12" cy="8" r="4" />
      <path
        style={{ fill: "#8b5cf6" }}
        d="M12,14c-6.1,0-8,4-8,4v2h16v-2C20,18,18.1,14,12,14z"
      />
    </svg>
  );
};
