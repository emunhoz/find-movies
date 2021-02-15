import React from 'react'
import { SearchIcon } from '@commons/images'
import * as S from './SearchBar.style'

interface ISearchBar {
  placeholder?: string
}

export const SearchBar = ({ placeholder }: ISearchBar) => (
  <S.SearchBar>
    <S.SearchIcon><SearchIcon/></S.SearchIcon>
    <S.Input type="text" placeholder={placeholder} />
  </S.SearchBar>
)
