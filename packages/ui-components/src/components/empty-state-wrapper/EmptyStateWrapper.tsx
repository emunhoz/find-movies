import React from 'react'
import { EmptyState } from '@commons/images'
import * as S from './EmptyStateWrapper.style'

export const EmptyStateWrapper = () => (
  <S.EmptyStateWrapper>
    <S.EmptyStateImg loading="lazy" width="400" height="200" src={EmptyState} alt="Empty state" />
    <S.EmptyStateTitle>Don&apos;t know what to search?</S.EmptyStateTitle>
    <S.EmptyStateSubTitle>Here&apos;s an offer you can&apos;t refuse</S.EmptyStateSubTitle>
  </S.EmptyStateWrapper>
)
