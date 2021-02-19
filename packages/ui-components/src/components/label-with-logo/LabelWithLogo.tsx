import React from 'react'
import * as S from './LabelWithLogo.style'

interface ILabelWithLogo {
  backgroundLogo?: string
  logo?: string
  value?: string
}

export const LabelWithLogo = ({ backgroundLogo, logo, value }: ILabelWithLogo) => (
  <S.LabelWithLogo>
    <S.LogoWrapper backgroundLogo={backgroundLogo!}>
      <S.Logo src={logo} alt="logo" width="20" height="20" />
    </S.LogoWrapper>
    <S.Value>{value}</S.Value>
  </S.LabelWithLogo>
)
