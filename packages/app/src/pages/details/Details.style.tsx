import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const InfoWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-areas:
    'image'
    'description';

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-areas: 'description image';
  }
`
export const PosterImage = styled.div`
  grid-area: image;
`

export const Container = styled.div``
export const Details = styled.div`
  grid-area: description;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-width: 612px;
  }
`

export const Logo = styled.img`
  margin-bottom: 30px;
`

export const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  grid-gap: 2em;
  width: 100%;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  padding: 20px 0;
`

export const LinkWrapper = styled(Link)`
  display: block;
  margin-bottom: 30px;
`

export const Time = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.typography.size.medium}px;
  color: ${({ theme }) => theme.palette.lightGrey};

  div {
    :not(:last-child) {
      margin-right: 15px;
    }
  }
`

export const Label = styled.div`
  padding: 6px;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  color: ${({ theme }) => theme.palette.dark};
  background: ${({ theme }) => theme.palette.lightGrey};
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;
`

export const LabelWithDot = styled.div`
  position: relative;

  ::after {
    position: absolute;
    top: 12px;
    right: -8px;
    display: inline-block;
    width: 2px;
    height: 2px;
    content: '';
    background: ${({ theme }) => theme.palette.lightGrey};
    border-radius: 50%;
  }
`

export const MovieTitle = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.typography.size.extraLarge}px;
  color: ${({ theme }) => theme.palette.white};
`

export const LabelWrapper = styled.div`
  margin-bottom: 40px;

  > div {
    margin-right: 16px;
    margin-bottom: 16px;
  }

  button {
    display: inline-flex;
  }
`

export const Infos = styled.div``

export const BlockDescription = styled.div`
  :first-child {
    margin-bottom: 40px;
  }
`

export const SubTitle = styled.div`
  margin: 0;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.typography.size.large}px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.palette.lightGrey};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.typography.size.regular}px;
  }
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const ListItem = styled.li`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.medium}px;
  line-height: 32px;
  color: ${({ theme }) => theme.palette.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.typography.size.regular}px;
    line-height: 24px;
  }
`

export const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.large}px;
  line-height: 48px;
  color: ${({ theme }) => theme.palette.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.typography.size.regular}px;
    line-height: 24px;
  }
`

export const SubBlock = styled.div`
  display: flex;

  ${BlockDescription} {
    :not(:last-child) {
      margin-right: 40px;
    }
  }
`
