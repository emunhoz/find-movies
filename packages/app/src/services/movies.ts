import HTTP_CLIENT from './api'

export const findMoviesByName = (name: string) => HTTP_CLIENT.get('', { params: { s: name }})

export const findMoviesById = (id: string) => HTTP_CLIENT.get('', { params: { i: id }})
