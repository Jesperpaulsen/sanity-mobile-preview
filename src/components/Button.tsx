import React from 'react'
import styles from './Button.css'

interface IButtonProps {
  landscape: boolean
  updateLandscape: (value: boolean) => void
  label: string
}

export const Button: React.FC<IButtonProps> = ({
  landscape,
  updateLandscape,
  label
}: IButtonProps) => {
  return (
    <div className={styles.button}>
      <button onClick={() => updateLandscape(!landscape)}>{label}</button>
    </div>
  )
}
