import React from 'react'
import * as S from './Layout.style'

interface ILayout {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayout) => <S.Layout>{children}</S.Layout>
