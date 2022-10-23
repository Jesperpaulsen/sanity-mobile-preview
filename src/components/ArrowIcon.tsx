import React from "react"

interface IArrowIconProps {
  isOpen: boolean
}

const ArrowIcon: React.FC<IArrowIconProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "rotate-180" : "rotate-0"
      } transform transition duration-150`}
    >
      <svg
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex={-1}
        className="focus:outline-none"
      >
        <path
          d="M15 1L8 8L1 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          tabIndex={-1}
          className="focus:outline-none"
        ></path>
      </svg>
    </div>
  )
}

export default ArrowIcon
