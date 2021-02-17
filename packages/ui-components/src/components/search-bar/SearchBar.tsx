import React from 'react'
import { SearchIcon } from '@commons/images'
import * as S from './SearchBar.style'

interface ISearchBar {
  placeholder?: string
}

export const SearchBar = ({ placeholder }: ISearchBar) => (
  <S.SearchBar>
    <S.SearchIcon><img src={SearchIcon} alt="" /></S.SearchIcon>
    <S.Input type="text" placeholder={placeholder} />
  </S.SearchBar>
)
