import React from 'react'
import * as S from './Button.style'

interface IButton {
  children?: React.ReactNode
  icon?: string
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
  /**
   * Ghost style
   *
   * @default false
   */
  ghost?: boolean
  /**
   * Defines the size of the button
   *  big: 66px
   *  small: 32px
   *
   * @default default
   */
  size?: 'big' | 'default' | 'small';
}

export const Button = ({ children, icon, disabled, size = 'default', ghost, onClick, block = false, active = false, ...rest }: IButton) => (
  <S.Button onClick={onClick} ghost={ghost} block={block} size={size} active={active} {...rest}>
    {icon && <img src={icon} />}
    {children}
  </S.Button>
)
