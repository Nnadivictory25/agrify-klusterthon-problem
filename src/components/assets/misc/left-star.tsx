import React from "react";

const LeftStar = ({className}: {className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      className={className}
    >
      <path
        d="M31.5343 0.725098C32.754 10.3096 38.9356 17.8165 48 20.7251C37.8822 23.6337 29.0672 31.1129 24.4657 40.7251C23.246 31.1406 17.0645 23.6337 8 20.7528C18.1178 17.8165 26.9328 10.3096 31.5343 0.725098Z"
        fill="#030712"
      ></path>
      <path
        d="M9.39955 33C9.88336 36.8359 12.3542 39.8423 16 41C11.9568 42.1577 8.41469 45.1641 6.58315 49C6.09935 45.1641 3.62851 42.1577 0 41C4.02592 39.8423 7.55074 36.8359 9.39955 33Z"
        fill="#030712"
      ></path>
    </svg>
  );
};

export default LeftStar;
