import React, { useState } from 'react'
import dropdownStyles from './Dropdown.css'

export interface IDropdown {
  selectedItem: string
  availableItems: { type: string; readableName: string }[]
  updateSelectedItem: (selectedElement: string) => void
}

export const Dropdown: React.FC<IDropdown> = ({
  selectedItem,
  availableItems,
  updateSelectedItem
}: IDropdown) => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div
      className={dropdownStyles.dropdown}
      style={{ width: '200px' }}
      onFocus={() => setDropdown(false)}
    >
      <div
        className={dropdownStyles.button}
        onClick={() => setDropdown(!dropdown)}
      >
        {selectedItem}
      </div>

      {dropdown ? (
        <ul>
          {availableItems.map((item, index) => {
            return (
              <li
                onClick={() => {
                  updateSelectedItem(item.type)
                  setDropdown(!dropdown)
                }}
                key={item.type + index}
              >
                {item.readableName}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
