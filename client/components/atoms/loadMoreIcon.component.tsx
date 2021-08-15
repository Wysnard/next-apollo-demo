import React, { FunctionComponent } from "react";

interface LoadMoreIconProps {
  onClick?: () => void;
}

const LoadMoreIcon: FunctionComponent<LoadMoreIconProps> = ({ onClick }) => {
  return (
    <svg
      className="animate-bounce w-10 h-10 text-amber-900 cursor-pointer border border-transparent hover:border-blue-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  );
};

export default LoadMoreIcon;
