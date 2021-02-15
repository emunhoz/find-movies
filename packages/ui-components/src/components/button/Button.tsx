import React from 'react'
import * as S from './Button.style'

interface IButton {
  children?: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  /**
   * Styles button as 100% width
   *
   * @default false
   */
  block?: boolean
  /**
   * Styles button with background active style
   *
   * @default false
   */
  active?: boolean
}

export const Button = ({ children, icon, disabled, onClick, block = false, active = false, ...rest }: IButton) => (
  <S.Button onClick={onClick} block={block} active={active} {...rest}>
    {icon}
    {children}
  </S.Button>
)
