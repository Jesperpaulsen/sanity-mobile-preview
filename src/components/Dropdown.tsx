import React, { useRef, useState } from "react"
import { useCloseOnClickOutside } from "../hooks/useCloseOnClickOutside"
import { IDropdownItem } from "../types/IDropdownItem"
import ArrowIcon from "./ArrowIcon"

interface IDropdown<T> {
  selectedItem: IDropdownItem<T>
  availableItems: IDropdownItem<T>[]
  onItemSelected: (newItem: T) => void
}

const Dropdown = <T = any,>({
  selectedItem,
  availableItems,
  onItemSelected,
}: IDropdown<T>) => {
  const ref = useRef(null)

  const [showDropdown, setShowDropdown] = useState(false)

  useCloseOnClickOutside(ref, () => setShowDropdown(false))

  return (
    <div
      ref={ref}
      className="relative whitespace-nowrap w-44 p-1 m-2 cursor-pointer border border-black rounded hover:shadow-md"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div className="flex items-center justify-between">
        {selectedItem.label}
        <ArrowIcon isOpen={showDropdown} />
      </div>
      {showDropdown && (
        <ul className="absolute top-8 -left-1 w-44 z-[5000] bg-white shadow-2xl p-2 rounded-b-md cursor-pointer">
          {availableItems.map((item) => (
            <li
              className="hover:bg-slate-200 p-1 rounded-sm"
              key={`${item.value}`}
              onClick={(e) => {
                e.nativeEvent.stopImmediatePropagation()
                onItemSelected(item.value)
                setShowDropdown(false)
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
