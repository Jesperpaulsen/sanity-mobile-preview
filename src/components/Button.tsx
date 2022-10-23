import React, { PropsWithChildren } from "react"

interface IButtonProps {
  onClick: VoidFunction
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <div
      className="w-28 text-center p-1 m-2 cursor-pointer border border-black rounded hover:shadow-md"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button
