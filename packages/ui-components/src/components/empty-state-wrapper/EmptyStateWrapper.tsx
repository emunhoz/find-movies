import React from 'react'
import { EmptyState } from '@commons/images'
import * as S from './EmptyStateWrapper.style'

interface IEmptyStateWrapper {
  example?: string
}

export const EmptyStateWrapper = ({ example = 'example' }: IEmptyStateWrapper) => (
  <S.EmptyStateWrapper>
    <S.EmptyStateImg src={EmptyState} alt="Empty state" />
    <S.EmptyStateTitle>Don&apos;t know what to search?</S.EmptyStateTitle>
    <S.EmptyStateSubTitle>Here&apos;s an offer you can&apos;t refuse</S.EmptyStateSubTitle>
  </S.EmptyStateWrapper>
)
