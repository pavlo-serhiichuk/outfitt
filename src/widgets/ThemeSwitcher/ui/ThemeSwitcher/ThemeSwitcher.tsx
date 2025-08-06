import React from 'react'
import {useTheme} from "@/shared/hooks/useTheme"
import CircleIcon from '@/shared/assets/icons/circle.svg'
import {getVStack} from "@/shared/ui/Stack"

const ThemeSwitcher = () => {
  const {toggleTheme} = useTheme()

  const handleToggleTheme = (): void => {
    toggleTheme?.()
  }

  return (
    <div className={getVStack({align: 'center'})} onClick={handleToggleTheme}>
      <CircleIcon />
    </div>
  )
}

export default ThemeSwitcher