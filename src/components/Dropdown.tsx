import React, { useState } from "react"
import { IDropdownItem } from "../types/IDropdownItem"

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
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div>
      <div onClick={() => setShowDropdown(true)}>{selectedItem.label}</div>
      {showDropdown && (
        <ul>
          {availableItems.map((item) => (
            <li
              key={`${item.value}`}
              onClick={() => {
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
